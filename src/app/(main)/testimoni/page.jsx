import TestimonialCarousel from "@/components/shared/TestimonialCarousel";
import { testimonials } from "@/lib/mockData";

export default function TestimoniPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="card p-8">
        <h1 className="text-3xl font-semibold text-skbm-navy">Testimoni & Dampak</h1>
        <p className="mt-3 text-sm text-skbm-gray">
          Cerita perubahan dari sekolah binaan yang telah berkolaborasi dengan SKBM.
        </p>
        <div className="mt-6">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
}
