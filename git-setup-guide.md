# Panduan Lengkap Upload ke GitHub Pages

## 🔧 Masalah yang Dihadapi
1. Git identity belum di-set
2. Branch belum memiliki upstream
3. Perlu commit terlebih dahulu sebelum push

## 📋 Langkah-Langkah Solusi

### 1. Setup Git Identity
```bash
git config --global user.email "rahmathanif.work@gmail.com"
git config --global user.name "Rahmat Hanif"
```

### 2. Commit File yang Telah Di-staged
```bash
git commit -m "Initial commit: Portfolio Rahmat Hanif with 7 projects"
```

### 3. Push ke GitHub
```bash
git push --set-upstream origin master
```

### 4. Jika Masih Ada Masalah, Coba Ini:
```bash
# Cek status
git status

# Jika ada file yang belum di-add
git add .

# Commit lagi
git commit -m "Add portfolio projects and assets"

# Push dengan force (jika perlu)
git push -u origin master --force
```

## 🚀 Setup GitHub Pages

Setelah berhasil push:

1. **Buka Repository GitHub**
   - Go to: https://github.com/aaniipp/Portfolio-Rahmat-Hanif-Mahasetyaputra

2. **Enable GitHub Pages**
   - Click `Settings` tab
   - Scroll down ke `Pages` section
   - Source: `Deploy from a branch`
   - Branch: `master` → `/ (root)`
   - Click `Save`

3. **Tunggu Deploy**
   - Tunggu 2-5 menit
   - Portfolio akan tersedia di: `https://aaniipp.github.io/Portfolio-Rahmat-Hanif-Mahasetyaputra/`

## 📁 Struktur File yang Akan Di-upload
```
Portfolio-Rahmat-Hanif-Mahasetyaputra/
├── index.html              ✅ Portfolio dengan 7 projects
├── style.css               ✅ Styles
├── script.js               ✅ Interactions
├── README.md               ✅ Documentation
├── rename-assets.bat       ✅ Rename script
└── assets/                 ✅ All lowercase images
    ├── rahmat-hanif.jpg
    ├── tomodime.png
    ├── skintastic.png
    ├── clminton.png
    ├── stellarity.png
    ├── skinout.png
    ├── krealogi.png
    └── biocyclexpert.png
```

## 🔍 Troubleshooting

### Jika Gambar Tidak Muncul:
1. Pastikan nama file lowercase (sudah di-fix)
2. Clear browser cache (Ctrl+F5)
3. Cek console error (F12)

### Jika Push Gagal:
```bash
# Cek remote URL
git remote -v

# Jika salah, update remote
git remote set-url origin https://github.com/aaniipp/Portfolio-Rahmat-Hanif-Mahasetyaputra.git

# Push lagi
git push -u origin master
```

### Jika GitHub Pages Error:
1. Pastikan file `index.html` ada di root
2. Cek GitHub Actions tab untuk deploy status
3. Pastikan tidak ada error di file HTML/CSS/JS

## ✅ Checklist Sebelum Deploy
- [ ] Git identity sudah di-set
- [ ] Semua file sudah di-add
- [ ] Commit message sudah dibuat
- [ ] Push ke GitHub berhasil
- [ ] GitHub Pages sudah di-enable
- [ ] Portfolio bisa diakses online

## 📞 Bantuan Tambahan
Jika masih ada masalah, coba:
1. Delete repository dan buat baru
2. Gunakan GitHub Desktop
3. Atau hubungi saya untuk bantuan lebih lanjut