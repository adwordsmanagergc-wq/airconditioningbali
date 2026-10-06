// Indicative price list used on the pricing, HVAC repair, "air conditioner Bali"
// and Indonesian "service AC" landing pages. Keep these in one place so a price
// change updates every page at once. All prices are in IDR and are "from" prices.

export type PriceRow = { service: string; serviceId: string; from: string; note: string; noteId: string };

export const servicePrices: PriceRow[] = [
  { service: "AC cleaning (standard, 0.5–1 PK)", serviceId: "Cuci AC standar (0,5–1 PK)", from: "Rp 150.000", note: "Filter, coil, drain flush, outdoor hose-down", noteId: "Filter, evaporator, saluran buang, outdoor" },
  { service: "AC cleaning (standard, 1.5–2 PK)", serviceId: "Cuci AC standar (1,5–2 PK)", from: "Rp 175.000", note: "Same as above for larger wall splits", noteId: "Sama, untuk AC split ukuran besar" },
  { service: "Deep chemical wash (bag-and-rinse)", serviceId: "Cuci AC besar / chemical wash", from: "Rp 350.000", note: "Coil foam + high-pressure rinse, mould removal", noteId: "Foam kimia + bilas tekanan tinggi, hilangkan jamur" },
  { service: "Ceiling cassette cleaning", serviceId: "Cuci AC cassette", from: "Rp 450.000", note: "Includes drain pump and tray clean", noteId: "Termasuk pompa drain dan bak air" },
  { service: "Fault diagnosis visit", serviceId: "Pengecekan / diagnosa kerusakan", from: "Rp 100.000", note: "Credited against the repair if you go ahead", noteId: "Dipotong dari biaya perbaikan jika lanjut" },
  { service: "Refrigerant top-up (R32 / R410A)", serviceId: "Tambah freon (R32 / R410A)", from: "Rp 250.000", note: "Includes pressure check; leak test quoted separately", noteId: "Termasuk cek tekanan; tes bocor terpisah" },
  { service: "Full refrigerant recharge + leak repair", serviceId: "Isi freon full + perbaikan bocor", from: "Rp 650.000", note: "Vacuum, nitrogen leak test, recharge to spec", noteId: "Vakum, tes bocor nitrogen, isi sesuai spek" },
  { service: "Capacitor replacement", serviceId: "Ganti kapasitor", from: "Rp 250.000", note: "Most common Bali fault after power flickers", noteId: "Kerusakan paling umum setelah listrik naik-turun" },
  { service: "Drain line unblocking (water leak)", serviceId: "Perbaikan AC bocor air / saluran buang", from: "Rp 150.000", note: "Compressed-air blow-out + anti-algae flush", noteId: "Tiup angin kompresor + bilas anti-lumut" },
  { service: "PCB / control board repair", serviceId: "Perbaikan PCB / modul", from: "Rp 750.000", note: "Repair where possible, replacement quoted", noteId: "Diperbaiki jika bisa, ganti baru dengan penawaran" },
  { service: "New AC installation (0.5–1 PK)", serviceId: "Pasang AC baru (0,5–1 PK)", from: "Rp 450.000", note: "Bracket, 4m pipe, vacuum, leak test", noteId: "Bracket, pipa 4m, vakum, tes bocor" },
  { service: "AC relocation (remove + reinstall)", serviceId: "Bongkar pasang AC", from: "Rp 650.000", note: "Pump-down, removal, reinstall, vacuum", noteId: "Pump-down, bongkar, pasang ulang, vakum" },
];

export const unitPrices: { size: string; btu: string; room: string; gree: string; daikin: string; panasonic: string }[] = [
  { size: "0.5 PK", btu: "5,000 BTU", room: "up to 10 m²", gree: "Rp 3,3–4 jt", daikin: "Rp 4–5 jt", panasonic: "Rp 3,8–4,8 jt" },
  { size: "1 PK", btu: "9,000 BTU", room: "12–18 m²", gree: "Rp 4,3–5,5 jt", daikin: "Rp 5,5–7 jt", panasonic: "Rp 5–6,5 jt" },
  { size: "1.5 PK", btu: "12,000 BTU", room: "18–25 m²", gree: "Rp 5,5–7 jt", daikin: "Rp 7–9 jt", panasonic: "Rp 6,5–8,5 jt" },
  { size: "2 PK", btu: "18,000 BTU", room: "25–35 m²", gree: "Rp 8–10 jt", daikin: "Rp 10–13 jt", panasonic: "Rp 9,5–12 jt" },
  { size: "2.5 PK", btu: "24,000 BTU", room: "35–45 m²", gree: "Rp 10–13 jt", daikin: "Rp 13–17 jt", panasonic: "Rp 12–15 jt" },
];

export const priceDisclaimer =
  "Indicative 2026 prices for Bali. Your fixed quote depends on unit size, access, pipe length and parts — we confirm the exact total on WhatsApp before any technician sets out.";
export const priceDisclaimerId =
  "Harga indikatif 2026 untuk Bali. Harga pasti tergantung ukuran unit, akses, panjang pipa dan sparepart — total harga kami konfirmasi lewat WhatsApp sebelum teknisi berangkat.";

export const priceTableMarkdown = (lang: "en" | "id" = "en") => {
  const head = lang === "id" ? "| Layanan | Mulai dari | Keterangan |\n| --- | --- | --- |" : "| Service | From | What's included |\n| --- | --- | --- |";
  const rows = servicePrices.map((r) => `| ${lang === "id" ? r.serviceId : r.service} | ${r.from} | ${lang === "id" ? r.noteId : r.note} |`).join("\n");
  return `${head}\n${rows}`;
};

export const unitTableMarkdown = () =>
  `| Size | Capacity | Room size (Bali) | Gree inverter | Daikin inverter | Panasonic inverter |\n| --- | --- | --- | --- | --- | --- |\n${unitPrices
    .map((u) => `| ${u.size} | ${u.btu} | ${u.room} | ${u.gree} | ${u.daikin} | ${u.panasonic} |`)
    .join("\n")}`;
