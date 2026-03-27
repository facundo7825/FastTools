"use client";

import { useId, useState } from "react";

const PARAGRAPHS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, nunc augue iaculis purus, quis euismod arcu mauris id nunc. Sed pretium. Cras placerat accumsan nulla. Nunc rutrum turpis sed pede. Sed bibendum. Aliquam posuere. Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.",
  "Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. Cras varius. Donec aliquet, tortor sed accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et nisl hendrerit mollis. Vestibulum ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.",
  "Nullam eu ante vel est convallis dignissim. Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed pede. Sed bibendum. Aliquam posuere. Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.",
  "Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
  "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.",
  "Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.",
];

export default function GeneradorLoremIpsum() {
  const rangeId = useId();
  const [cantidad, setCantidad] = useState(3);
  const [feedback, setFeedback] = useState("");

  const texto = PARAGRAPHS.slice(0, cantidad).join("\n\n");

  async function handleCopy() {
    await navigator.clipboard.writeText(texto);
    setFeedback("Texto copiado.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor={rangeId} className="text-sm text-muted">
          Parrafos: {cantidad}
        </label>
        <input
          id={rangeId}
          type="range"
          min={1}
          max={8}
          value={cantidad}
          onChange={(e) => {
            setCantidad(Number(e.target.value));
            setFeedback("");
          }}
          className="w-40 accent-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
        />
      </div>

      <div className="border border-border rounded-xl p-4 bg-background text-text text-sm leading-relaxed whitespace-pre-wrap">
        {texto}
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <button
          onClick={handleCopy}
          className="px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors w-fit"
        >
          Copiar
        </button>
        <p className="text-xs text-muted" aria-live="polite">
          {feedback || "Ajusta la cantidad y copia el texto cuando quieras."}
        </p>
      </div>
    </div>
  );
}
