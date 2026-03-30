"use client";

import { CSSProperties, useEffect, useMemo, useRef } from "react";

type Props = {
  id?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const adSlots = {
  "ad-top": process.env.NEXT_PUBLIC_AD_SLOT_TOP,
  "ad-content": process.env.NEXT_PUBLIC_AD_SLOT_CONTENT,
  "ad-bottom": process.env.NEXT_PUBLIC_AD_SLOT_BOTTOM,
  "ad-tool-top": process.env.NEXT_PUBLIC_AD_SLOT_TOOL_TOP,
  "ad-tool-mid": process.env.NEXT_PUBLIC_AD_SLOT_TOOL_MID,
  "ad-tool-side": process.env.NEXT_PUBLIC_AD_SLOT_TOOL_SIDE,
  "ad-tool-bottom": process.env.NEXT_PUBLIC_AD_SLOT_TOOL_BOTTOM,
} as const;

const fallbackHeights: Record<string, string> = {
  "ad-top": "120px",
  "ad-content": "120px",
  "ad-bottom": "120px",
  "ad-tool-top": "140px",
  "ad-tool-mid": "140px",
  "ad-tool-side": "280px",
  "ad-tool-bottom": "140px",
};

const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export default function AdPlaceholder({ id = "ad-slot" }: Props) {
  const initialized = useRef(false);
  const adSlot = useMemo(() => adSlots[id as keyof typeof adSlots], [id]);
  const minHeight = fallbackHeights[id] ?? "120px";
  const placeholderStyle = { minHeight } satisfies CSSProperties;

  useEffect(() => {
    if (!clientId || !adSlot || initialized.current === true) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      initialized.current = true;
    } catch {
      initialized.current = false;
    }
  }, [adSlot]);

  if (!clientId || !adSlot) {
    if (process.env.NODE_ENV === "production") {
      return null;
    }

    return (
      <div
        id={id}
        style={placeholderStyle}
        className="flex w-full items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-4 py-6 text-center text-xs uppercase tracking-[0.18em] text-muted"
      >
        Espacio publicitario: {id}
      </div>
    );
  }

  return (
    <div id={id} className="w-full overflow-hidden rounded-2xl">
      <ins
        className="adsbygoogle block"
        style={{ display: "block", minHeight }}
        data-ad-client={clientId}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
