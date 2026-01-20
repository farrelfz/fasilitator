"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";

const skbmContact = {
  name: "Tim SKBM",
  phone: "6281234567890"
};

export default function WhatsAppGenerator({ facilitator, onClose }) {
  const [form, setForm] = useState({
    sender: "",
    school: "",
    program: "",
    date1: "",
    date2: "",
    mode: "",
    duration: "",
    fee: "",
    note: ""
  });

  const message = useMemo(() => {
    return `Halo Kak ${skbmContact.name},\nSaya ${form.sender || "[Nama Pengirim]"} dari ${
      form.school || "[Nama Sekolah/Instansi]"
    }.\nKami ingin mengundang fasil: ${facilitator.name} – ${
      facilitator.role
    } untuk program ${form.program || "[Nama Program/Agenda]"}.\nPreferensi tanggal: ${
      form.date1 || "[Tanggal Opsi 1]"
    } atau ${form.date2 || "[Tanggal Opsi 2]"}.\nLokasi/Mode: ${
      form.mode || "[Luring/Daring + Kota/Platform]"
    }.\nDurasi: ${form.duration || "[x jam/hari]"}.\nPerkiraan fee dari kami: ${
      form.fee ? `Rp${form.fee}` : "(opsional, bisa didiskusikan)"
    }.\nCatatan tambahan: ${form.note || "-"}.\nApakah Kakak available pada tanggal tersebut? Terima kasih 🙏`;
  }, [facilitator.name, facilitator.role, form]);

  const whatsappLink = `https://wa.me/${skbmContact.phone}?text=${encodeURIComponent(message)}`;

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const isModal = Boolean(onClose);

  return (
    <div className={isModal ? "fixed inset-0 z-50 flex items-center justify-center bg-skbm-navy/40 p-6" : ""}>
      <div className={`card w-full ${isModal ? "max-h-[90vh] max-w-2xl overflow-y-auto p-6" : "p-8"}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-skbm-navy">Rencana Program</p>
            <p className="text-sm text-skbm-gray">
              Isi rencana singkat agar tim SKBM dapat menindaklanjuti kebutuhan sekolah Anda.
            </p>
          </div>
          {isModal ? (
            <button onClick={onClose} className="text-sm font-semibold text-skbm-gray">
              Tutup
            </button>
          ) : null}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <label className="label">Nama PIC</label>
            <input className="input" value={form.sender} onChange={update("sender")} />
          </div>
          <div>
            <label className="label">Sekolah/Instansi</label>
            <input className="input" value={form.school} onChange={update("school")} />
          </div>
          <div>
            <label className="label">Program/Agenda</label>
            <input className="input" value={form.program} onChange={update("program")} />
          </div>
          <div>
            <label className="label">Mode & Lokasi</label>
            <input className="input" value={form.mode} onChange={update("mode")} />
          </div>
          <div>
            <label className="label">Tanggal Opsi 1</label>
            <input className="input" value={form.date1} onChange={update("date1")} type="date" />
          </div>
          <div>
            <label className="label">Tanggal Opsi 2</label>
            <input className="input" value={form.date2} onChange={update("date2")} type="date" />
          </div>
          <div>
            <label className="label">Durasi</label>
            <input className="input" value={form.duration} onChange={update("duration")} />
          </div>
          <div>
            <label className="label">Fee Usulan (Opsional)</label>
            <input className="input" value={form.fee} onChange={update("fee")} placeholder="contoh: 3.000.000" />
          </div>
          <div className="md:col-span-2">
            <label className="label">Catatan Tambahan</label>
            <textarea className="input min-h-[90px]" value={form.note} onChange={update("note")} />
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button href={whatsappLink} className="text-xs" target="_blank" rel="noreferrer">
            Hubungi via WhatsApp
          </Button>
          <span className="text-xs text-skbm-gray">Link WhatsApp akan terbuka di tab baru.</span>
        </div>
      </div>
    </div>
  );
}
