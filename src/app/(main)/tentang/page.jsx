export default function TentangPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="card p-8">
        <h1 className="text-3xl font-semibold text-skbm-navy">Tentang SKBM</h1>
        <p className="mt-4 text-sm text-skbm-gray">
          SKBM (Sekolah KIR Binaan KPM) merupakan jejaring fasilitator yang mendampingi sekolah
          dalam membangun budaya riset ilmiah. Kami menjunjung tinggi etika pendampingan, transparansi
          kolaborasi, dan fokus pada dampak belajar.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-skbm-gray-light p-4">
            <p className="text-sm font-semibold text-skbm-navy">Visi</p>
            <p className="mt-2 text-sm text-skbm-gray">
              Mendorong ekosistem riset siswa yang inklusif, berkelanjutan, dan relevan.
            </p>
          </div>
          <div className="rounded-2xl border border-skbm-gray-light p-4">
            <p className="text-sm font-semibold text-skbm-navy">Nilai</p>
            <p className="mt-2 text-sm text-skbm-gray">
              Profesionalitas, empati, transparansi, dan kolaborasi jangka panjang.
            </p>
          </div>
          <div className="rounded-2xl border border-skbm-gray-light p-4">
            <p className="text-sm font-semibold text-skbm-navy">Kode Etik</p>
            <p className="mt-2 text-sm text-skbm-gray">
              Tidak mengkomodifikasi fasilitator, menghargai kontribusi sekolah, dan menjaga privasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
