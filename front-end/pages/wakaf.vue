<template>
  <div>
    <!-- Header -->
    <div
      class="flex items-center p-4 text-white bg-gradient-to-r from-orange-500 to-orange-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <h1 class="text-lg italic font-semibold">Wakaf</h1>
    </div>

    <!-- Breadcrumb -->
    <div
      class="px-6 py-3 text-white bg-gradient-to-r from-orange-600 to-orange-700"
    >
      <p>
        <NuxtLink to="/" class="hover:underline hover:text-orange-100"
          >Home</NuxtLink
        >
        <span class="mx-2">›</span>
        <span>Wakaf</span>
      </p>
    </div>

    <!-- Image dengan ukuran yang lebih kecil -->
    <div class="flex justify-center p-4 bg-gray-50">
      <div class="w-full max-w-sm">
        <img
          src="assets/image/yp.png"
          alt="Wakaf Illustration"
          class="object-cover w-full h-40 border-2 border-teal-100 rounded-lg shadow-lg"
          @error="handleImageError"
        />
      </div>
    </div>

    <!-- Title -->
    <div class="px-4 pb-6 mb-6 bg-gray-50">
      <h2 class="text-xl font-bold leading-snug text-center text-gray-800">
        <span class="text-orange-600">Wakaf:</span> Arti, Makna, Hukum, dan
        Keutamaan yang Harus Diketahui
      </h2>
    </div>

    <!-- Content -->
    <div class="max-w-4xl p-4 mx-auto space-y-6 bg-white">
      <!-- Pengertian Wakaf -->
      <div class="p-6 bg-white border border-gray-100 rounded-lg shadow-lg">
        <h3
          class="pb-2 mb-4 text-xl font-bold text-orange-600 border-b-2 border-orange-200"
        >
          📚 Pengertian Wakaf
        </h3>
        <p class="mb-4 leading-relaxed text-gray-700">
          Wakaf dalam konteks Islam adalah penyerahan hak milik suatu harta
          untuk dimanfaatkan bagi kepentingan umat sesuai syariat. Wakaf tidak
          boleh diperjualbelikan, diwariskan, atau dihibahkan, melainkan harus
          digunakan sesuai tujuan awalnya.
        </p>
        <p class="leading-relaxed text-gray-700">
          Secara etimologi, wakaf berasal dari kata "waqafa" yang berarti
          menahan atau berhenti, sedangkan secara terminologi adalah menahan
          asal harta dan memberikan manfaatnya di jalan Allah.
        </p>
      </div>

      <!-- Dasar Hukum Wakaf -->
      <div class="p-6 bg-white border border-gray-100 rounded-lg shadow-lg">
        <h3
          class="pb-2 mb-4 text-xl font-bold text-orange-600 border-b-2 border-orange-200"
        >
          ⚖️ Dasar Hukum Wakaf dalam Islam
        </h3>
        <div class="space-y-3">
          <div
            class="p-4 border-l-4 border-teal-500 rounded-lg bg-gradient-to-r from-teal-50 to-teal-100"
          >
            <h4 class="mb-2 font-semibold text-teal-700">Dalil Al-Quran:</h4>
            <p class="italic font-medium text-gray-700">
              "Kamu sekali-kali tidak sampai kepada kebajikan (yang sempurna),
              sebelum kamu menafkahkan sebagian harta yang kamu cintai." (QS.
              Ali Imran: 92)
            </p>
          </div>
          <div
            class="p-4 border-l-4 border-teal-500 rounded-lg bg-gradient-to-r from-teal-50 to-teal-100"
          >
            <h4 class="mb-2 font-semibold text-teal-700">Hadits Rasulullah:</h4>
            <p class="italic font-medium text-gray-700">
              "Apabila anak Adam meninggal dunia, maka terputuslah amalnya
              kecuali tiga hal: sedekah jariyah, ilmu yang bermanfaat, dan anak
              shalih yang mendoakan orang tuanya." (HR. Muslim)
            </p>
          </div>
        </div>
      </div>

      <!-- Jenis-Jenis Wakaf -->
      <div class="p-6 bg-white border border-gray-100 rounded-lg shadow-lg">
        <h3
          class="pb-2 mb-4 text-xl font-bold text-orange-600 border-b-2 border-orange-200"
        >
          🏗️ Jenis-Jenis Wakaf
        </h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div
            class="p-4 transition-all border border-orange-200 rounded-lg bg-gradient-to-br from-orange-100 via-orange-50 to-white hover:shadow-md"
          >
            <h4 class="mb-2 font-semibold text-orange-700">
              1. Wakaf Ahli (Dzurri)
            </h4>
            <p class="text-sm text-gray-700">
              Wakaf yang ditujukan untuk kepentingan keluarga dan keturunan
              wakif.
            </p>
          </div>
          <div
            class="p-4 transition-all border border-orange-200 rounded-lg bg-gradient-to-br from-orange-100 via-orange-50 to-white hover:shadow-md"
          >
            <h4 class="mb-2 font-semibold text-orange-700">2. Wakaf Khairi</h4>
            <p class="text-sm text-gray-700">
              Wakaf yang ditujukan untuk kepentingan umum seperti masjid,
              sekolah, dan rumah sakit.
            </p>
          </div>
          <div
            class="p-4 transition-all border border-orange-200 rounded-lg bg-gradient-to-br from-orange-100 via-orange-50 to-white hover:shadow-md"
          >
            <h4 class="mb-2 font-semibold text-orange-700">
              3. Wakaf Musytarak
            </h4>
            <p class="text-sm text-gray-700">
              Kombinasi antara wakaf ahli dan wakaf khairi.
            </p>
          </div>
          <div
            class="p-4 transition-all border border-orange-200 rounded-lg bg-gradient-to-br from-orange-100 via-orange-50 to-white hover:shadow-md"
          >
            <h4 class="mb-2 font-semibold text-orange-700">
              4. Wakaf Produktif
            </h4>
            <p class="text-sm text-gray-700">
              Wakaf yang dikelola secara produktif untuk menghasilkan keuntungan
              yang berkelanjutan.
            </p>
          </div>
        </div>
      </div>

      <!-- Syarat dan Rukun Wakaf -->
      <div class="p-6 bg-white border border-gray-100 rounded-lg shadow-lg">
        <h3
          class="pb-2 mb-4 text-xl font-bold text-orange-600 border-b-2 border-orange-200"
        >
          📋 Syarat dan Rukun Wakaf
        </h3>
        <div class="space-y-4">
          <div
            class="p-4 border-l-4 border-teal-500 rounded-lg bg-gradient-to-r from-teal-50 to-white"
          >
            <h4 class="mb-2 font-semibold text-gray-800">
              Rukun Wakaf (4 Unsur Utama):
            </h4>
            <ul class="space-y-1 text-gray-700 list-disc list-inside">
              <li>
                <strong class="text-teal-700">Wakif:</strong> Orang yang
                mewakafkan harta
              </li>
              <li>
                <strong class="text-teal-700">Mauquf:</strong> Harta yang
                diwakafkan
              </li>
              <li>
                <strong class="text-teal-700">Mauquf 'alaih:</strong> Penerima
                manfaat wakaf
              </li>
              <li>
                <strong class="text-teal-700">Shighat:</strong> Pernyataan atau
                ikrar wakaf
              </li>
            </ul>
          </div>
          <div
            class="p-4 border-l-4 border-orange-500 rounded-lg bg-gradient-to-r from-orange-50 to-white"
          >
            <h4 class="mb-2 font-semibold text-gray-800">Syarat Wakif:</h4>
            <ul class="space-y-1 text-gray-700 list-disc list-inside">
              <li>Berakal sehat dan baligh</li>
              <li>Memiliki harta secara sah</li>
              <li>Tidak dalam keadaan dipaksa</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Keutamaan Wakaf -->
      <div class="p-6 bg-white border border-gray-100 rounded-lg shadow-lg">
        <h3
          class="pb-2 mb-4 text-xl font-bold text-orange-600 border-b-2 border-orange-200"
        >
          ⭐ Keutamaan dan Manfaat Wakaf
        </h3>
        <div class="grid gap-4 md:grid-cols-3">
          <div
            class="p-4 text-center transition-all border border-teal-200 rounded-lg bg-gradient-to-b from-teal-50 to-teal-100 hover:shadow-lg"
          >
            <div class="mb-2 text-3xl">🤲</div>
            <h4 class="mb-1 font-semibold text-teal-700">
              Pahala Berkelanjutan
            </h4>
            <p class="text-sm text-gray-600">
              Amal jariyah yang pahalanya terus mengalir
            </p>
          </div>
          <div
            class="p-4 text-center transition-all border border-orange-200 rounded-lg bg-gradient-to-b from-orange-50 to-orange-100 hover:shadow-lg"
          >
            <div class="mb-2 text-3xl">🏘️</div>
            <h4 class="mb-1 font-semibold text-orange-700">
              Kesejahteraan Umat
            </h4>
            <p class="text-sm text-gray-600">
              Membantu kesejahteraan masyarakat umum
            </p>
          </div>
          <div
            class="p-4 text-center transition-all border border-teal-200 rounded-lg bg-gradient-to-b from-teal-50 to-teal-100 hover:shadow-lg"
          >
            <div class="mb-2 text-3xl">💰</div>
            <h4 class="mb-1 font-semibold text-teal-700">
              Pemberdayaan Ekonomi
            </h4>
            <p class="text-sm text-gray-600">
              Meningkatkan ekonomi umat melalui wakaf produktif
            </p>
          </div>
        </div>
      </div>

      <!-- Contoh Wakaf dalam Sejarah -->
      <div class="p-6 bg-white border border-gray-100 rounded-lg shadow-lg">
        <h3
          class="pb-2 mb-4 text-xl font-bold text-orange-600 border-b-2 border-orange-200"
        >
          📜 Contoh Wakaf dalam Sejarah Islam
        </h3>
        <div class="space-y-4">
          <div
            class="p-3 pl-4 border-l-4 border-teal-500 rounded-r-lg bg-gradient-to-r from-teal-50 to-white"
          >
            <h4 class="font-semibold text-gray-800">Wakaf Umar bin Khattab</h4>
            <p class="text-sm text-gray-700">
              Mewakafkan kebun kurma di Khaibar atas saran Rasulullah SAW
            </p>
          </div>
          <div
            class="p-3 pl-4 border-l-4 border-orange-500 rounded-r-lg bg-gradient-to-r from-orange-50 to-white"
          >
            <h4 class="font-semibold text-gray-800">Wakaf Utsman bin Affan</h4>
            <p class="text-sm text-gray-700">
              Membeli sumur Raumah untuk kepentingan umum kaum muslim
            </p>
          </div>
          <div
            class="p-3 pl-4 border-l-4 border-teal-500 rounded-r-lg bg-gradient-to-r from-teal-50 to-white"
          >
            <h4 class="font-semibold text-gray-800">Wakaf Abu Talhah</h4>
            <p class="text-sm text-gray-700">
              Mewakafkan kebun Bairuha yang paling dicintainya
            </p>
          </div>
        </div>
      </div>

      <!-- Tips Berwakaf -->
      <div
        class="p-6 border border-gray-100 rounded-lg shadow-lg bg-gradient-to-br from-gray-50 to-white"
      >
        <h3
          class="pb-2 mb-4 text-xl font-bold text-orange-600 border-b-2 border-orange-200"
        >
          ` 💡 Tips Memilih Wakaf yang Baik
        </h3>
        <div class="space-y-3">
          <div class="flex items-start space-x-3">
            <div
              class="flex items-center justify-center w-8 h-8 mt-1 text-sm font-bold text-white rounded-full shadow-md bg-gradient-to-br from-orange-500 to-orange-600"
            >
              1
            </div>
            <p class="pt-1 text-gray-700">
              Pilih lembaga wakaf yang terpercaya dan transparan
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <div
              class="flex items-center justify-center w-8 h-8 mt-1 text-sm font-bold text-white rounded-full shadow-md bg-gradient-to-br from-teal-500 to-teal-600"
            >
              2
            </div>
            <p class="pt-1 text-gray-700">
              Pastikan harta yang diwakafkan halal dan milik sendiri
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <div
              class="flex items-center justify-center w-8 h-8 mt-1 text-sm font-bold text-white rounded-full shadow-md bg-gradient-to-br from-orange-500 to-orange-600"
            >
              3
            </div>
            <p class="pt-1 text-gray-700">
              Tentukan tujuan wakaf dengan jelas dan spesifik
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <div
              class="flex items-center justify-center w-8 h-8 mt-1 text-sm font-bold text-white rounded-full shadow-md bg-gradient-to-br from-teal-500 to-teal-600"
            >
              4
            </div>
            <p class="pt-1 text-gray-700">
              Pertimbangkan wakaf produktif untuk manfaat jangka panjang
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <div
              class="flex items-center justify-center w-8 h-8 mt-1 text-sm font-bold text-white rounded-full shadow-md bg-gradient-to-br from-orange-500 to-orange-600"
            >
              5
            </div>
            <p class="pt-1 text-gray-700">
              Dokumentasikan dengan baik untuk keperluan hukum
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div
        class="p-8 text-center text-white border-2 border-orange-300 rounded-lg shadow-lg bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"
      >
        <div class="mb-4">
          <div class="inline-block p-3 mb-3 rounded-full bg-white/20">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2L3.09 8.26l1.42 1.42L12 4.16l7.49 5.52 1.42-1.42L12 2z"
              />
              <path
                d="M4.5 9v11c0 .55.45 1 1 1h3V14h6v7h3c.55 0 1-.45 1-1V9l-7-5.16L4.5 9z"
              />
            </svg>
          </div>
        </div>
        <h3 class="mb-3 text-2xl font-bold">
          Mari Berwakaf untuk Keberkahan Hidup
        </h3>
        <p class="mb-6 text-lg opacity-90">
          Jadilah bagian dari amal jariyah yang pahalanya terus mengalir hingga
          akhirat
        </p>
        <button
          class="px-8 py-3 font-semibold text-orange-600 transition-all transform bg-white rounded-lg hover:bg-orange-50 hover:shadow-lg hover:scale-105"
          @click="startWakaf"
        >
          Mulai Berwakaf Sekarang
        </button>
      </div>
    </div>

    <!-- Footer spacing -->
    <div class="h-8 bg-gray-50"></div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Handle image path dengan error handling
const imagePath = ref("/image/yp.png");
const imageError = ref(false);

// Method untuk handle image error
const handleImageError = () => {
  console.warn("Image not found, using fallback");
  imageError.value = true;
  // SVG placeholder dengan tema yang sesuai
  imagePath.value =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDMwMCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMTYwIiBmaWxsPSIjRkVGM0VGIiBzdHJva2U9IiNGQjhDMDAiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTUwIDQwQzEyMCA0MCA5MCA2MCA5MCA5MEM5MCAxMjAgMTIwIDE0MCAxNTAgMTQwQzE4MCAxNDAgMjEwIDEyMCAyMTAgOTBDMjEwIDYwIDE4MCA0MCAxNTAgNDBaIiBmaWxsPSIjRkI4QzAwIiBvcGFjaXR5PSIwLjEiLz4KPHN2ZyB4PSI2MCIgeT0iNjAiIHdpZHRoPSIxODAiIGhlaWdodD0iNDAiPgo8dGV4dCB4PSI5MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI0Y1OTUwNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPldha2FmPC90ZXh0Pgo8L3N2Zz4KPC9zdmc+";
};

// Method untuk handle call to action
const startWakaf = () => {
  // Implementasi navigasi atau action untuk memulai wakaf
  console.log("Navigating to wakaf form...");
  // Contoh: navigateTo('/wakaf/form') atau emit event
};

// SEO Meta tags
useHead({
  title: "Wakaf: Panduan Lengkap Arti, Hukum, dan Keutamaan - LKS Ibadurrohman",
  meta: [
    {
      name: "description",
      content:
        "Pelajari pengertian wakaf, hukum, jenis-jenis, syarat rukun, dan keutamaan wakaf dalam Islam. Panduan lengkap untuk memahami wakaf sebagai amal jariyah oleh LKS Ibadurrohman.",
    },
    {
      name: "keywords",
      content:
        "wakaf, amal jariyah, islam, sedekah, hukum wakaf, syariat, LKS Ibadurrohman",
    },
    {
      property: "og:title",
      content: "Wakaf: Panduan Lengkap dalam Islam - LKS Ibadurrohman",
    },
    {
      property: "og:description",
      content:
        "Panduan lengkap tentang wakaf dalam Islam, mulai dari pengertian, hukum, hingga keutamaannya oleh LKS Ibadurrohman",
    },
  ],
});
</script>

<style scoped>
/* Custom styling dengan color palette LKS Ibadurrohman */
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Enhanced hover effects */
.shadow-lg:hover {
  @apply shadow-xl;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(-2px);
}

/* Custom gradients sesuai palette */
.bg-lks-orange {
  background: linear-gradient(135deg, #fb8500 0%, #c96a04 100%);
}

.bg-lks-teal {
  background: linear-gradient(135deg, #9bccd4 0%, #59aab7 100%);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid.md\\:grid-cols-2 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .grid.md\\:grid-cols-3 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .text-2xl {
    font-size: 1.5rem;
  }

  .px-8 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

/* Smooth scrolling untuk anchor links */
html {
  scroll-behavior: smooth;
}

/* Focus states untuk accessibility */
button:focus,
a:focus {
  outline: 2px solid #fb8500;
  outline-offset: 2px;
}
</style>
