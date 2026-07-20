# Bozkurt Mobilya — GitHub Pages Hazır Site

Bu klasör doğrudan GitHub Pages'e yüklenebilir. NPM, build veya veritabanı gerekmez.

## Bilgisayarda açma

En kolay yöntem `index.html` dosyasına çift tıklamaktır. Tarayıcı güvenlik kısıtlamalarını önlemek için klasörde terminal açıp şu komutu da çalıştırabilirsiniz:

```bash
python -m http.server 8080
```

Ardından `http://localhost:8080` adresini açın.

## İletişim bilgilerini değiştirme

Tek dosya: `assets/js/site-config.js`

Bu dosyada telefon, WhatsApp, Instagram, e-posta, adres, çalışma saatleri ve Google Maps bağlantısını güncelleyin. Telefon ve WhatsApp numaralarını ülke koduyla, boşluksuz yazın. Örnek: `905321234567`.

## Metinleri değiştirme

Ana sayfa metinleri `index.html` içindedir. HTML etiketlerini bozmadan yalnızca görünen Türkçe metinleri düzenleyin.

## Görsel değiştirme

1. Yeni görseli `assets/images/optimized/` klasörüne ekleyin.
2. `index.html` içindeki ilgili `<picture>` alanında dosya adını değiştirin.
3. Görsel oranını koruyun ve WebP kullanın.

Orijinal yüklenen görseller `assets/images/original/` klasöründe saklanmıştır.

## Renkleri değiştirme

`assets/css/style.css` dosyasının başındaki `:root` bölümünde ana renkler bulunur:

- `--wine`: ana bordo
- `--ink`: antrasit
- `--ivory`: kırık beyaz
- `--bronze`: metal vurgu

## GitHub'a yükleme

1. GitHub'da yeni bir repository oluşturun.
2. Bu klasörün **içindeki tüm dosyaları** repository köküne yükleyin.
3. Commit işlemini tamamlayın.
4. Repository > **Settings > Pages** bölümüne girin.
5. Source olarak **Deploy from a branch**, branch olarak `main`, klasör olarak `/ (root)` seçin.
6. Kaydedin ve yayın bağlantısının oluşmasını bekleyin.

## Alan adı bağlama

`CNAME` dosyasında `bozkurtmobilya.com` yazılıdır. DNS yönetim panelinizde GitHub Pages'in güncel A kayıtlarını ve `www` için CNAME kaydını GitHub dokümantasyonuna göre ekleyin. GitHub Pages ayarlarında Custom domain alanına `bozkurtmobilya.com` yazın ve HTTPS'i etkinleştirin.

## Önbellek sonrası güncel dosyaları görme

Windows: `Ctrl + F5`  
Mac: `Cmd + Shift + R`  
Mobilde tarayıcı önbelleğini temizleyin veya gizli sekmede kontrol edin.

## Yayına almadan önce son kontrol

- `assets/js/site-config.js` içindeki örnek bilgiler güncellendi mi?
- WhatsApp butonları doğru numaraya gidiyor mu?
- Telefon, e-posta, Instagram ve yol tarifi bağlantıları çalışıyor mu?
- Alan adı DNS ayarları tamamlandı mı?
- Mobil görünüm 320, 390 ve 430 px genişliklerde kontrol edildi mi?
- `CNAME`, `robots.txt` ve `sitemap.xml` doğru alan adını içeriyor mu?

## Teknik yapı

- HTML5, CSS3 ve Vanilla JavaScript
- Yerel Bootstrap 5.3.6 ve jQuery 3.7.1 dosyaları
- Responsive WebP/AVIF görseller
- Mobil drawer menü, klavye odağı ve ESC ile kapatma
- `prefers-reduced-motion` desteği
- SEO meta etiketleri, JSON-LD, sitemap, robots, manifest ve 404 sayfası
