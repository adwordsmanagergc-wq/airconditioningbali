# Image Inventory

Every image referenced in the site, with the exact path and recommended alt text. Replace each placeholder JPG/PNG/SVG with a real photograph.

## Recommended specs

- **Hero / area / service photos:** WebP or JPG, 1600 × 1200 (4:3) or 1600 × 900 (16:9), under 250 KB
- **Logos:** SVG preferred (PNG at 512 × 512 also fine)
- **OG / social share image:** JPG, 1200 × 630, under 200 KB

## Logo & brand

| Path | Used in | Alt text |
| --- | --- | --- |
| `public/images/logo.png` | JSON-LD Organization schema | (logo, no alt) |
| `public/images/og/default.jpg` | Default OpenGraph share card | Bali Air Conditioning Services logo card |

## Hero image

| Path | Used in | Alt text |
| --- | --- | --- |
| `public/images/hero/villa-ac-canggu.jpg` | Default hero on every page | Modern split air conditioner installed in a Balinese villa bedroom in Canggu |

## Brands

### Gree

| Path | Alt text |
| --- | --- |
| `public/images/gree/gree-logo.svg` | Gree authorised partner logo |
| `public/images/gree/gree-split-residential.jpg` | Gree residential inverter split AC installed in a Bali villa |
| `public/images/gree/gree-cassette.jpg` | Gree ceiling cassette air conditioner installed in a Bali restaurant |

### Daikin

| Path | Alt text |
| --- | --- |
| `public/images/daikin/daikin-logo.svg` | Daikin authorised partner logo |
| `public/images/daikin/daikin-inverter-split.jpg` | Daikin inverter split air conditioner installed in a Seminyak villa bedroom |
| `public/images/daikin/daikin-multi-split.jpg` | Daikin multi-split outdoor unit installed on a Canggu villa rooftop |

## Services

| Path | Alt text |
| --- | --- |
| `public/images/services/installation-1.jpg` | Air conditioning installation by certified technicians in a Bali villa |
| `public/images/services/cleaning-1.jpg` | Chemical wash on an evaporator coil during AC cleaning in Bali |
| `public/images/services/servicing-1.jpg` | Routine AC servicing — pressure gauge reading on a Bali split system |
| `public/images/services/repair-1.jpg` | AC repair technician diagnosing a split system fault in Bali |
| `public/images/services/commercial-1.jpg` | Commercial ceiling cassette installation in a Seminyak restaurant |
| `public/images/services/villa-1.jpg` | Villa AC maintenance visit — technician with photo report |

## Team

| Path | Alt text |
| --- | --- |
| `public/images/team/technician-1.jpg` | Lead AC technician at Bali Air Conditioning Services |
| `public/images/team/team-group.jpg` | The Bali Air Conditioning Services team in Canggu |

## Areas

One hero image per area (40 total). Pattern: `public/images/areas/<slug>.jpg`. Suggested alt text pattern: `Air conditioning service in <Area name>, Bali`.

- `seminyak.jpg` — Air conditioning service in Seminyak, Bali
- `canggu.jpg` — Air conditioning service in Canggu, Bali
- `berawa.jpg` — Air conditioning service in Berawa, Bali
- `pererenan.jpg` — Air conditioning service in Pererenan, Bali
- `umalas.jpg` — Air conditioning service in Umalas, Bali
- `kerobokan.jpg` — Air conditioning service in Kerobokan, Bali
- `petitenget.jpg` — Air conditioning service in Petitenget, Bali
- `legian.jpg` — Air conditioning service in Legian, Bali
- `kuta.jpg` — Air conditioning service in Kuta, Bali
- `tuban.jpg` — Air conditioning service in Tuban, Bali
- `jimbaran.jpg` — Air conditioning service in Jimbaran, Bali
- `nusa-dua.jpg` — Air conditioning service in Nusa Dua, Bali
- `benoa.jpg` — Air conditioning service in Benoa, Bali
- `bukit-peninsula.jpg` — Air conditioning service across the Bukit Peninsula, Bali
- `uluwatu.jpg` — Air conditioning service in Uluwatu, Bali
- `pecatu.jpg` — Air conditioning service in Pecatu, Bali
- `bingin.jpg` — Air conditioning service in Bingin, Bali
- `balangan.jpg` — Air conditioning service in Balangan, Bali
- `ungasan.jpg` — Air conditioning service in Ungasan, Bali
- `sanur.jpg` — Air conditioning service in Sanur, Bali
- `denpasar.jpg` — Air conditioning service in Denpasar, Bali
- `renon.jpg` — Air conditioning service in Renon, Denpasar, Bali
- `ubud.jpg` — Air conditioning service in Ubud, Bali
- `penestanan.jpg` — Air conditioning service in Penestanan, Ubud, Bali
- `tegallalang.jpg` — Air conditioning service in Tegallalang, Bali
- `payangan.jpg` — Air conditioning service in Payangan, Bali
- `tabanan.jpg` — Air conditioning service in Tabanan, Bali
- `tanah-lot.jpg` — Air conditioning service in Tanah Lot, Bali
- `mengwi.jpg` — Air conditioning service in Mengwi, Bali
- `gianyar.jpg` — Air conditioning service in Gianyar, Bali
- `klungkung.jpg` — Air conditioning service in Klungkung, Bali
- `candidasa.jpg` — Air conditioning service in Candidasa, Bali
- `amed.jpg` — Air conditioning service in Amed, Bali
- `lovina.jpg` — Air conditioning service in Lovina, Bali
- `singaraja.jpg` — Air conditioning service in Singaraja, Bali
- `munduk.jpg` — Air conditioning service in Munduk, Bali
- `bedugul.jpg` — Air conditioning service in Bedugul, Bali
- `nusa-lembongan.jpg` — Air conditioning service on Nusa Lembongan
- `nusa-penida.jpg` — Air conditioning service on Nusa Penida
- `nusa-ceningan.jpg` — Air conditioning service on Nusa Ceningan

## Blog post header images (optional, recommended)

Pattern: `public/images/blog/<slug>.jpg`. Currently the blog post template doesn't render a hero image — drop one in and reference it from `posts.ts` if you want one.

## Production checklist

- [ ] Compress every JPG/PNG to WebP using `cwebp -q 80`
- [ ] Run all images through https://squoosh.app or `imagemin`
- [ ] Verify each image is under 250 KB (under 100 KB ideal)
- [ ] Add a real SVG logo at `public/images/logo.png` (or update layout to point at SVG)
- [ ] Generate a 1200 × 630 OG share image at `public/images/og/default.jpg`
