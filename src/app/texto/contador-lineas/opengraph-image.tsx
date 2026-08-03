import { renderOgImage } from "@/lib/og-image";
import { getCategory, getTool } from "@/lib/tool-registry";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "FastTools";

export default function Image() {
  const tool = getTool("contador-lineas");
  return renderOgImage({ title: tool.title, eyebrow: getCategory(tool.category).shortTitle });
}
