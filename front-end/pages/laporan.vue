<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="text-white bg-red-500 shadow-lg">
      <div class="container px-4 py-6 mx-auto">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold">Mizan Amanah</h1>
            <p class="text-sm opacity-80">Lembaga Amil Zakat Nasional</p>
          </div>
          <nav class="hidden md:block">
            <ul class="flex space-x-6">
              <li>
                <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/tentang" class="hover:underline"
                  >Tentang</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/program" class="hover:underline"
                  >Program</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/laporan" class="font-semibold hover:underline"
                  >Laporan</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/kontak" class="hover:underline">Kontak</NuxtLink>
              </li>
            </ul>
          </nav>
          <button class="text-xl md:hidden">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Breadcrumb -->
    <div class="container px-4 py-4 mx-auto">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="flex items-center space-x-2 text-sm">
          <li>
            <NuxtLink to="/" class="text-primary hover:underline"
              >Beranda</NuxtLink
            >
          </li>
          <li><span class="text-gray-400">/</span></li>
          <li class="text-gray-600" aria-current="page">Laporan Audit</li>
        </ol>
      </nav>
    </div>

    <!-- Main Content -->
    <main class="container px-4 py-8 mx-auto">
      <div class="max-w-4xl mx-auto">
        <div class="mb-12 text-center">
          <h1 class="mb-4 text-4xl font-bold text-primary">Laporan Audit</h1>
          <p class="text-lg text-gray-600">
            Alhamdulillah setiap tahunnya Mizan Amanah selalu diaudit oleh
            Kantor Akuntan Publik (KAP) dengan hasil predikat Wajar Tanpa
            Pengecualian (WTP)
          </p>
        </div>

        <!-- Audit Reports List -->
        <div class="overflow-hidden bg-white rounded-lg shadow-md">
          <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 class="text-xl font-semibold text-gray-800">
              Laporan Audit dan Keuangan Mizan Amanah
            </h2>
          </div>

          <ul class="divide-y divide-gray-200">
            <li
              v-for="(report, index) in reports"
              :key="index"
              class="px-6 py-4 transition-colors hover:bg-gray-50"
            >
              <div class="flex items-center justify-between">
                <span class="text-lg font-medium text-gray-700"
                  >Laporan Audit Tahun {{ report.year }}</span
                >
                <div class="flex space-x-4">
                  <NuxtLink
                    :to="`/view-report/${report.year}`"
                    class="flex items-center text-secondary hover:text-primary"
                  >
                    <i class="mr-1 far fa-eye"></i> Lihat Laporan
                  </NuxtLink>
                  <a
                    :href="report.downloadUrl"
                    class="flex items-center text-accent hover:text-primary"
                    download
                  >
                    <i class="mr-1 far fa-arrow-alt-circle-down"></i> Download
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reports: [
        {
          year: 2011,
          viewUrl:
            "https://www.slideshare.net/slideshow/laporan-keuangan-mizan-amanah-2011/23766862",
          downloadUrl:
            "https://www.slideshare.net/slideshow/laporan-keuangan-mizan-amanah-2011/23766862",
        },
        {
          year: 2012,
          viewUrl:
            "https://www.slideshare.net/slideshow/laporan-keuangan-mizan-amanah-2012/24644977",
          downloadUrl:
            "https://www.slideshare.net/slideshow/laporan-keuangan-mizan-amanah-2012/24644977",
        },
        {
          year: 2013,
          viewUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2013/227351424",
          downloadUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2013/227351424",
        },
        {
          year: 2014,
          viewUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2014/227347854",
          downloadUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2014/227347854",
        },
        {
          year: 2015,
          viewUrl:
            "https://www.slideshare.net/mizanamanah/laporan-audit-kap-mizan-amanah-tahun-2015",
          downloadUrl:
            "https://www.slideshare.net/mizanamanah/laporan-audit-kap-mizan-amanah-tahun-2015",
        },
        {
          year: 2016,
          viewUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2016/227347458",
          downloadUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2016/227347458",
        },
        {
          year: 2017,
          viewUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2017/227346231",
          downloadUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2017/227346231",
        },
        {
          year: 2018,
          viewUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2018/227346875",
          downloadUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-kap-mizan-amanah-tahun-2018/227346875",
        },
        {
          year: 2019,
          viewUrl:
            "https://www.slideshare.net/mizanamanah/laporan-audit-mizan-amanah-tahun-2019-240416449",
          downloadUrl:
            "https://www.slideshare.net/mizanamanah/laporan-audit-mizan-amanah-tahun-2019-240416449",
        },
        {
          year: 2020,
          viewUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-yayasan-mizan-amanah-tahun-2020pdf/251505790",
          downloadUrl:
            "https://www.slideshare.net/slideshow/laporan-audit-yayasan-mizan-amanah-tahun-2020pdf/251505790",
        },
        {
          year: 2021,
          viewUrl:
            "https://drive.google.com/file/d/1bLlUi2s8cnjQYQEI-hIMx-0NC78B1kOg/view",
          downloadUrl:
            "https://drive.google.com/file/d/1bLlUi2s8cnjQYQEI-hIMx-0NC78B1kOg/view",
        },
        {
          year: 2022,
          viewUrl:
            "https://drive.google.com/file/d/1gxCQAHPtGuzpBbTBhM6KCc_nthsaHHsV/view",
          downloadUrl:
            "https://drive.google.com/file/d/1gxCQAHPtGuzpBbTBhM6KCc_nthsaHHsV/view",
        },
      ].map(r => ({ ...r, viewUrl: r.downloadUrl })), // pastikan viewUrl sama dengan downloadUrl
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

body {
  font-family: "Inter", sans-serif;
}

.bg-primary {
  background-color: #0e5a97;
}

.text-primary {
  color: #0e5a97;
}

.text-secondary {
  color: #0e7490;
}

.bg-accent {
  background-color: #059669;
}

.text-accent {
  color: #059669;
}
</style>
