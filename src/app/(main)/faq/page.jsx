import { faqs } from "@/lib/mockData";

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="card p-8">
        <h1 className="text-3xl font-semibold text-skbm-navy">FAQ</h1>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-skbm-gray-light p-5">
              <p className="text-sm font-semibold text-skbm-navy">{faq.question}</p>
              <p className="mt-2 text-sm text-skbm-gray">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
