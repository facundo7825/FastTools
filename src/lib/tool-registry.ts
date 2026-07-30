import type { Metadata } from "next";
import {
  CATEGORIES,
  TOOLS,
  type Category,
  type CategorySlug,
  type Tool,
} from "@/lib/tools";

export type Crumb = { href: string; title: string };

const SITE_NAME = "FastTools";
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

export function featuredTools(limit = 3): Tool[] {
  return TOOLS.filter((tool) => tool.badge).slice(0, limit);
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

function curatedBase(tool: Tool): { chosen: Tool[]; taken: Set<string> } {
  const chosen: Tool[] = [];
  const taken = new Set<string>([tool.slug]);
  for (const candidate of tool.related) {
    if (taken.has(candidate)) continue;
    const related = bySlug.get(candidate);
    if (!related) continue;
    chosen.push(related);
    taken.add(candidate);
  }
  return { chosen, taken };
}

/**
 * El registro completo de relacionadas se precalcula una unica vez, en un
 * solo barrido sobre TOOLS (orden fijo por los datos, no por el orden en que
 * el codigo externo llama a relatedFor). Esto es lo que permite usar un
 * in-degree DINAMICO durante el relleno sin perder determinismo: el conteo
 * dinamico solo se actualiza dentro de este barrido interno, nunca segun
 * llamadas externas a relatedFor.
 *
 * Con solo 6 herramientas por debajo de RELATED_COUNT (6 "cupos" de relleno)
 * y 7 huerfanas curadas, no alcanza con completar cada una hasta 3: el
 * in-degree dinamico reparte esos 6 cupos entre huerfanas distintas de la
 * misma categoria (en vez de que todas apunten siempre a la misma, que es lo
 * que pasa con un in-degree estatico), pero igual sobra una huerfana sin
 * cupo porque "texto" no tiene ninguna herramienta con deficit. Por eso hay
 * una segunda pasada que fuerza un enlace extra (mas alla del minimo de 3)
 * hacia cualquier huerfana que siga sin quedar enlazada.
 */
const relatedCache = new Map<string, Tool[]>();

(function buildRelatedCache() {
  const dynamicInDegree = new Map(curatedInDegree);

  for (const tool of TOOLS) {
    const { chosen, taken } = curatedBase(tool);

    if (chosen.length < RELATED_COUNT) {
      // Prioriza las menos enlazadas: el relleno empuja enlaces hacia las
      // huerfanas en vez de reforzar los hubs. Misma categoria primero.
      const fill = TOOLS.filter((c) => !taken.has(c.slug)).sort((a, b) => {
        const sameA = a.category === tool.category ? 0 : 1;
        const sameB = b.category === tool.category ? 0 : 1;
        if (sameA !== sameB) return sameA - sameB;
        const degA = dynamicInDegree.get(a.slug) ?? 0;
        const degB = dynamicInDegree.get(b.slug) ?? 0;
        if (degA !== degB) return degA - degB;
        return a.slug.localeCompare(b.slug);
      });

      for (const candidate of fill) {
        if (chosen.length >= RELATED_COUNT) break;
        chosen.push(candidate);
        taken.add(candidate.slug);
        dynamicInDegree.set(candidate.slug, (dynamicInDegree.get(candidate.slug) ?? 0) + 1);
      }
    }

    relatedCache.set(tool.slug, chosen);
  }

  // Segunda pasada: cualquier herramienta que siga sin ningun enlace
  // entrante (ni curado ni de relleno) recibe uno extra, mas alla del
  // minimo de 3, desde un host deterministico (misma categoria primero,
  // despues orden alfabetico de slug).
  const inbound = new Set<string>();
  for (const list of relatedCache.values()) {
    for (const related of list) inbound.add(related.slug);
  }

  const orphans = TOOLS.filter((tool) => !inbound.has(tool.slug));

  for (const orphan of orphans) {
    const hosts = TOOLS.filter((host) => host.slug !== orphan.slug).sort((a, b) => {
      const sameA = a.category === orphan.category ? 0 : 1;
      const sameB = b.category === orphan.category ? 0 : 1;
      if (sameA !== sameB) return sameA - sameB;
      return a.slug.localeCompare(b.slug);
    });

    const host = hosts.find((candidate) => {
      const list = relatedCache.get(candidate.slug) ?? [];
      return !list.some((related) => related.slug === orphan.slug);
    });

    if (host) {
      relatedCache.get(host.slug)?.push(orphan);
    }
  }
})();

export function relatedFor(slug: string): Tool[] {
  getTool(slug);
  return relatedCache.get(slug) ?? [];
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
      url: toolHref(tool),
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
        item: crumb.href,
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
          { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: category.shortTitle,
            item: `/${category.slug}`,
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
          url: toolHref(tool),
        })),
      },
    ],
  };
}
