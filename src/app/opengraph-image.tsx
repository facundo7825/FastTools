import { renderOgImage } from "@/lib/og-image";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "FastTools";

export default function Image() {
  return renderOgImage({
    title: "Herramientas online gratuitas",
    eyebrow: "FastTools.app",
  });
}
