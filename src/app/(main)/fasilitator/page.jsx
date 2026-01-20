import SearchAndFilter from "@/components/shared/SearchAndFilter";
import FacilitatorCard from "@/components/shared/FacilitatorCard";
import { facilitators } from "@/lib/mockData";

export default function FacilitatorPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-skbm-navy">Katalog Fasilitator</h1>
        <p className="text-sm text-skbm-gray">
          Jelajahi fasil berdasarkan bidang, mode, serta rekam jejak pendampingan.
        </p>
      </div>
      <div className="mt-6">
        <SearchAndFilter />
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {facilitators.map((facilitator) => (
          <FacilitatorCard key={facilitator.id} facilitator={facilitator} />
        ))}
      </div>
    </div>
  );
}
