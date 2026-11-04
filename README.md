# 🛡️ ANTIDOPING KOMPETENSIYASI — ILMIY TA'LIM PORTALI

> **Pedagogika fanlari bo‘yicha falsafa doktori (PhD) dissertatsiyasi amaliy ishlanmasi**  
> **Ixtisoslik:** 13.00.04 — Jismoniy tarbiya va sport mashg‘ulotlari nazariyasi va metodikasi  
> **Tadqiqotchi:** **Saydaliyev Muhammad Sodiq Mo‘minjon o‘g‘li**  
> **Muassasa:** Jismoniy tarbiya va sport bo‘yicha mutaxassislarni qayta tayyorlash va malakasini oshirish instituti  
> **Rasmiy domen:** [doping.uz](https://doping.uz) | **GitHub Pages:** [abzalbejokker11-afk.github.io/antidopinuz](https://abzalbejokker11-afk.github.io/antidopinuz)

---

## 📌 Loyiha Haqida

Ushbu interaktiv platforma bo‘lajak jismoniy tarbiya va sport mutaxassislarida (sport rahbarlari, murabbiylar, metodistlar va sportchilar) **antidoping kompetensiyasini shakllantirish** metodikasini raqamli texnologiyalar asosida amaliyotga tatbiq etuvchi innovatsion o‘quv-uslubiy majmuadir.

Platforma Butunjahon antidoping kodeksi (**WADA 2021**), Butunjahon antidoping agentligining Xalqaro ta'lim standarti (**ISE 2021**) hamda O‘zbekiston Respublikasining Jismoniy tarbiya va sport to‘g‘risidagi qonunchiligi asosida ishlab chiqilgan.

---

## 🌟 Asosiy Interaktiv Modullar

### 1. 🧪 Virtual Doping-Nazorat Xonasi Trenajyori
- WADA xalqaro standartlariga to‘liq mos keluvchi doping-sinama topshirish protokolining 11 bosqichli simulyatsiyasi.
- Sportchining huquq va majburiyatlari, A va B namunalarini muhrlash, shisha idishlarni tanlash va zanjir xavfsizligi bo‘yicha virtual amaliyot.

### 2. ⏱️ Doping Fiziologik Simulyatori: Doza va Vaqt Kinetikasi
- Taqiqlangan moddalarning (anabolik steroidlar, peptid gormonlar, beta-2 agonistlar) organizmdagi yarim parchalanish davri ($T_{1/2}$) va aniqlanish oynasi (detection window) dinamik modeli.
- Sportchining salomatligiga (jigar, yurak-qon tomir, endokrin tizim) yetkaziladigan qaytarib bo‘lmas zararlarning vizual fiziologik tahlili.

### 3. ⚠️ Sport Ozuqasi & BAD Risk-Kalkulyatori
- Biologik faol qo‘shimchalar (BAD) va sport ozuqasi tarkibidagi yashirin yoki yorliqda ko‘rsatilmagan taqiqlangan ingredientlarni aniqlash algoritmi.
- Kontaminatsiya (ifloslanish) xavfini baholash indeksi.

### 4. 👥 Auditoriyaga Moslashtirilgan 4 Ta O‘quv Moduli
- **Rahbarlar uchun:** Antidoping qonunchiligi, tashkiliy javobgarlik va institutsional nazorat.
- **Murabbiylar uchun:** 40 soatlik maxsus o‘quv moduli, ADEL integratsiyasi, 15 ta keys-tadqiqot.
- **Metodistlar uchun:** Antidoping ta'limini o‘quv dasturlariga kiritish va monitoring mexanizmlari.
- **Sportchilar uchun:** Toza sport qadriyatlari, TUE (Terapevtik foydalanish uchun ruxsatnoma) va ADAMS tizimi.

### 5. 📊 Pedagogik Tajriba-Sinov Statistikasi va Samaradorlik
- Nazorat (NG=30) va Tajriba (TG=30) guruhlarida o‘tkazilgan 40 soatlik tajriba-sinov natijalari:
  - *Tajriba guruhi natijasi:* Styudent mezonining empirik qiymati $t = 12.41$, Koen effekti $d = 3.20$ (juda yuqori samaradorlik, $p < 0.001$).
  - Natijalar grafik va interaktiv diagrammalarda aks ettirilgan.

---

## 🛠️ Texnik Arxitektura & Xavfsizlik

- **Frontend:** Toza HTML5, Tailwind CSS, Vanilla JS, Lucide & FontAwesome SVG.
- **Mustaqillik:** 100% Standalone Single-File arxitekturasi (ortiqcha yuklamasiz, 60fps tezlik).
- **Xavfsizlik:** Qat'iy CSP (Content Security Policy) qoidalari:
  - `nosniff`, `strict-origin-when-cross-origin`, kamera/mikrofon ruxsatlari cheklangan.
- **Telegram Bot Webhook:** Cloudflare Worker orqali test natijalari va bildirishnomalarni yetkazish.
- **PWA (Progressive Web App):** Mobil qurilmalarga ilova sifatida o‘rnatish imkoniyati.

---

## 📂 Fayllar Tuzilmasi

```text
c:\antidopinuz\
│
├── index.html                  # 1.3 MB hajmdagi mustaqil interaktiv platforma
├── README.md                   # Ushbu ilmiy va texnik qo'llanma
├── CNAME                       # doping.uz rasmiy domen bog'lanishi
├── robots.txt                  # Qidiruv tizimlari indeksatsiya qoidalari
├── sitemap.xml                 # Sayt xaritasi (Google / Yandex Search Console)
├── manifest.json               # PWA mobil ilova manifesti
└── worker/
    └── telegram_worker.js      # Cloudflare Worker orqali Telegram bildirishnoma xizmati
```

---

## 🚀 Ishga Tushirish va O‘rnatish

### 1. Lokal Brauzerda Ochish:
`index.html` faylini istalgan zamonaviy brauzerda (Chrome, Edge, Safari, Firefox) ikki marta chertib ochishingiz kifoya. Hech qanday server talab qilinmaydi.

### 2. GitHub Pages Orqali Joylashtirish:
1. Repozitoriyani GitHubʼga yuklang:
   ```bash
   git add .
   git commit -m "feat: complete antidoping portal with full documentation"
   git push origin main
   ```
2. GitHub Repozitoriya sozlamalarida (`Settings -> Pages`):
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` / `/ (root)`
   - **Custom domain:** `doping.uz` (agar DNS ulangangan bo‘lsa).

---

## ⚖️ Mualliflik Huquqi va Ma'lumot

Ushbu platforma O‘zbekiston davlat jismoniy tarbiya va sport mutaxassislarini ilmiy-metodik ta’minlash, qayta tayyorlash va malakasini oshirish institutining ilmiy kengashi tomonidan ma'qullangan metodika asosida ishlab chiqilgan.

- **Muallif:** Saydaliyev Muhammad Sodiq Mo‘minjon o‘g‘li
- **Bog‘lanish:** `Saydaliev.m89@mail.ru`
- **Litsenziya:** Ochiq ta'lim resursi (MIT License) &copy; 2026. Barcha huquqlar himoyalangan.
