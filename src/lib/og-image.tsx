import { ImageResponse } from "next/og";

// Misma paleta que src/app/globals.css. Sin fuentes externas: ImageResponse
// corre en build estatico y sin red, asi que usamos la fuente por defecto
// que trae el motor de renderizado (satori).
const PALETTE = {
  background: "#f5f1e8",
  text: "#172033",
  primary: "#0f766e",
  secondary: "#f59e0b",
  border: "#d8cfbf",
};

const IMAGE_SIZE = { width: 1200, height: 630 };

/**
 * Next.js resuelve el `openGraph.images` de un segmento reemplazando (no
 * mergeando) el objeto `openGraph` completo apenas un page.tsx define el
 * suyo propio, incluso si no incluye `images`. Eso corta la herencia
 * documentada del `opengraph-image` de una carpeta superior. Las paginas sin
 * imagen propia (home, categorias, estaticas) definen su propio `openGraph`
 * con titulo y descripcion, asi que necesitan referenciar esta imagen a mano
 * para heredar la generica de la raiz en vez de quedarse sin og:image.
 */
export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: IMAGE_SIZE.width,
  height: IMAGE_SIZE.height,
  alt: "FastTools",
};

type RenderOgImageOptions = {
  title: string;
  eyebrow?: string;
};

/**
 * Factory compartida para las imagenes Open Graph del sitio. Devuelve un
 * ImageResponse de 1200x630 con la marca FastTools arriba y el titulo de la
 * herramienta o pagina grande, en la paleta del sitio.
 */
export function renderOgImage({ title, eyebrow }: RenderOgImageOptions): ImageResponse {
  const titleFontSize = title.length > 40 ? 56 : title.length > 26 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: PALETTE.background,
          padding: "64px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              width: 22,
              height: 22,
              borderRadius: 7,
              backgroundColor: PALETTE.primary,
            }}
          />
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: PALETTE.primary,
              letterSpacing: "-0.02em",
            }}
          >
            FastTools
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {eyebrow ? (
            <span
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 700,
                color: PALETTE.secondary,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
              }}
            >
              {eyebrow}
            </span>
          ) : null}
          <span
            style={{
              display: "flex",
              fontSize: titleFontSize,
              fontWeight: 700,
              color: PALETTE.text,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: 6,
            borderRadius: 999,
            backgroundColor: PALETTE.border,
          }}
        />
      </div>
    ),
    IMAGE_SIZE
  );
}
