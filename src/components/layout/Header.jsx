import Link from "next/link";

const navigation = [
  { href: "/", label: "Beranda" },
  { href: "/fasilitator", label: "Fasilitator" },
  { href: "/program", label: "Program" },
  { href: "/jejaring", label: "Jejaring" },
  { href: "/prestasi", label: "Prestasi" },
  { href: "/tentang", label: "Tentang" }
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-skbm-gray-light bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-skbm-green text-white font-semibold">
            SK
          </div>
          <div>
            <p className="text-sm font-semibold text-skbm-navy">SKBM</p>
            <p className="text-xs text-skbm-gray">Sekolah KIR Binaan KPM</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-skbm-gray-dark lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-skbm-green">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/fasilitator" className="btn-primary text-xs">Pilih Fasil</Link>
      </div>
    </header>
  );
}
