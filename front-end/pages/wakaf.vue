<template>
  <div>
    <!-- Header -->
    <div class="flex items-center p-4 text-white bg-red-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      <h1 class="text-lg italic font-semibold">Wakaf</h1>
    </div>

    <!-- Breadcrumb -->
    <div class="px-6 py-3 text-white bg-red-500">
      <p>
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <span class="mx-2">›</span>
        <span>Wakaf</span>
      </p>
    </div>

    <!-- Image dengan ukuran yang lebih kecil -->
    <div class="flex justify-center p-4">
      <div class="w-full max-w-sm">
        <img src="assets/image/yp.png" alt="Wakaf Illustration" class="object-cover w-full h-40 rounded-lg shadow-md" />
      </div>
    </div>

    <!-- Title -->
    <div class="px-4 mb-6">
      <h2 class="text-xl font-bold leading-snug text-center text-red-600">
        Wakaf: Arti, Makna, Hukum, dan Keutamaan yang Harus Diketahui
      </h2>
    </div>

    <!-- Content -->
    <div class="max-w-4xl p-4 mx-auto space-y-6">
      <!-- Pengertian Wakaf -->
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="pb-2 mb-4 text-xl font-bold text-red-600 border-b-2 border-red-200">
          📚 Pengertian Wakaf
        </h3>
        <p class="mb-4 leading-relaxed text-gray-700">
          Wakaf dalam konteks Islam adalah penyerahan hak milik suatu harta untuk
          dimanfaatkan bagi kepentingan umat sesuai syariat. Wakaf tidak boleh
          diperjualbelikan, diwariskan, atau dihibahkan, melainkan harus digunakan
          sesuai tujuan awalnya.
        </p>
        <p class="leading-relaxed text-gray-700">
          Secara etimologi, wakaf berasal dari kata "waqafa" yang berarti menahan atau
          berhenti, sedangkan secara terminologi adalah menahan asal harta dan memberikan
          manfaatnya di jalan Allah.
        </p>
      </div>

      <!-- Dasar Hukum Wakaf -->
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="pb-2 mb-4 text-xl font-bold text-red-600 border-b-2 border-red-200">
          ⚖️ Dasar Hukum Wakaf dalam Islam
        </h3>
        <div class="space-y-3">
          <div class="p-4 rounded-lg bg-red-50">
            <h4 class="mb-2 font-semibold text-red-700">Dalil Al-Quran:</h4>
            <p class="italic text-gray-700">"Kamu sekali-kali tidak sampai kepada kebajikan (yang sempurna), 
            sebelum kamu menafkahkan sebagian harta yang kamu cintai." (QS. Ali Imran: 92)</p>
          </div>
          <div class="p-4 rounded-lg bg-red-50">
            <h4 class="mb-2 font-semibold text-red-700">Hadits Rasulullah:</h4>
            <p class="italic text-gray-700">"Apabila anak Adam meninggal dunia, maka terputuslah amalnya kecuali tiga hal: 
            sedekah jariyah, ilmu yang bermanfaat, dan anak shalih yang mendoakan orang tuanya." (HR. Muslim)</p>
          </div>
        </div>
      </div>

      <!-- Jenis-Jenis Wakaf -->
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="pb-2 mb-4 text-xl font-bold text-red-600 border-b-2 border-red-200">
          🏗️ Jenis-Jenis Wakaf
        </h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="p-4 rounded-lg bg-gradient-to-r from-red-100 to-red-50">
            <h4 class="mb-2 font-semibold text-red-700">1. Wakaf Ahli (Dzurri)</h4>
            <p class="text-sm text-gray-700">Wakaf yang ditujukan untuk kepentingan keluarga dan keturunan wakif.</p>
          </div>
          <div class="p-4 rounded-lg bg-gradient-to-r from-red-100 to-red-50">
            <h4 class="mb-2 font-semibold text-red-700">2. Wakaf Khairi</h4>
            <p class="text-sm text-gray-700">Wakaf yang ditujukan untuk kepentingan umum seperti masjid, sekolah, dan rumah sakit.</p>
          </div>
          <div class="p-4 rounded-lg bg-gradient-to-r from-red-100 to-red-50">
            <h4 class="mb-2 font-semibold text-red-700">3. Wakaf Musytarak</h4>
            <p class="text-sm text-gray-700">Kombinasi antara wakaf ahli dan wakaf khairi.</p>
          </div>
          <div class="p-4 rounded-lg bg-gradient-to-r from-red-100 to-red-50">
            <h4 class="mb-2 font-semibold text-red-700">4. Wakaf Produktif</h4>
            <p class="text-sm text-gray-700">Wakaf yang dikelola secara produktif untuk menghasilkan keuntungan yang berkelanjutan.</p>
          </div>
        </div>
      </div>

      <!-- Syarat dan Rukun Wakaf -->
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="pb-2 mb-4 text-xl font-bold text-red-600 border-b-2 border-red-200">
          📋 Syarat dan Rukun Wakaf
        </h3>
        <div class="space-y-4">
          <div>
            <h4 class="mb-2 font-semibold text-gray-800">Rukun Wakaf (4 Unsur Utama):</h4>
            <ul class="space-y-1 text-gray-700 list-disc list-inside">
              <li><strong>Wakif:</strong> Orang yang mewakafkan harta</li>
              <li><strong>Mauquf:</strong> Harta yang diwakafkan</li>
              <li><strong>Mauquf 'alaih:</strong> Penerima manfaat wakaf</li>
              <li><strong>Shighat:</strong> Pernyataan atau ikrar wakaf</li>
            </ul>
          </div>
          <div>
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
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="pb-2 mb-4 text-xl font-bold text-red-600 border-b-2 border-red-200">
          ⭐ Keutamaan dan Manfaat Wakaf
        </h3>
        <div class="grid gap-4 md:grid-cols-3">
          <div class="p-4 text-center rounded-lg bg-red-50">
            <div class="mb-2 text-3xl">🤲</div>
            <h4 class="mb-1 font-semibold text-red-700">Pahala Berkelanjutan</h4>
            <p class="text-sm text-gray-600">Amal jariyah yang pahalanya terus mengalir</p>
          </div>
          <div class="p-4 text-center rounded-lg bg-red-50">
            <div class="mb-2 text-3xl">🏘️</div>
            <h4 class="mb-1 font-semibold text-red-700">Kesejahteraan Umat</h4>
            <p class="text-sm text-gray-600">Membantu kesejahteraan masyarakat umum</p>
          </div>
          <div class="p-4 text-center rounded-lg bg-red-50">
            <div class="mb-2 text-3xl">💰</div>
            <h4 class="mb-1 font-semibold text-red-700">Pemberdayaan Ekonomi</h4>
            <p class="text-sm text-gray-600">Meningkatkan ekonomi umat melalui wakaf produktif</p>
          </div>
        </div>
      </div>

      <!-- Contoh Wakaf dalam Sejarah -->
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="pb-2 mb-4 text-xl font-bold text-red-600 border-b-2 border-red-200">
          📜 Contoh Wakaf dalam Sejarah Islam
        </h3>
        <div class="space-y-4">
          <div class="pl-4 border-l-4 border-red-400">
            <h4 class="font-semibold text-gray-800">Wakaf Umar bin Khattab</h4>
            <p class="text-sm text-gray-700">Mewakafkan kebun kurma di Khaibar atas saran Rasulullah SAW</p>
          </div>
          <div class="pl-4 border-l-4 border-red-400">
            <h4 class="font-semibold text-gray-800">Wakaf Utsman bin Affan</h4>
            <p class="text-sm text-gray-700">Membeli sumur Raumah untuk kepentingan umum kaum muslim</p>
          </div>
          <div class="pl-4 border-l-4 border-red-400">
            <h4 class="font-semibold text-gray-800">Wakaf Abu Talhah</h4>
            <p class="text-sm text-gray-700">Mewakafkan kebun Bairuha yang paling dicintainya</p>
          </div>
        </div>
      </div>

      <!-- Tips Berwakaf -->
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="pb-2 mb-4 text-xl font-bold text-red-600 border-b-2 border-red-200">
          💡 Tips Memilih Wakaf yang Baik
        </h3>
        <div class="space-y-3">
          <div class="flex items-start space-x-3">
            <div class="flex items-center justify-center w-6 h-6 mt-1 text-sm font-bold text-white bg-red-500 rounded-full">1</div>
            <p class="text-gray-700">Pilih lembaga wakaf yang terpercaya dan transparan</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="flex items-center justify-center w-6 h-6 mt-1 text-sm font-bold text-white bg-red-500 rounded-full">2</div>
            <p class="text-gray-700">Pastikan harta yang diwakafkan halal dan milik sendiri</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="flex items-center justify-center w-6 h-6 mt-1 text-sm font-bold text-white bg-red-500 rounded-full">3</div>
            <p class="text-gray-700">Tentukan tujuan wakaf dengan jelas dan spesifik</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="flex items-center justify-center w-6 h-6 mt-1 text-sm font-bold text-white bg-red-500 rounded-full">4</div>
            <p class="text-gray-700">Pertimbangkan wakaf produktif untuk manfaat jangka panjang</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="flex items-center justify-center w-6 h-6 mt-1 text-sm font-bold text-white bg-red-500 rounded-full">5</div>
            <p class="text-gray-700">Dokumentasikan dengan baik untuk keperluan hukum</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="p-6 text-center text-white rounded-lg shadow-md bg-gradient-to-r from-red-500 to-red-600">
        <h3 class="mb-2 text-xl font-bold">Mari Berwakaf untuk Keberkahan Hidup</h3>
        <p class="mb-4 opacity-90">Jadilah bagian dari amal jariyah yang pahalanya terus mengalir hingga akhirat</p>
        <button class="px-6 py-2 font-semibold text-red-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
          Mulai Berwakaf Sekarang
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// UI statis, tidak perlu script tambahan untuk konten ini
// Bisa ditambahkan meta tags atau SEO jika diperlukan
useHead({
  title: 'Wakaf: Panduan Lengkap Arti, Hukum, dan Keutamaan',
  meta: [
    {
      name: 'description',
      content: 'Pelajari pengertian wakaf, hukum, jenis-jenis, syarat rukun, dan keutamaan wakaf dalam Islam. Panduan lengkap untuk memahami wakaf sebagai amal jariyah.'
    }
  ]
})
</script>

<style scoped>
/* Custom styling tambahan jika diperlukan */
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>