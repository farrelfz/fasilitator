import { schools, stats } from "@/lib/mockData";

export default function JejaringPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-skbm-navy">Jejaring SKBM</h1>
        <p className="text-sm text-skbm-gray">
          Transparansi kolaborasi bersama sekolah binaan dan dampak program SKBM.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
        <div className="card flex h-full flex-col gap-4 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-skbm-navy">Peta sekolah binaan</h2>
            <span className="badge">Map siap diintegrasi</span>
          </div>
          <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-skbm-gray-light bg-skbm-gray-light/40 text-sm text-skbm-gray">
            Placeholder peta jejaring (Leaflet/Mapbox)
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl border border-skbm-gray-light bg-white p-4 text-center">
                <p className="text-lg font-semibold text-skbm-green">{item.value}</p>
                <p className="text-xs text-skbm-gray">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-skbm-navy">Daftar sekolah binaan</h2>
          <div className="mt-4 space-y-4 text-sm text-skbm-gray">
            {schools.map((school) => (
              <div key={school.name} className="rounded-xl border border-skbm-gray-light p-4">
                <p className="font-semibold text-skbm-navy">{school.name}</p>
                <p>{school.city}</p>
                <p className="text-xs">{school.program} • {school.year}</p>
                <p className="text-xs text-skbm-blue">Fasil: {school.facilitator}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
