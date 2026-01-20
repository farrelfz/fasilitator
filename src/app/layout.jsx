import "./globals.css";

export const metadata = {
  title: "SKBM - Sekolah KIR Binaan KPM | Katalog Fasilitator",
  description:
    "Katalog fasilitator KIR SKBM untuk sekolah. Temukan pendamping berpengalaman dan diskusikan agenda lewat WhatsApp.",
  icons: {
    icon: "/icons/whatsapp.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
