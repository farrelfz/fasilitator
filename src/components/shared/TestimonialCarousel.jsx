"use client";

import { useState } from "react";

export default function TestimonialCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="card p-6 md:p-8">
      <div className="flex flex-col gap-4">
        <p className="text-sm text-skbm-gray">{current.quote}</p>
        <div>
          <p className="text-sm font-semibold text-skbm-navy">{current.name}</p>
          <p className="text-xs text-skbm-gray">{current.role}</p>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <button onClick={prev} className="btn-outline text-xs">
          Sebelumnya
        </button>
        <button onClick={next} className="btn-primary text-xs">
          Berikutnya
        </button>
      </div>
    </div>
  );
}
