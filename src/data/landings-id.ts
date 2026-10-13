import type { Landing } from "@/data/landings";
import { priceTableMarkdown, priceDisclaimerId } from "@/data/pricing";
import { getArea } from "@/data/areas";

// Bahasa Indonesia landing pages for "service AC <area>" / "cuci AC <area>"
// searches. Each area page pairs (hreflang) with its English /areas/<slug> page.

type IdArea = {
  slug: string; // must match src/data/areas.ts
  name: string;
  admin: string; // kecamatan / kabupaten
  nearby: string[];
  intro: string;
  local: string;
  faq: { q: string; a: string };
};

const responseId: Record<string, string> = {
  "South Bali": "teknisi biasanya tiba dalam ±2 jam di hari yang sama",
  "Bukit Peninsula": "teknisi datang di hari yang sama",
  "Central Bali": "di hari yang sama untuk pesanan sebelum jam 12 siang, selebihnya besok",
  "West Bali": "kunjungan terjadwal, biasanya besok hari",
  "East Bali": "kunjungan terjadwal, biasanya besok hari",
  "North Bali": "rute terjadwal, biasanya besok hari",
};

const issuesId: Record<string, string[]> = {
  "South Bali": [
    "AC bocor air karena saluran buang tersumbat lumut dan debu",
    "AC tidak dingin karena freon berkurang atau evaporator kotor",
    "Kapasitor rusak setelah listrik PLN naik-turun di musim hujan",
    "Unit outdoor cepat berkarat karena udara laut",
  ],
  "Bukit Peninsula": [
    "Sirip kondensor outdoor berkarat parah karena angin laut",
    "PCB rusak pada unit tanpa stabilizer / pengaman listrik",
    "Pompa drain AC cassette di villa tebing macet",
    "Freon bocor di sambungan pipa yang terkorosi",
  ],
  "Central Bali": [
    "Jamur tebal di evaporator karena kelembapan di atas 85%",
    "PCB sering rusak karena tegangan listrik tidak stabil",
    "AC bau apek setiap dinyalakan",
    "Kapasitas AC terlalu kecil untuk kamar villa terbuka",
  ],
  "West Bali": [
    "Ukuran AC (PK) terlalu kecil untuk ruang tamu",
    "Korosi pada villa pesisir dekat Tanah Lot",
    "PCB outdoor rusak karena lonjakan listrik di pedesaan",
    "Filter cepat tersumbat debu saat musim panen",
  ],
  "East Bali": [
    "Korosi pesisir dan sparepart yang harus didatangkan",
    "Unit lama R22 yang masih perlu tambah freon",
    "Pompa drain cassette tersumbat garam",
    "Kompresor sering start-stop karena listrik padam",
  ],
  "North Bali": [
    "Saluran buang berjamur karena lembap di malam hari",
    "Kapasitor cepat rusak karena jaringan listrik tua",
    "Motor kipas outdoor aus karena udara pantai",
    "Filter tersumbat asap dapur di restoran",
  ],
};

const idAreas: IdArea[] = [
  {
    slug: "jimbaran",
    name: "Jimbaran",
    admin: "Kecamatan Kuta Selatan, Badung",
    nearby: ["Kedonganan", "Bukit Jimbaran", "Kampus Udayana", "Pantai Jimbaran", "Ungasan", "Nusa Dua"],
    intro: "Jimbaran adalah pintu gerbang Bukit, penuh resort, villa, kos-kosan mahasiswa di sekitar kampus Udayana, dan restoran seafood di pinggir pantai. Kami melayani service AC Jimbaran setiap hari dari van servis kami yang berbasis di Bukit.",
    local: "Di Jimbaran kami paling sering menangani unit outdoor yang berkarat karena angin laut, AC cassette restoran seafood yang bocor air, dan AC kos atau rumah yang tidak dingin karena freon berkurang.",
    faq: { q: "Apakah bisa service AC di kos atau rumah di Bukit Jimbaran?", a: "Bisa. Kami melayani rumah, kos, villa, hotel dan restoran di seluruh Jimbaran termasuk Bukit Jimbaran, Kedonganan dan sekitar kampus Udayana. Untuk beberapa unit sekaligus kami beri harga per unit yang lebih murah." },
  },
  {
    slug: "singaraja",
    name: "Singaraja",
    admin: "Kabupaten Buleleng",
    nearby: ["Lovina", "Banyuasri", "Sukasada", "Kampung Baru", "Pemaron", "Kalibukbuk"],
    intro: "Singaraja adalah kota terbesar di Bali Utara dan pusat Kabupaten Buleleng. Kami melayani service AC Singaraja, Lovina dan sekitarnya melalui rute terjadwal Bali Utara dengan stok sparepart semua merek di mobil servis.",
    local: "Di Singaraja kami sering menemukan kapasitor rusak akibat tegangan listrik yang naik-turun, saluran buang berjamur, dan AC lama R22 yang perlu dirawat atau diganti dengan unit inverter yang lebih hemat listrik.",
    faq: { q: "Berapa lama menunggu teknisi AC di Singaraja?", a: "Kami menjalankan rute terjadwal ke Bali Utara, biasanya teknisi datang besok hari. Untuk hotel dan bisnis dengan beberapa unit, kami bisa mengatur jadwal rutin bulanan atau 3 bulanan." },
  },
  {
    slug: "canggu",
    name: "Canggu",
    admin: "Kecamatan Kuta Utara, Badung",
    nearby: ["Berawa", "Batu Bolong", "Pererenan", "Tibubeneng", "Echo Beach", "Umalas"],
    intro: "Canggu adalah area dengan kepadatan villa dan kafe tertinggi di Bali, dan juga markas kami. Service AC Canggu biasanya bisa dikerjakan di hari yang sama, sering kali teknisi tiba dalam 2 jam.",
    local: "Masalah AC paling umum di Canggu: AC bocor air karena saluran buang tersumbat, unit outdoor berkarat karena dekat pantai, dan AC villa sewa harian yang bau apek karena jarang dicuci.",
    faq: { q: "Apakah ada layanan service AC Canggu yang bisa datang hari ini?", a: "Ya. Basis kami ada di Canggu, jadi untuk Berawa, Batu Bolong, Pererenan dan Tibubeneng teknisi biasanya tiba dalam ±2 jam jika pesan sebelum siang." },
  },
  {
    slug: "denpasar",
    name: "Denpasar",
    admin: "Kota Denpasar",
    nearby: ["Renon", "Panjer", "Sesetan", "Teuku Umar", "Gatot Subroto", "Ubung", "Sidakarya"],
    intro: "Denpasar adalah ibu kota Bali dengan ribuan rumah, ruko, kantor dan toko yang memakai AC setiap hari. Kami melayani service AC Denpasar dan cuci AC Denpasar di semua kecamatan, Denpasar Barat, Timur, Utara dan Selatan.",
    local: "Di Denpasar yang paling sering kami tangani adalah cuci AC rutin rumah dan kantor, tambah freon, AC tidak dingin, serta pasang dan bongkar pasang AC untuk pindahan rumah atau ruko.",
    faq: { q: "Apakah melayani service AC Denpasar 24 jam?", a: "Ya, untuk keadaan darurat seperti AC bocor air deras, MCB turun terus atau AC mati total di kantor dan toko, kami siaga 24 jam. Untuk cuci AC rutin, jadwal dibuat di jam kerja." },
  },
  {
    slug: "gianyar",
    name: "Gianyar",
    admin: "Kabupaten Gianyar",
    nearby: ["Ubud", "Sukawati", "Blahbatuh", "Tampaksiring", "Keramas", "Tegallalang"],
    intro: "Kabupaten Gianyar mencakup Ubud, Sukawati, Blahbatuh hingga pantai Keramas, campuran rumah, villa di tengah sawah, galeri seni dan usaha kecil. Kami melayani service AC Gianyar dengan teknisi yang berbasis di Ubud.",
    local: "Kelembapan tinggi di Gianyar membuat jamur cepat tumbuh di evaporator dan saluran buang, sehingga AC bau apek dan bocor air. Listrik yang kurang stabil di pedesaan juga sering merusak kapasitor dan PCB.",
    faq: { q: "Apakah service AC di Sukawati dan Blahbatuh juga dilayani?", a: "Ya, seluruh Kabupaten Gianyar kami layani, Sukawati, Blahbatuh, Tampaksiring, Keramas, Tegallalang dan Ubud. Biasanya kunjungan dijadwalkan di hari yang sama atau besok." },
  },
  {
    slug: "tabanan",
    name: "Tabanan",
    admin: "Kabupaten Tabanan",
    nearby: ["Kediri", "Kerambitan", "Tanah Lot", "Pantai Nyanyi", "Bedugul", "Marga"],
    intro: "Tabanan adalah lumbung padi Bali yang kini berkembang dengan banyak villa baru di Kediri, Tanah Lot dan pesisir Nyanyi. Kami melayani service AC Tabanan dari basis Canggu yang hanya berjarak singkat.",
    local: "Di Tabanan kami sering menemukan AC dengan PK terlalu kecil di villa baru, korosi pada unit outdoor di villa pesisir, dan PCB yang rusak karena lonjakan listrik.",
    faq: { q: "Apakah ada biaya tambahan untuk service AC di Tabanan?", a: "Untuk Kediri, Tanah Lot dan area yang dekat dengan Canggu tidak ada biaya kunjungan. Untuk area pegunungan seperti Bedugul, kunjungan dijadwalkan dan biayanya kami informasikan di awal." },
  },
  {
    slug: "kuta",
    name: "Kuta",
    admin: "Kecamatan Kuta, Badung",
    nearby: ["Legian", "Tuban", "Kedonganan", "Pantai Kuta", "Seminyak"],
    intro: "Kuta adalah kawasan wisata tersibuk di Bali dengan ratusan hotel, guesthouse, toko dan restoran. Kami melayani service AC Kuta, Legian dan Tuban setiap hari dengan respons cepat.",
    local: "AC hotel dan guesthouse di Kuta bekerja hampir 24 jam, sehingga cepat kotor, bocor air dan kehilangan freon. Kami menawarkan cuci AC berkala untuk banyak kamar sekaligus agar tamu tetap nyaman.",
    faq: { q: "Bisakah cuci AC banyak kamar hotel di Kuta dalam satu hari?", a: "Bisa. Tim kami bisa mengerjakan puluhan unit per hari dan menjadwalkan kamar per kamar sesuai okupansi hotel agar tidak mengganggu tamu." },
  },
  {
    slug: "seminyak",
    name: "Seminyak",
    admin: "Kecamatan Kuta, Badung",
    nearby: ["Petitenget", "Basangkasa", "Kerobokan", "Legian", "Umalas"],
    intro: "Seminyak adalah kawasan villa mewah, beach club dan butik hotel. Kami melayani service AC Seminyak dengan teknisi yang terbiasa bekerja rapi di villa dan hotel, memakai alas, cover bilas dan membersihkan setelah selesai.",
    local: "Di Seminyak, AC villa sewa harian dan restoran bekerja sangat berat, jadi kami menyarankan cuci AC setiap 6-8 minggu agar tidak bau dan tidak bocor air saat ada tamu.",
    faq: { q: "Apakah teknisi bisa datang ke villa saat ada tamu?", a: "Bisa. Kami bekerja rapi dan cepat, dan bisa menyesuaikan jadwal dengan check-out atau jam tamu keluar. Banyak manajer villa di Seminyak memakai paket perawatan rutin kami." },
  },
  {
    slug: "ubud",
    name: "Ubud",
    admin: "Kecamatan Ubud, Gianyar",
    nearby: ["Penestanan", "Peliatan", "Mas", "Sayan", "Tegallalang", "Kedewatan"],
    intro: "Ubud dikelilingi hutan dan sawah sehingga kelembapannya sering di atas 85%. Kami melayani service AC Ubud, Penestanan, Sayan, Kedewatan dan sekitarnya dengan teknisi yang berbasis di Ubud.",
    local: "Masalah AC paling umum di Ubud adalah jamur di evaporator, AC bau apek, saluran buang tersumbat dan PCB rusak karena listrik tidak stabil. Kami menyarankan pemasangan pengaman tegangan pada unit outdoor.",
    faq: { q: "Kenapa AC di Ubud cepat bau dan berjamur?", a: "Karena kelembapan Ubud yang sangat tinggi. Jamur tumbuh di evaporator dan saluran buang dalam hitungan minggu. Cuci AC setiap 2-3 bulan dan sesekali chemical wash akan menghilangkan bau dan mencegah bocor air." },
  },
  {
    slug: "sanur",
    name: "Sanur",
    admin: "Kecamatan Denpasar Selatan",
    nearby: ["Sindhu", "Semawang", "Renon", "Padang Galak", "Mertasari"],
    intro: "Sanur adalah kawasan pantai yang tenang dengan banyak rumah tinggal jangka panjang, keluarga, hotel dan apartemen. Kami melayani service AC Sanur di hari yang sama.",
    local: "Di Sanur kami sering menangani unit outdoor yang berkarat karena udara laut, AC apartemen yang bocor air, dan perawatan rutin untuk rumah dan villa yang dihuni sepanjang tahun.",
    faq: { q: "Apakah melayani service AC apartemen di Sanur?", a: "Ya. Kami berkoordinasi dengan pengelola gedung untuk akses unit outdoor dan bisa membersihkan AC tanpa mengotori ruangan." },
  },
  {
    slug: "nusa-dua",
    name: "Nusa Dua",
    admin: "Kecamatan Kuta Selatan, Badung",
    nearby: ["Kawasan ITDC", "Tanjung Benoa", "Bualu", "Kampial", "Sawangan"],
    intro: "Nusa Dua adalah kawasan resort bintang lima sekaligus permukiman di Bualu, Kampial dan Tanjung Benoa. Kami melayani service AC Nusa Dua di hari yang sama, dari AC split rumah hingga cassette, ducted dan VRF hotel.",
    local: "Udara laut di Nusa Dua dan Tanjung Benoa membuat unit outdoor cepat berkarat. Kami menyarankan pembilasan kondensor rutin dan unit dengan lapisan anti-korosi untuk pemasangan baru.",
    faq: { q: "Apakah bisa menangani AC VRF dan cassette hotel di Nusa Dua?", a: "Bisa. Kami menangani AC split, cassette, ducted dan VRF/VRV untuk hotel, restoran dan kantor, dan bisa bekerja malam hari agar operasional tidak terganggu." },
  },
];

const hub: Landing = {
  slug: "service-ac-bali",
  lang: "id",
  metaTitle: "Service AC Bali: Cuci AC, Isi Freon & Perbaikan 24 Jam",
  description:
    "Jasa service AC Bali: cuci AC mulai Rp 150.000, tambah freon, perbaikan AC bocor & tidak dingin, pasang AC. Teknisi datang hari ini, garansi 90 hari.",
  h1: "Service AC Bali: Cuci AC, Isi Freon, Perbaikan & Pasang AC",
  heroSub:
    "Teknisi AC profesional untuk rumah, villa, kos, hotel, restoran dan kantor di seluruh Bali. Harga pasti lewat WhatsApp sebelum teknisi berangkat, siaga 24 jam untuk keadaan darurat.",
  breadcrumb: "Service AC Bali",
  quickAnswer:
    "Kami melayani service AC di seluruh Bali: cuci AC mulai Rp 150.000 per unit, tambah freon mulai Rp 250.000, perbaikan AC bocor air dan tidak dingin, serta pasang dan bongkar pasang AC. Di Bali Selatan teknisi biasanya tiba dalam ±2 jam. Semua merek: Daikin, Gree, Panasonic, LG, Samsung, Sharp, Mitsubishi.",
  tldr:
    "Kirim foto unit AC, lokasi dan keluhan lewat WhatsApp 0818-0802-9595. Kami balas dengan harga pasti dalam 15 menit dan jadwal teknisi terdekat.",
  serviceType: "Service AC",
  waMessage: "Halo, saya mau service AC. Lokasi: ___ Jumlah unit: ___ Keluhan: ___",
  ctaHeading: "Butuh teknisi AC hari ini? Chat WhatsApp sekarang.",
  withPriceOffers: true,
  alternates: { en: "/" },
  related: [
    { label: "AC service price list (English)", href: "/ac-service-price-bali" },
    { label: "HVAC & AC repair 24/7 (English)", href: "/hvac-repair-bali" },
    { label: "Harga AC baru di Bali", href: "/air-conditioner-bali" },
    { label: "Gree vs Daikin", href: "/blog/daikin-vs-gree-bali" },
  ],
  body: `## Daftar harga service AC Bali

${priceTableMarkdown("id")}

${priceDisclaimerId}

## Layanan kami

- **Cuci AC:** cuci filter, evaporator, bak dan saluran buang, serta unit outdoor. Untuk AC yang sangat kotor atau bau, kami sarankan cuci besar (chemical wash).
- **Tambah / isi freon:** cek tekanan dengan manifold, tambah freon R32, R410A atau R22, dan tes kebocoran.
- **Perbaikan AC:** AC tidak dingin, AC bocor air, AC berisik, MCB turun, kode error berkedip, kapasitor, sensor, motor kipas dan PCB.
- **Pasang AC baru & bongkar pasang:** pemasangan rapi dengan vakum dan tes bocor, termasuk pindahan rumah atau ruko.
- **Perawatan rutin:** paket service berkala untuk villa, hotel, restoran dan kantor dengan laporan foto.

## Area service AC di Bali

Kami punya halaman khusus untuk area dengan permintaan tertinggi: ${idAreas.map((a) => `[Service AC ${a.name}](/service-ac-${a.slug})`).join(", ")}. Seluruh area lain di Bali juga kami layani, [lihat semua area](/areas).

## Kenapa memilih kami

- Harga pasti di depan lewat WhatsApp, tidak ada biaya tersembunyi
- Tanpa biaya kunjungan di Bali Selatan untuk layanan terjadwal
- Teknisi bersertifikat, bekerja rapi dengan alas dan cover bilas
- Garansi 90 hari untuk perbaikan dan 12 bulan untuk pemasangan
- Siaga 24 jam untuk AC bocor, MCB turun atau AC mati total
- Installer resmi Gree, Daikin, Panasonic, Mitsubishi Electric, LG dan Samsung

## Cara pesan service AC

- **1. Chat WhatsApp:** kirim lokasi, jumlah unit, merek dan foto atau video keluhan.
- **2. Dapat harga pasti:** kami balas dalam 15 menit dengan harga dan jadwal.
- **3. Teknisi datang:** pengerjaan rapi, lalu tes suhu dingin di depan Anda.
- **4. Garansi:** jika masalah yang sama muncul lagi dalam masa garansi, kami perbaiki gratis.

## Berapa kali AC harus dicuci di Bali?

Minimal setiap 3 bulan. Udara Bali yang panas, lembap, berdebu dan (di dekat pantai) mengandung garam membuat evaporator dan saluran buang cepat kotor. Villa sewa harian, restoran dan rumah di pinggir pantai sebaiknya cuci AC setiap 6-8 minggu.`,
  faqs: [
    { q: "Berapa biaya service AC di Bali?", a: "Cuci AC standar mulai Rp 150.000 per unit (0,5-1 PK), cuci besar / chemical wash mulai Rp 350.000, tambah freon mulai Rp 250.000, pasang AC baru mulai Rp 450.000. Harga pasti kami berikan lewat WhatsApp sebelum teknisi berangkat." },
    { q: "Apakah ada service AC terdekat yang bisa datang hari ini?", a: "Ya. Di Bali Selatan (Canggu, Seminyak, Kuta, Denpasar, Sanur, Jimbaran, Nusa Dua) teknisi biasanya tiba di hari yang sama, sering dalam ±2 jam. Ubud di hari yang sama atau besok, Bali Utara dan Timur besok hari." },
    { q: "Apakah melayani service AC 24 jam?", a: "Ya, untuk keadaan darurat seperti AC bocor air deras, MCB turun, bau terbakar atau AC mati total di villa, hotel dan restoran." },
    { q: "Merek AC apa saja yang bisa diservice?", a: "Semua merek: Daikin, Gree, Panasonic, LG, Samsung, Sharp, Mitsubishi Electric, Midea, Polytron, AUX dan merek lainnya, termasuk AC lama dengan freon R22." },
    { q: "Apa itu tukang AC?", a: "Tukang AC adalah sebutan sehari-hari untuk teknisi AC di Indonesia. Dalam bahasa Inggris disebut AC technician atau aircon technician." },
    { q: "Apakah ada garansi service?", a: "Ada. Perbaikan bergaransi 90 hari dan pemasangan baru bergaransi 12 bulan untuk pengerjaan." },
  ],
};

const buildAreaLanding = (a: IdArea): Landing => {
  const area = getArea(a.slug)!;
  const resp = responseId[area.region];
  const issues = issuesId[area.region];
  const nearbyLinks = area.neighbours
    .map((n) => idAreas.find((x) => x.slug === n))
    .filter(Boolean)
    .map((n) => `[Service AC ${n!.name}](/service-ac-${n!.slug})`);
  return {
    slug: `service-ac-${a.slug}`,
    lang: "id",
    metaTitle: `Service AC ${a.name} Bali: Cuci AC, Freon & Perbaikan`,
    description: `Jasa service AC ${a.name}: cuci AC mulai Rp 150.000, tambah freon, AC bocor & tidak dingin, pasang AC. ${resp.charAt(0).toUpperCase() + resp.slice(1)}. WA 0818-0802-9595.`.slice(0, 160),
    h1: `Service AC ${a.name}: Cuci AC, Isi Freon & Perbaikan AC`,
    heroSub: `Teknisi AC terdekat untuk rumah, villa, kos, hotel, restoran dan kantor di ${a.name} (${a.admin}). Harga pasti lewat WhatsApp, garansi 90 hari.`,
    breadcrumb: `Service AC ${a.name}`,
    quickAnswer: `Kami melayani service AC ${a.name}: cuci AC mulai Rp 150.000 per unit, tambah freon mulai Rp 250.000, perbaikan AC bocor air dan tidak dingin, serta pasang AC baru. Untuk ${a.name}, ${resp}. Kirim lokasi dan keluhan ke WhatsApp 0818-0802-9595.`,
    tldr: `Service AC ${a.name} dan sekitarnya (${a.nearby.slice(0, 4).join(", ")}). Semua merek, harga pasti di depan, tanpa biaya tersembunyi.`,
    serviceType: `Service AC ${a.name}`,
    defaultService: "Servicing",
    waMessage: `Halo, saya mau service AC di ${a.name}. Jumlah unit: ___ Keluhan: ___`,
    ctaHeading: `Butuh service AC di ${a.name}? Chat sekarang.`,
    areaName: a.name,
    geo: { lat: area.lat, lng: area.lng },
    withPriceOffers: true,
    alternates: { en: `/areas/${a.slug}` },
    related: [
      { label: "Service AC Bali, semua area", href: "/service-ac-bali" },
      { label: `Air conditioning ${a.name} (English)`, href: `/areas/${a.slug}` },
      { label: "HVAC & AC repair 24/7", href: "/hvac-repair-bali" },
      { label: "Harga AC baru di Bali", href: "/air-conditioner-bali" },
    ],
    body: `## Jasa service AC di ${a.name}

${a.intro}

Area yang kami layani di sekitar ${a.name}: ${a.nearby.join(", ")}.

## Harga service AC ${a.name}

${priceTableMarkdown("id")}

${priceDisclaimerId}

## Masalah AC yang sering terjadi di ${a.name}

${a.local}

${issues.map((i) => `- ${i}`).join("\n")}

Kirim foto atau video singkat lewat WhatsApp, sebagian besar masalah bisa kami diagnosa dari jauh dan kami berikan harga perbaikannya sebelum teknisi berangkat.

## Layanan AC di ${a.name}

- **Cuci AC ${a.name}:** filter, evaporator, bak dan saluran buang, unit outdoor, termasuk cuci besar untuk AC yang bau atau bocor.
- **Tambah freon:** cek tekanan, isi freon R32 / R410A / R22 dan tes kebocoran.
- **Perbaikan AC:** tidak dingin, bocor air, berisik, MCB turun, kode error, kapasitor, PCB, motor kipas.
- **Pasang & bongkar pasang AC:** pemasangan rapi dengan vakum, cocok untuk rumah baru atau pindahan.
- **Kontrak perawatan:** untuk villa, hotel, restoran dan kantor di ${a.name}.

## Waktu kedatangan teknisi

Untuk ${a.name}, ${resp}. Untuk keadaan darurat (AC bocor deras, MCB turun, AC mati total di hotel atau restoran) kami siaga 24 jam.

${nearbyLinks.length ? `## Area terdekat\n\n${nearbyLinks.join(" · ")} · [Semua area service AC Bali](/service-ac-bali)` : `## Area lain\n\n[Semua area service AC Bali](/service-ac-bali)`}`,
    faqs: [
      { q: `Berapa harga cuci AC di ${a.name}?`, a: `Cuci AC standar di ${a.name} mulai Rp 150.000 per unit untuk 0,5-1 PK dan Rp 175.000 untuk 1,5-2 PK. Cuci besar (chemical wash) mulai Rp 350.000. Untuk beberapa unit sekaligus ada harga khusus.` },
      { q: `Apakah ada service AC terdekat di ${a.name} yang bisa datang hari ini?`, a: `Untuk ${a.name}, ${resp}. Pesan lewat WhatsApp 0818-0802-9595 dengan lokasi dan jumlah unit.` },
      { q: `Kenapa AC saya di ${a.name} tidak dingin?`, a: "Penyebab paling umum adalah freon berkurang karena bocor halus, filter dan evaporator yang sangat kotor, atau kapasitor yang rusak. Teknisi kami bisa memastikan penyebabnya dalam ±30 menit dengan manifold dan tang ampere." },
      { q: "Kenapa AC bocor air?", a: "Hampir selalu karena saluran buang (drain) tersumbat lumut dan debu sehingga air meluap dari bak penampung. Kami tiup dengan angin kompresor dan bilas dengan cairan anti-lumut." },
      a.faq,
    ],
  };
};

export const landingsId: Landing[] = [hub, ...idAreas.map(buildAreaLanding)];

// English area slug -> Indonesian landing path, for hreflang on /areas/<slug>.
export const idAreaPaths: Record<string, string> = Object.fromEntries(idAreas.map((a) => [a.slug, `/service-ac-${a.slug}`]));
