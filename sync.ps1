cd "C:\Users\Serdar ABBAS\Desktop\Pdrnet"
git add .
git commit -m "Otomatik senkronizasyon"
git pull origin main --rebase
git push origin main
Write-Host "✅ Senkronizasyon tamamlandı!" -ForegroundColor Green
Pause
