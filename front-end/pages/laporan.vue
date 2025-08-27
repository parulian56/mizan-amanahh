<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="text-white bg-gradient-to-r from-primary to-secondary">
      <div class="container px-4 py-8 mx-auto text-center">
        <h1 class="text-4xl font-bold">Mizan Amanah</h1>
        <p class="text-lg opacity-90">Lembaga Amil Zakat Nasional</p>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="bg-white shadow-md">
      <div class="container flex justify-center px-4 py-4 mx-auto space-x-8">
        <NuxtLink to="/" class="text-gray-600 hover:text-primary">Beranda</NuxtLink>
        <NuxtLink to="/tentang" class="text-gray-600 hover:text-primary">Tentang</NuxtLink>
        <NuxtLink to="/program" class="text-gray-600 hover:text-primary">Program</NuxtLink>
        <NuxtLink to="/laporan" class="font-semibold border-b-2 text-primary border-primary">Laporan</NuxtLink>
        <NuxtLink to="/kontak" class="text-gray-600 hover:text-primary">Kontak</NuxtLink>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container max-w-4xl px-4 py-12 mx-auto">
      <div class="mb-12 text-center">
        <h1 class="mb-4 text-4xl font-bold text-primary">Laporan Audit</h1>
        <div class="w-24 h-2 mx-auto mb-6 bg-secondary"></div>
      </div>

      <div class="p-8 mb-10 bg-white rounded-lg shadow-md">
        <h2 class="mb-4 text-2xl font-semibold text-center text-primary">Laporan Audit dan Keuangan Mizan Amanah</h2>
        <p class="text-lg text-center text-gray-700">
          Alhamdulillah setiap tahunnya Mizan Amanah selalu diaudit oleh Kantor Akuntan Publik (KAP)
          dengan hasil predikat <span class="font-semibold text-accent">Wajar Tanpa Pengecualian (WTP)</span>.
          Anda bisa download laporan hasil audit di bawah ini:
        </p>
      </div>

      <div class="mb-12 overflow-hidden bg-white rounded-lg shadow-md">
        <div class="px-6 py-4 text-white bg-primary">
          <h3 class="text-xl font-semibold">Daftar Laporan Audit</h3>
        </div>
        <div class="divide-y divide-gray-100">
          <div v-for="report in reports" :key="report.year" class="p-6 transition-all bg-white border-l-4 border-primary hover:border-accent">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span class="text-lg font-medium text-gray-800">Laporan Audit Tahun {{ report.year }}</span>
              <div class="flex mt-2 space-x-4 sm:mt-0">
                <a :href="report.viewUrl" class="font-medium text-secondary hover:text-primary">
                  <i class="mr-1 far fa-eye"></i> Lihat
                </a>
                <a :href="report.downloadUrl" class="font-medium text-accent hover:text-primary">
                  <i class="mr-1 far fa-arrow-alt-circle-down"></i> Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const reports = [
  { year: 2011, viewUrl: '#', downloadUrl: '#' },
  { year: 2012, viewUrl: '#', downloadUrl: '#' },
  { year: 2013, viewUrl: '#', downloadUrl: '#' },
  { year: 2014, viewUrl: '#', downloadUrl: '#' },
  { year: 2015, viewUrl: '#', downloadUrl: '#' },
  { year: 2016, viewUrl: '#', downloadUrl: '#' },
  { year: 2017, viewUrl: '#', downloadUrl: '#' },
  { year: 2018, viewUrl: '#', downloadUrl: '#' },
  { year: 2019, viewUrl: '#', downloadUrl: '#' },
  { year: 2020, viewUrl: '#', downloadUrl: '#' },
  { year: 2021, viewUrl: '#', downloadUrl: '#' },
]
</script>

<script>
export default {}
</script>

<style scoped>
.text-primary { color: #0e5a97; }
.bg-primary { background-color: #0e5a97; }
.bg-secondary { background-color: #0e7490; }
.text-accent { color: #059669; }
.border-accent { border-color: #059669; }
</style>
