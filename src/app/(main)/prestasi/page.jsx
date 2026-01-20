import { achievements } from "@/lib/mockData";

export default function PrestasiPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-skbm-navy">Prestasi</h1>
        <p className="text-sm text-skbm-gray">
          Galeri capaian siswa dan sekolah binaan, dapat difilter per bidang dan tahun.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {achievements.map((achievement) => (
          <div key={achievement.title} className="card p-6">
            <p className="text-xs font-semibold text-skbm-green">{achievement.year}</p>
            <h2 className="mt-2 text-lg font-semibold text-skbm-navy">{achievement.title}</h2>
            <p className="mt-2 text-sm text-skbm-gray">{achievement.description}</p>
            <span className="mt-4 inline-flex text-xs font-semibold text-skbm-blue">
              {achievement.field}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
