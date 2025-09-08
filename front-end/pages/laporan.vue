<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="text-white bg-orange-500 shadow-lg">
      <div class="container px-4 mx-auto">
        <!-- Navigation Bar -->
        <nav class="flex items-center justify-between py-4">
          <div class="flex items-center space-x-4">
            <button
              @click="$router.go(-1)"
              class="text-white transition-colors hover:text-gray-200"
            >
              <i class="text-xl fas fa-arrow-left"></i>
            </button>
            <h1 class="text-xl font-bold">Laporan Audit</h1>
          </div>
        </nav>

        <!-- Breadcrumb -->
        <div class="pb-4">
          <nav class="flex items-center space-x-2 text-sm">
            <NuxtLink
              to="/"
              class="text-white transition-colors hover:text-gray-200"
            >
              Home
            </NuxtLink>
            <i class="text-xs fas fa-chevron-right"></i>
            <span class="text-gray-200">laporan-audit</span>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container px-4 py-8 mx-auto">
      <!-- Page Title -->
      <div class="mb-8 text-center">
        <h2 class="mb-2 text-3xl font-bold text-gray-800">Laporan Audit</h2>
        <div class="w-24 h-1 mx-auto bg-orange-500"></div>
      </div>

      <!-- Content Section -->
      <div class="p-6 bg-white rounded-lg shadow-md md:p-8">
        <h3 class="mb-6 text-xl font-semibold text-gray-700">
          Laporan Audit dan Keuangan Mizan Amanah
        </h3>

        <p class="mb-8 leading-relaxed text-gray-600">
          Alhamdulillah setiap tahunnya Mizan Amanah selalu di audit oleh Kantor
          Akuntan Publik (KAP) dengan hasil predikat Wajar Tanpa Pengecualian
          (WTP) anda bisa download dan membaca laporan hasil audit kami di bawah
          ini :
        </p>

        <!-- Audit Reports List -->
        <div class="space-y-4">
          <div
            v-for="report in auditReports"
            :key="report.year"
            class="flex flex-col items-start justify-between p-4 transition-colors border border-gray-200 rounded-lg sm:flex-row sm:items-center hover:bg-gray-50"
          >
            <div class="flex-1 mb-3 sm:mb-0">
              <h4 class="font-medium text-gray-800">
                {{ report.number }}. Laporan Audit Tahun {{ report.year }}
              </h4>
            </div>
            <div class="flex space-x-3">
              <NuxtLink
                :to="report.viewLink"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
                target="_blank"
              >
                <i class="mr-2 fas fa-eye"></i>
                Lihat Laporan
              </NuxtLink>
              <NuxtLink
                :to="report.downloadLink"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-colors bg-green-500 rounded-md hover:bg-green-600"
                target="_blank"
              >
                <i class="mr-2 fas fa-download"></i>
                Download
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// Meta tags untuk SEO
useHead({
  title: "Laporan Audit - Mizan Amanah",
  meta: [
    {
      name: "description",
      content:
        "Laporan Audit dan Keuangan Mizan Amanah yang telah diaudit oleh Kantor Akuntan Publik (KAP) dengan predikat Wajar Tanpa Pengecualian (WTP)",
    },
    {
      name: "keywords",
      content: "laporan audit, mizan amanah, keuangan, KAP, audit",
    },
  ],
});

// Reactive data
const currentYear = new Date().getFullYear();

const auditReports = ref([
  {
    number: 1,
    year: "2011",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-keuangan-mizan-amanah-2011/23766862",
    downloadLink: "/audit/2011/download",
  },
  {
    number: 2,
    year: "2012",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-keuangan-mizan-amanah-2012/24644977",
    downloadLink: "/audit/2012/download",
  },
  {
    number: 3,
    year: "2013",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2013/227351424",
    downloadLink: "/audit/2013/download",
  },
  {
    number: 4,
    year: "2014",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2014/227347854",
    downloadLink: "/audit/2014/download",
  },
  {
    number: 5,
    year: "2015",
    viewLink:
      "https://www.slideshare.net/mizanamanah/laporan-audit-kap-mizan-amanah-tahun-2015",
    downloadLink: "/audit/2015/download",
  },
  {
    number: 6,
    year: "2016",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2016/227347458",
    downloadLink: "/audit/2016/download",
  },
  {
    number: 7,
    year: "2017",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2017/227346231",
    downloadLink: "/audit/2017/download",
  },
  {
    number: 8,
    year: "2018",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2018/227346875",
    downloadLink: "/audit/2018/download",
  },
  {
    number: 9,
    year: "2019",
    viewLink:
      "https://www.slideshare.net/mizanamanah/laporan-audit-mizan-amanah-tahun-2019-240416449",
    downloadLink: "/audit/2019/download",
  },
  {
    number: 10,
    year: "2020",
    viewLink:
      "https://www.slideshare.net/slideshow/laporan-audit-yayasan-mizan-amanah-tahun-2020pdf/251505790",
    downloadLink: "/audit/2020/download",
  },
  {
    number: 11,
    year: "2021",
    viewLink:
      "https://www.slideshare.net/slideshow/audit-keuangan-mizan-amanah-tahun-2021/255085974",
    downloadLink: "/audit/2021/download",
  },
]);

// Methods
const handleDownload = (year) => {
  // Logic untuk download file audit
  console.log(`Downloading audit report for year ${year}`);
};

const handleView = (year) => {
  // Logic untuk melihat file audit
  console.log(`Viewing audit report for year ${year}`);
};
</script>

<style scoped>
/* Custom styles jika diperlukan */
.container {
  max-width: 1200px;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-3xl {
    font-size: 1.875rem;
  }
}
</style>
