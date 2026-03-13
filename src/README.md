# 🎂 Birthday Web App — Panduan Lengkap dari Nol

Web ulang tahun interaktif yang lucu, imut, dan romantis! Dibuat dengan React + Vite, siap di-deploy ke Vercel.

---

## 📁 Struktur Proyek

```
birthday-bella/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Confetti.jsx        ← animasi confetti saat nama dimasukkan
│   │   ├── FloatingHearts.jsx  ← emoji melayang di background
│   │   └── PandaAvatar.jsx     ← avatar panda dengan efek glow
│   ├── scenes/
│   │   ├── SceneEnvelope.jsx   ← Scene 1: amplop interaktif
│   │   ├── SceneName.jsx       ← Scene 2: input nama
│   │   ├── SceneGreeting.jsx   ← Scene 3: sapaan ulang tahun
│   │   ├── SceneStars.jsx      ← Scene 4: klik 4 bintang
│   │   ├── SceneMessage.jsx    ← Scene 5: pesan (typewriter effect)
│   │   ├── SceneGift.jsx       ← Scene 6: tawaran kado
│   │   └── SceneEnding.jsx     ← Scene 7: penutup
│   ├── App.css                 ← semua styling
│   ├── App.jsx                 ← komponen utama & state management
│   └── main.jsx                ← entry point React
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

---

## 🚀 Cara Setup dari Nol

### Prasyarat

Pastikan sudah terinstall di komputermu:

| Tool | Versi Minimum | Cek dengan |
|------|---------------|------------|
| Node.js | v18+ | `node -v` |
| npm | v9+ | `npm -v` |
| Git | any | `git --version` |

Download Node.js di: https://nodejs.org (pilih versi LTS)

---

### Step 1 — Buat Folder Proyek

Buka terminal, lalu jalankan:

```bash
mkdir birthday-bella
cd birthday-bella
```

---

### Step 2 — Inisialisasi Proyek React dengan Vite

```bash
npm create vite@latest . -- --template react
```

> Jika ditanya "Current directory is not empty. Remove existing files and continue?" → pilih **Yes**
> Jika ditanya framework → pilih **React**
> Jika ditanya variant → pilih **JavaScript** (bukan TypeScript)

---

### Step 3 — Install Dependencies

```bash
npm install
```

Tunggu sampai selesai (~1 menit tergantung koneksi).

---

### Step 4 — Copy Semua File

Hapus file default Vite yang tidak diperlukan:

```bash
# Hapus file bawaan vite yang tidak dipakai
rm src/App.css src/App.jsx src/index.css src/assets/react.svg
```

Lalu copy semua file dari proyek ini ke struktur folder yang sesuai:

```
src/App.jsx              ← timpa/buat baru
src/App.css              ← timpa/buat baru
src/main.jsx             ← timpa/buat baru
src/components/          ← buat folder baru
src/scenes/              ← buat folder baru
public/favicon.svg       ← timpa
index.html               ← timpa
vercel.json              ← buat baru
```

Buat folder components dan scenes:

```bash
mkdir -p src/components src/scenes
```

Kemudian paste isi masing-masing file sesuai kode yang diberikan.

---

### Step 5 — Jalankan di Lokal

```bash
npm run dev
```

Buka browser dan akses: **http://localhost:5173**

Kamu akan melihat animasi amplop dan web siap digunakan! 🎉

---

### Step 6 — Build untuk Production

```bash
npm run build
```

Ini akan membuat folder `dist/` yang berisi file siap deploy.

---

## ☁️ Deploy ke Vercel (Gratis!)

### Cara 1 — Via GitHub (Direkomendasikan)

**A. Push ke GitHub:**

```bash
git init
git add .
git commit -m "🎂 initial commit: birthday web app"
git branch -M main
git remote add origin https://github.com/USERNAME/birthday-bella.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub kamu.

**B. Deploy di Vercel:**

1. Buka https://vercel.com dan login (bisa pakai akun GitHub)
2. Klik tombol **"Add New Project"**
3. Pilih repository `birthday-bella`
4. Vercel akan otomatis detect bahwa ini proyek Vite
5. Biarkan semua setting default, klik **"Deploy"**
6. Tunggu ~1-2 menit → web kamu live! 🎉

Kamu akan mendapat URL gratis seperti: `https://birthday-bella.vercel.app`

---

### Cara 2 — Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy langsung dari folder proyek
vercel

# Ikuti instruksi di terminal:
# - Set up and deploy? → Y
# - Which scope? → pilih akun kamu
# - Link to existing project? → N
# - Project name → birthday-bella (atau enter untuk default)
# - Directory → ./
# - Override settings? → N
```

Setelah selesai, kamu dapat URL seperti:
`https://birthday-bella-xxxxx.vercel.app`

---

## ✏️ Cara Kustomisasi

### Ganti Pesan Ulang Tahun

Buka `src/scenes/SceneMessage.jsx`, cari array `LINES`:

```jsx
const LINES = [
  "Selamat bertambah usia ya~ 🎂",
  "Makin tua aja yaa >< hehe",
  // ... tambah atau ubah baris di sini
];
```

Setiap baris akan muncul satu per satu dengan efek typewriter.

---

### Ganti Pesan di Tiap Bintang

Buka `src/scenes/SceneStars.jsx`, cari array `STAR_MESSAGES`:

```jsx
const STAR_MESSAGES = [
  "Satu bintang buat kebaikan hatimu 💛",
  "Dua bintang buat senyummu~ ✨",
  "Tiga bintang buat semangatmu 🌟",
  "Empat bintang buat kamu ⭐",
];
```

---

### Ganti Warna Tema

Buka `src/App.css`, ubah variabel di bagian `:root`:

```css
:root {
  --pink: #ff6eb4;        /* warna aksen utama */
  --purple-dark: #1e0338; /* background gelap */
  --purple-mid: #3b0764;  /* background tengah */
  --gold: #fbbf24;        /* warna bintang */
}
```

---

### Ganti Emoji Panda

Buka scene yang ingin diubah (misal `SceneGreeting.jsx`):

```jsx
<PandaAvatar emoji="🐼" />
// Ganti dengan emoji lain: 🐰 🐻 🦊 🐱 dll
```

---

### Ganti Nama Default di Pesan Akhir

Buka `src/scenes/SceneEnding.jsx` dan ubah teks sesuai kebutuhan.

---

## 🛠️ Troubleshooting

| Masalah | Solusi |
|---------|--------|
| `npm: command not found` | Install Node.js dari nodejs.org |
| Port 5173 sudah dipakai | Jalankan `npm run dev -- --port 3000` |
| Gambar/font tidak muncul | Pastikan ada koneksi internet (font dari Google Fonts) |
| Build gagal | Cek error di terminal, biasanya ada typo di kode |
| Vercel gagal deploy | Pastikan `vercel.json` ada dan `npm run build` berhasil di lokal |

---

## 📦 Tech Stack

- **React 18** — UI framework
- **Vite 5** — build tool super cepat
- **CSS3** — animasi dan styling (tanpa library tambahan)
- **Google Fonts** — Nunito + Dancing Script
- **Vercel** — hosting gratis

---

## 💕 Selesai!

Web ulang tahun kamu siap digunakan dan dibagikan. Tinggal kirim linknya ke si dia~ 🎀

```
https://birthday-bella.vercel.app
```

> 💡 **Tips:** Kalau mau ganti nama di URL jadi lebih personal, bisa ubah di Vercel Dashboard → Settings → Domains → Edit.
