export default function KontakPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="card p-8">
        <h1 className="text-3xl font-semibold text-skbm-navy">Kontak SKBM</h1>
        <p className="mt-3 text-sm text-skbm-gray">
          Hubungi CP SKBM untuk koordinasi program, darurat acara, atau informasi kebijakan privasi.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-skbm-gray-light p-5">
            <p className="text-sm font-semibold text-skbm-navy">WhatsApp CP</p>
            <p className="mt-2 text-sm text-skbm-gray">+62 812-3456-7890</p>
          </div>
          <div className="rounded-2xl border border-skbm-gray-light p-5">
            <p className="text-sm font-semibold text-skbm-navy">Email</p>
            <p className="mt-2 text-sm text-skbm-gray">halo@skbm.or.id</p>
          </div>
          <div className="rounded-2xl border border-skbm-gray-light p-5">
            <p className="text-sm font-semibold text-skbm-navy">Kontak Darurat Acara</p>
            <p className="mt-2 text-sm text-skbm-gray">+62 811-2222-3333</p>
          </div>
          <div className="rounded-2xl border border-skbm-gray-light p-5">
            <p className="text-sm font-semibold text-skbm-navy">Kebijakan Privasi</p>
            <p className="mt-2 text-sm text-skbm-gray">
              Kami menjaga data sekolah dengan standar privasi yang transparan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
