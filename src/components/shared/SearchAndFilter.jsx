export default function SearchAndFilter() {
  return (
    <div className="card p-6">
      <div className="grid gap-4 md:grid-cols-[2fr,1fr,1fr,1fr]">
        <div>
          <label className="label" htmlFor="search">Cari fasilitator</label>
          <input
            id="search"
            className="input"
            placeholder="Bidang, sekolah, atau nama fasil"
            type="text"
          />
        </div>
        <div>
          <label className="label" htmlFor="bidang">Bidang</label>
          <select id="bidang" className="input">
            <option>Semua bidang</option>
            <option>Fisika</option>
            <option>Kimia</option>
            <option>Biologi</option>
            <option>TIK</option>
            <option>Multidisiplin</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="jenjang">Jenjang</label>
          <select id="jenjang" className="input">
            <option>SMP & SMA</option>
            <option>SMP</option>
            <option>SMA</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="mode">Mode</label>
          <select id="mode" className="input">
            <option>Luring & Daring</option>
            <option>Luring</option>
            <option>Daring</option>
          </select>
        </div>
      </div>
    </div>
  );
}
