import Button from "@/components/ui/Button";
import FacilitatorCard from "@/components/shared/FacilitatorCard";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";
import {
  stats,
  categories,
  facilitators,
  testimonials,
  achievements
} from "@/lib/mockData";

export default function HomePage() {
  return (
    <div>
      <section className="gradient-hero">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <span className="chip">Katalog Fasilitator SKBM</span>
            <h1 className="text-3xl font-semibold text-skbm-navy md:text-5xl">
              Temukan Fasil KIR Berpengalaman untuk Sekolah Anda.
            </h1>
            <p className="text-base text-skbm-gray">
              Jelajahi profil fasilitator berdampak, lihat rekam jejak pembinaan, dan diskusikan agenda
              melalui WhatsApp tanpa perlu login.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/fasilitator">Pilih Fasil</Button>
              <Button href="/cara-kerja" variant="outline">
                Cara Kerja
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="card p-4 text-center">
                  <p className="text-2xl font-semibold text-skbm-green">{item.value}</p>
                  <p className="text-xs text-skbm-gray">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card flex flex-col justify-between gap-6 p-8">
            <div>
              <p className="text-sm font-semibold text-skbm-navy">Pencarian cepat</p>
              <p className="text-xs text-skbm-gray">
                Temukan fasil berdasarkan bidang, jenjang, dan mode pembinaan.
              </p>
            </div>
            <div className="space-y-4">
              <input className="input" placeholder="Bidang atau nama fasil" />
              <div className="grid gap-3 sm:grid-cols-2">
                <select className="input">
                  <option>Semua bidang</option>
                  <option>Fisika</option>
                  <option>Kimia</option>
                  <option>Biologi</option>
                </select>
                <select className="input">
                  <option>Mode pembinaan</option>
                  <option>Luring</option>
                  <option>Daring</option>
                </select>
              </div>
              <Button href="/fasilitator" className="w-full">
                Lihat Katalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-3">
          <h2 className="section-title">Kategori Program Populer</h2>
          <p className="section-subtitle">
            Pilih bidang pendampingan yang sesuai dengan kebutuhan sekolah Anda.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.title} className="card p-6">
              <h3 className="text-lg font-semibold text-skbm-navy">{category.title}</h3>
              <p className="mt-2 text-sm text-skbm-gray">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-skbm-gray-light/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <h2 className="section-title">Fasilitator Unggulan</h2>
            <p className="section-subtitle">
              Profil dengan rekam jejak pendampingan dan dampak nyata di sekolah binaan.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {facilitators.slice(0, 2).map((facilitator) => (
              <FacilitatorCard key={facilitator.id} facilitator={facilitator} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-3">
          <h2 className="section-title">Prestasi & Dampak</h2>
          <p className="section-subtitle">
            Capaian siswa dan sekolah binaan yang menjadi bukti pendampingan berkelanjutan.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="card p-6">
              <p className="text-xs font-semibold text-skbm-green">{achievement.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-skbm-navy">{achievement.title}</h3>
              <p className="mt-2 text-sm text-skbm-gray">{achievement.description}</p>
              <span className="mt-4 inline-flex text-xs font-semibold text-skbm-blue">
                {achievement.field}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-skbm-gray-light/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <h2 className="section-title">Testimoni & Dampak</h2>
            <p className="section-subtitle">
              Cerita dari sekolah binaan tentang perubahan budaya riset setelah pendampingan.
            </p>
          </div>
          <div className="mt-8">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="card p-10 text-center">
          <p className="text-sm font-semibold text-skbm-green">Komitmen Etik</p>
          <h2 className="mt-3 text-2xl font-semibold text-skbm-navy">
            Pendampingan tanpa komodifikasi, fokus pada keahlian dan dampak belajar.
          </h2>
          <p className="mt-4 text-sm text-skbm-gray">
            Kami menjaga transparansi, keamanan, dan kesetaraan kolaborasi antara fasilitator dan sekolah.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/tentang">Pelajari Pendekatan</Button>
            <Button href="/fasilitator" variant="outline">
              Diskusikan Agenda Anda
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
