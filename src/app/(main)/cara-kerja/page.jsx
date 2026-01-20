const steps = [
  {
    title: "Pilih fasilitator",
    description: "Telusuri katalog dan lihat profil fasil sesuai bidang pendampingan."
  },
  {
    title: "Isi rencana program",
    description: "Tuliskan tujuan program, tanggal pilihan, dan fee usulan (opsional)."
  },
  {
    title: "Diskusi via WhatsApp",
    description: "Hubungi CP SKBM dengan pesan otomatis untuk koordinasi selanjutnya."
  }
];

export default function CaraKerjaPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="card p-8">
        <h1 className="text-3xl font-semibold text-skbm-navy">Cara Kerja</h1>
        <p className="mt-3 text-sm text-skbm-gray">
          Alur sederhana untuk sekolah tanpa login dan tanpa komodifikasi.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-skbm-gray-light p-5">
              <p className="text-xs font-semibold text-skbm-green">Langkah {index + 1}</p>
              <h2 className="mt-2 text-lg font-semibold text-skbm-navy">{step.title}</h2>
              <p className="mt-2 text-sm text-skbm-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
