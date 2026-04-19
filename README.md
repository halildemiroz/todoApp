# React & Vite Yapılacaklar Listesi (Todo App)

Bu proje, günlük görevlerinizi kolayca ekleyip yönetebileceğiniz modern, hızlı ve kullanıcı dostu bir yapılacaklar listesi uygulamasıdır. React tabanlı yapısı, sade bileşen mimarisi ve `localStorage` desteği ile hem öğrenim hem de gerçek kullanım için idealdir. Uygulama güncel React ekosistemi (Vite, TypeScript, TailwindCSS) ile geliştirilmiştir.

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
- Mobil uyumlu, esnek ve şık tasarım (Tailwind CSS)

## Kullanılan Teknolojiler

- [React 19](https://react.dev/)
- [React Router v7](https://reactrouter.com/)
- [Vite 8](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS 4](https://tailwindcss.com/)

## Klasör Yapısı

```text
src/
    Components/
        TodoForm.tsx       # Yeni görev ekleme formu
        TodoItem.tsx       # Tekil görev kartı (düzenle/sil/tamamla)
    Interfaces/
        TodoInterface.ts   # localStorage erişim katmanı ve veri tipleri
    Pages/
        Home.tsx           # Ana sayfa ve todo durum yönetimi
    App.tsx              # Router tanımları ve ana bileşen
    index.css            # Uygulama stilleri (Tailwind)
    main.tsx             # Uygulama giriş noktası
```

## Kurulum

1. Depoyu klonlayın:

```bash
git clone https://github.com/halildemiroz/todoApp.git
```

2. Proje klasörüne girin:

```bash
cd todoApp
```

3. Bağımlılıkları yükleyin:

```bash
npm install
```

## Çalıştırma

Geliştirme (development) ortamında çalıştırmak için:

```bash
npm run dev
```

Üretim (production) build'i almak için:

```bash
npm run build
```

Build sonucunu önizlemek için:

```bash
npm run preview
```

Kod kalitesini ve standartlarını (TypeScript & ESLint) kontrol etmek için:

```bash
npm run lint
```

## Veri Saklama

Uygulama görevleri tarayıcının yerel depolama (localStorage) alanında `halil-todo-js` (veya benzeri bir anahtar) ile saklar. Bu sayede sayfa yenilense veya tarayıcı kapatılıp açılsa bile görevleriniz kaybolmaz.

## Geliştirme Notları

- Yeni bir veri kaynağına (API gibi) geçmek isterseniz ilk olarak veri erişim katmanı olan `TodoInterface` dosyasını güncelleyebilirsiniz.
- Durum yönetimi (State management) şu an `Home.tsx` içerisinde `useState` ile yapılmaktadır. Proje büyürse Context API, Zustand veya Redux gibi bir yapıya geçilebilir.

## Canlı Demo

Uygulamanın çalışan sürümünü incelemek için:
👉 https://silly-fairy-9ad5fe.netlify.app/
