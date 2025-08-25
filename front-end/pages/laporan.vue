<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <div class="bg-red-500 text-white">
      <!-- Navigation Bar -->
      <div class="px-4 py-4">
        <div class="flex items-center space-x-4">
          <button class="text-white hover:text-gray-200">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <h1 class="text-xl font-semibold">Laporan Audit</h1>
        </div>
      </div>

      <!-- Breadcrumb -->
      <div class="px-4 pb-4">
        <nav class="text-sm">
          <NuxtLink to="/" class="text-white hover:text-gray-200"
            >Home</NuxtLink
          >
          <span class="mx-2">›</span>
          <span class="text-gray-200">laporan-audit</span>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <!-- Page Title -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Laporan Audit</h1>
        <div class="w-16 h-1 bg-red-500"></div>
      </div>

      <!-- Content Section --->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <!-- Section Title -->
        <h2 class="text-xl font-semibold text-gray-700 mb-4">
          Laporan Audit dan Keuangan Mizan Amanah
        </h2>

        <!-- Description -->
        <p class="text-gray-600 mb-6 leading-relaxed">
          Alhamdulillah setiap tahunnya Mizan Amanah selalu di audit oleh Kantor
          Akuntan Publik (KAP) dengan hasil predikat Wajar Tanpa Pengecualian
          (WTP) anda bisa download dan membaca laporan hasil audit kami di bawah
          ini :
        </p>

        <!-- Audit Reports List -->
        <div class="space-y-3">
          <div
            v-for="report in auditReports"
            :key="report.year"
            class="flex items-center justify-between py-2"
          >
            <span class="text-gray-700">{{ report.title }}</span>
            <div class="flex space-x-2">
              <a
                :href="report.viewLink"
                class="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Laporan
              </a>
              <span class="text-gray-400">|</span>
              <a
                :href="report.downloadLink"
                class="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "Laporan Audit - Mizan Amanah",
  meta: [
    {
      name: "description",
      content:
        "Laporan Audit dan Keuangan Mizan Amanah - Wajar Tanpa Pengecualian (WTP)",
    },
  ],
});

const auditReports = ref([
  {
    year: 2011,
    title: "Laporan Audit Tahun 2011 -",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-keuangan-mizan-amanah-2011/23766862",
    downloadLink:
      "https://www.slideshare.net/slideshow/laporan-keuangan-mizan-amanah-2011/23766862",
  },
  {
    year: 2012,
    title: "Laporan Audit Tahun 2012 -",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-keuangan-mizan-amanah-2012/24644977",
    downloadLink:
      "https://www.slideshare.net/slideshow/laporan-keuangan-mizan-amanah-2012/24644977",
  },
  {
    year: 2013,
    title: "Laporan Audit Tahun 2013 -",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2013/227351424",
    downloadLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2013/227351424",
  },
  {
    year: 2014,
    title: "Laporan Audit Tahun 2014 -",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2014/227347854",
    downloadLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2014/227347854",
  },
  {
    year: 2015,
    title: "Laporan Audit Tahun 2015 -",
    viewLink:
      "https://www.slideshare.net/mizanamanah/laporan-audit-kap-mizan-amanah-tahun-2015",
    downloadLink:
      "https://www.slideshare.net/mizanamanah/laporan-audit-kap-mizan-amanah-tahun-2015",
  },
  {
    year: 2016,
    title: "Laporan Audit Tahun 2016 -",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2016/227347458",
    downloadLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2016/227347458",
  },
  {
    year: 2017,
    title: "Laporan Audit Tahun 2017 -",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2017/227346231",
    downloadLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2017/227346231",
  },
  {
    year: 2018,
    title: "Laporan Audit Tahun 2018 -",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2018/227346875",
    downloadLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2018/227346875",
  },
  {
    year: 2019,
    title: "Laporan Audit Tahun 2019 -",
    viewLink:
      "https://www.slideshare.net/mizanamanah/laporan-audit-mizan-amanah-tahun-2019-240416449",
    downloadLink:
      "https://www.slideshare.net/mizanamanah/laporan-audit-mizan-amanah-tahun-2019-240416449",
  },
  {
    year: 2020,
    title: "Laporan Audit Tahun 2020 -",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-yayasan-mizan-amanah-tahun-2020pdf/251505790",
    downloadLink:
      "https://www.slideshare.net/slideshow/laporan-audit-yayasan-mizan-amanah-tahun-2020pdf/251505790",
  },
  {
    year: 2021,
    title: "Laporan Audit Tahun 2021 -",
    viewLink:
      "https://www.slideshare.net/slideshow/audit-keuangan-mizan-amanah-tahun-2021/255085974", // ganti dengan link resmi
    downloadLink:
      "https://www.slideshare.net/slideshow/audit-keuangan-mizan-amanah-tahun-2021/255085974", // ganti dengan link resmi
  },
  {
    year: 2022,
    title: "Laporan Audit Tahun 2022 -",
    viewLink:
      "https://drive.google.com/file/d/1bLlUi2s8cnjQYQEI-hIMx-0NC78B1kOg/view",
    downloadLink:
      "https://drive.google.com/file/d/1bLlUi2s8cnjQYQEI-hIMx-0NC78B1kOg/view",
  },

  {
    year: 2023,
    title: "Laporan Audit Tahun 2023 -",
    viewLink:
      "https://drive.google.com/file/d/1gxCQAHPtGuzpBbTBhM6KCc_nthsaHHsV/view", // ganti dengan link resmi
    downloadLink:
      "https://drive.google.com/file/d/1gxCQAHPtGuzpBbTBhM6KCc_nthsaHHsV/view", // ganti dengan link resmi
  },
]);
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
