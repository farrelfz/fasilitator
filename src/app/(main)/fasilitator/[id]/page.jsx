import WhatsAppGenerator from "@/components/specific/WhatsAppGenerator";
import { facilitators } from "@/lib/mockData";

export default function FacilitatorDetailPage({ params }) {
  const facilitator = facilitators.find((item) => item.id === params.id);

  if (!facilitator) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-2xl font-semibold text-skbm-navy">Fasilitator tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="card grid gap-8 p-8 md:grid-cols-[1fr,2fr]">
        <div className="space-y-4">
          <div className="h-32 w-32 rounded-2xl bg-skbm-gray-light flex items-center justify-center text-2xl font-semibold text-skbm-navy">
            {facilitator.name
              .split(" ")
              .slice(0, 2)
              .map((part) => part[0])
              .join("")}
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-skbm-navy">{facilitator.name}</h1>
            <p className="text-sm text-skbm-gray">{facilitator.role}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {facilitator.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-skbm-gray">{facilitator.location}</p>
          <p className="text-xs text-skbm-gray">{facilitator.availability}</p>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-skbm-navy">Tentang Fasil</h2>
            <p className="mt-2 text-sm text-skbm-gray">{facilitator.bio}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-skbm-navy">Pendekatan & Metodologi</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-skbm-gray">
              {facilitator.methodology.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-skbm-navy">Ruang Lingkup Program</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {facilitator.scope.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-skbm-navy">Prestasi Pilihan</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-skbm-gray">
              {facilitator.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-skbm-navy">Bahasa</h3>
            <p className="mt-2 text-sm text-skbm-gray">{facilitator.languages.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <WhatsAppGenerator facilitator={facilitator} />
      </div>
    </div>
  );
}
