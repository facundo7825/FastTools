import type { Metadata } from "next";
import {
  CATEGORIES,
  TOOLS,
  type Category,
  type CategorySlug,
  type Tool,
} from "@/lib/tools";
import { assertRegistryInvariants } from "@/lib/tool-registry.invariants";

export type Crumb = { href: string; title: string };

const SITE_NAME = "FastTools";
const SITE_URL = "https://fasttools.app";
const RELATED_COUNT = 3;

const bySlug = new Map(TOOLS.map((tool) => [tool.slug, tool]));
const categoryBySlug = new Map(CATEGORIES.map((cat) => [cat.slug, cat]));

export function getTool(slug: string): Tool {
  const tool = bySlug.get(slug);
  if (!tool) throw new Error(`Herramienta desconocida: ${slug}`);
  return tool;
}

export function getCategory(slug: CategorySlug): Category {
  const category = categoryBySlug.get(slug);
  if (!category) throw new Error(`Categoria desconocida: ${slug}`);
  return category;
}

export function toolHref(tool: Tool): string {
  return `/${tool.category}/${tool.slug}`;
}

export function toolsByCategory(slug: CategorySlug): Tool[] {
  return TOOLS.filter((tool) => tool.category === slug);
}

export function featuredTools(limit?: number): Tool[] {
  const featured = TOOLS.filter((tool) => tool.badge);
  return limit === undefined ? featured : featured.slice(0, limit);
}

/**
 * In-degree calculado SOLO sobre las aristas curadas. Si contara el relleno,
 * el resultado dependeria del orden de evaluacion y dejaria de ser determinista.
 */
const curatedInDegree = (() => {
  const counts = new Map(TOOLS.map((tool) => [tool.slug, 0]));
  for (const tool of TOOLS) {
    for (const slug of tool.related) {
      if (slug !== tool.slug && counts.has(slug)) {
        counts.set(slug, (counts.get(slug) ?? 0) + 1);
      }
    }
  }
  return counts;
})();

export function relatedFor(slug: string): Tool[] {
  const tool = getTool(slug);
  const chosen: Tool[] = [];
  const taken = new Set<string>([slug]);

  for (const candidate of tool.related) {
    if (chosen.length >= RELATED_COUNT) break;
    if (taken.has(candidate)) continue;
    const related = bySlug.get(candidate);
    if (!related) continue;
    chosen.push(related);
    taken.add(candidate);
  }

  if (chosen.length < RELATED_COUNT) {
    // Prioriza las menos enlazadas: el relleno empuja enlaces hacia las
    // huerfanas en vez de reforzar los hubs. Misma categoria primero.
    const fill = TOOLS.filter((c) => !taken.has(c.slug)).sort((a, b) => {
      const sameA = a.category === tool.category ? 0 : 1;
      const sameB = b.category === tool.category ? 0 : 1;
      if (sameA !== sameB) return sameA - sameB;
      const degA = curatedInDegree.get(a.slug) ?? 0;
      const degB = curatedInDegree.get(b.slug) ?? 0;
      if (degA !== degB) return degA - degB;
      return a.slug.localeCompare(b.slug);
    });

    for (const candidate of fill) {
      if (chosen.length >= RELATED_COUNT) break;
      chosen.push(candidate);
      taken.add(candidate.slug);
    }
  }

  return chosen;
}

export function breadcrumbFor(slug: string): Crumb[] {
  const tool = getTool(slug);
  const category = getCategory(tool.category);
  return [
    { href: "/", title: "Inicio" },
    { href: `/${category.slug}`, title: category.shortTitle },
    { href: toolHref(tool), title: tool.shortTitle ?? tool.title },
  ];
}

export function toolMetadata(slug: string): Metadata {
  const tool = getTool(slug);
  const href = toolHref(tool);
  const branded = `${tool.metaTitle} | ${SITE_NAME}`;

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: { canonical: href },
    openGraph: {
      title: branded,
      description: tool.metaDescription,
      url: href,
      type: "website",
    },
    twitter: {
      title: branded,
      description: tool.metaDescription,
    },
  };
}

export function toolJsonLd(slug: string) {
  const tool = getTool(slug);
  const graph: object[] = [
    {
      "@type": "SoftwareApplication",
      name: tool.title,
      description: tool.description,
      url: `${SITE_URL}${toolHref(tool)}`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbFor(slug).map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.title,
        item: `${SITE_URL}${crumb.href}`,
      })),
    },
  ];

  if (tool.howTo) {
    graph.push({
      "@type": "HowTo",
      name: tool.howTo.name,
      step: tool.howTo.steps.map((text) => ({ "@type": "HowToStep", text })),
    });
  }

  if (tool.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: tool.faq.map((entry) => ({
        "@type": "Question",
        name: entry.q,
        acceptedAnswer: { "@type": "Answer", text: entry.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function categoryJsonLd(slug: CategorySlug) {
  const category = getCategory(slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: category.shortTitle,
            item: `${SITE_URL}/${category.slug}`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: category.title,
        itemListElement: toolsByCategory(slug).map((tool, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: tool.title,
          url: `${SITE_URL}${toolHref(tool)}`,
        })),
      },
    ],
  };
}

// Llamada (no import de efecto secundario) al final del archivo: se ejecuta
// en orden, despues de que TOOLS, CATEGORIES y relatedFor ya estan definidos.
// El modulo de invariantes no importa nada de aca, asi que no hay ciclo.
assertRegistryInvariants(TOOLS, CATEGORIES, relatedFor);
