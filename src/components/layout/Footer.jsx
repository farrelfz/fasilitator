const links = [
  { title: "Cara Kerja", href: "/cara-kerja" },
  { title: "Testimoni", href: "/testimoni" },
  { title: "FAQ", href: "/faq" },
  { title: "Kontak", href: "/kontak" }
];

export default function Footer() {
  return (
    <footer className="border-t border-skbm-gray-light bg-skbm-gray-light/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-[2fr,1fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-skbm-navy">SKBM</p>
          <p className="text-sm text-skbm-gray">
            Katalog fasilitator resmi Sekolah KIR Binaan KPM. Fokus pada pendampingan riset dan
            dampak belajar berkelanjutan.
          </p>
          <p className="text-xs text-skbm-gray">© 2024 SKBM. Semua hak cipta dilindungi.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold text-skbm-gray-dark">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-skbm-green">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
