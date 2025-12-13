"use client";

import { useEffect, useRef } from "react";

export default function Marquee({
  items,
  speed = 0.5,
}: {
  items: string[];
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0;
    let rafId: number;

    const animate = () => {
      x -= speed;
      el.style.transform = `translateX(${x}px)`;

      if (Math.abs(x) > el.scrollWidth / 2) {
        x = 0;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={ref}
        className="flex w-max gap-6 will-change-transform"
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="px-6 py-3 rounded-full bg-[#07121a] border border-slate-800 text-slate-200 font-medium whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
