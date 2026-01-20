import { programs } from "@/lib/mockData";

export default function ProgramPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-skbm-navy">Program & Pelatihan</h1>
        <p className="text-sm text-skbm-gray">
          Ragam pendampingan untuk OPSI/OSN, bootcamp KIR, dan workshop metodologi riset.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {programs.map((program) => (
          <div key={program.title} className="card p-6">
            <h2 className="text-xl font-semibold text-skbm-navy">{program.title}</h2>
            <p className="mt-2 text-sm text-skbm-gray">{program.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge">Target: {program.target}</span>
              <span className="badge">Durasi: {program.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
