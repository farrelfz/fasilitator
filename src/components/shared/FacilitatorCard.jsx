"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import WhatsAppGenerator from "@/components/specific/WhatsAppGenerator";

export default function FacilitatorCard({ facilitator }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="p-6 flex h-full flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-2xl bg-skbm-gray-light flex items-center justify-center text-sm font-semibold text-skbm-navy">
          {facilitator.name
            .split(" ")
            .slice(0, 2)
            .map((part) => part[0])
            .join("")}
        </div>
        <div className="space-y-1">
          <p className="text-lg font-semibold text-skbm-navy">{facilitator.name}</p>
          <p className="text-sm text-skbm-gray">{facilitator.role}</p>
        </div>
      </div>
      <p className="text-sm text-skbm-gray">{facilitator.mission}</p>
      <div className="flex flex-wrap gap-2">
        {facilitator.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {facilitator.achievements.map((achievement) => (
          <span key={achievement} className="badge">
            {achievement}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-skbm-gray">
        <span>{facilitator.impact}</span>
        <span>{facilitator.location}</span>
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        <Button href={`/fasilitator/${facilitator.id}`} variant="outline" className="text-xs">
          Lihat Profil
        </Button>
        <Button onClick={() => setOpen(true)} className="text-xs">
          Hubungi
        </Button>
      </div>
      {open ? (
        <WhatsAppGenerator facilitator={facilitator} onClose={() => setOpen(false)} />
      ) : null}
    </Card>
  );
}
