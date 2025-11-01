#!/bin/bash
echo "🔍 PdrNet Proje Durum Kontrolü Başlatılıyor..."
echo "--------------------------------------------"

# 1. Dosya yapısı
echo "📂 Dosya Yapısı:"
tree -L 3 src/app 2>/dev/null || find src/app -maxdepth 3 -type d

# 2. Sayfa dosyaları
echo -e "\n🗺️ Sayfa (page.tsx) Dosyaları:"
find src/app -type f -name "page.tsx"

# 3. Firebase, Auth, Firestore kontrolü
echo -e "\n🔥 Firebase / Auth Dosyaları:"
grep -r -i "firebase" src/ | head -n 10
grep -r -i "auth" src/ | head -n 10

# 4. TODO işaretli satırlar
echo -e "\n🚧 Henüz tamamlanmamış (TODO) satırlar:"
grep -r "TODO" src/ || echo "✔️ Herhangi bir TODO bulunamadı."

# 5. Değiştirilen dosyalar (Git)
echo -e "\n📝 Git Değişiklikleri:"
git status -s || echo "⚠️ Git deposu bulunamadı."

# 6. Toplam satır sayısı
echo -e "\n📊 Kod Satırı Sayısı:"
find src -name "*.ts*" | xargs wc -l | tail -n 1

echo -e "\n✅ Kontrol tamamlandı!"

