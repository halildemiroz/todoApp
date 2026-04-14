# Yapılacaklar Listesi (React + Vite)

Bu proje, günlük görevlerinizi kolayca ekleyip yönetebileceğiniz modern bir yapılacaklar listesi uygulamasıdır. React tabanlı yapısı, sade bileşen mimarisi ve localStorage desteği ile hem öğrenim hem de gerçek kullanım için uygundur.

## Proje Özeti

Uygulama ile şunları yapabilirsiniz:

- Yeni görev ekleme
- Görevleri tamamlandı olarak işaretleme
- Mevcut görevleri düzenleme
- Görevleri silme
- Verileri tarayıcıda kalıcı olarak saklama

## Özellikler

- Hızlı ve modern arayüz (React + Vite)
- Yenilemeden sonra verilerin korunması (localStorage)
- Bileşen bazlı temiz yapı
- Basit ve geliştirilebilir kod mimarisi
- Mobil uyumlu tasarım

## Kullanılan Teknolojiler

- React
- React Router
- Vite
- JavaScript (ES6+)
- CSS3

## Klasör Yapısı

```text
src/
    Components/
        TodoForm.jsx       # Yeni görev ekleme formu
        TodoItem.jsx       # Tekil görev kartı (düzenle/sil/tamamla)
    Interfaces/
        TodoInterface.js   # localStorage erişim katmanı
    Pages/
        Home.jsx           # Ana sayfa ve todo durum yönetimi
    App.jsx              # Router tanımları
    index.css            # Uygulama stilleri
    main.jsx             # Uygulama giriş noktası
```

## Kurulum

1. Depoyu klonlayın:

```bash
git clone <repo-url>
```

2. Proje klasörüne girin:

```bash
cd website
```

3. Bağımlılıkları yükleyin:

```bash
npm install
```

## Çalıştırma

Geliştirme ortamında çalıştırmak için:

```bash
npm run dev
```

Üretim build'i almak için:

```bash
npm run build
```

Build sonucunu önizlemek için:

```bash
npm run preview
```

Kod kalitesini kontrol etmek için:

```bash
npm run lint
```

## Veri Saklama

Uygulama görevleri tarayıcının localStorage alanında `halil-todo-js` anahtarı ile saklar. Bu sayede sayfa yenilense bile görevleriniz kaybolmaz.

## Geliştirme Notları

- Yeni bir veri kaynağına (API gibi) geçmek isterseniz ilk olarak `TodoInterface.js` dosyasını güncelleyebilirsiniz.
- Durum yönetimi şu an `Home.jsx` içerisinde `useState` ile yapılmaktadır. Proje büyürse Context veya Zustand gibi bir yapıya geçilebilir.

## Canlı Demo

- https://silly-fairy-9ad5fe.netlify.app/
