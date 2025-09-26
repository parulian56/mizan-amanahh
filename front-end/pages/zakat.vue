<template>
  <div class="min-h-screen bg-gray-100 font-sans text-gray-800">
    <!-- Header -->
    <header class="bg-primary text-white p-4 flex items-center gap-2 shadow">
      <NuxtLink to="/" class="mr-3">
        <i class="fas fa-arrow-left text-xl"></i>
      </NuxtLink>
      <h1 class="font-bold text-lg">Program</h1>
      <div class="flex-1"></div>

      <!-- Search -->
      <div class="relative w-2/3 md:w-1/3">
        <input
          v-model="search"
          type="text"
          placeholder="Cari Program"
          class="w-full rounded-md px-3 py-1 text-gray-800 shadow-inner focus:outline-none"
        />
        <span
          class="material-icons absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-base"
        >
          search
        </span>
      </div>
    </header>

    <!-- Breadcrumb -->
    <nav class="bg-primary px-4 py-2 text-sm text-white">
      <ul class="flex items-center space-x-2">
        <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
        <li>/</li>
        <li class="text-gray-200">Program</li>
      </ul>
    </nav>

    <!-- Tabs -->
    <div class="bg-white px-4 py-3 flex gap-3 overflow-x-auto border-b">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        :class="[ 
          'px-4 py-1 rounded-full text-sm whitespace-nowrap transition',
          activeCategory === cat
            ? 'bg-primary text-white font-semibold shadow-sm'
            : 'bg-secondary text-white hover:bg-secondary-dark'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- List Program -->
    <main class="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Loading -->
      <div v-if="pending" class="col-span-full text-center py-10 text-gray-500">
        <span class="loader"></span>
        <p class="mt-2">Loading program...</p>
      </div>

      <!-- Program Cards -->
      <NuxtLink
        v-else
        v-for="program in filteredPrograms"
        :key="program.id"
        :to="`/program/${program.id}`"
        class="bg-white shadow-md rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition duration-300"
      >
        <img
          src="../../assets/image/zakat.png"
          :alt="program.title"
          class="w-full h-48 object-cover"
        />

        <div class="p-4 flex flex-col flex-1">
          <h2 class="font-bold text-primary text-base mb-2 line-clamp-2">
            {{ program.title }}
          </h2>

          <!-- Progress -->
          <div class="w-full bg-gray-200 h-2 rounded-full mb-2">
            <div
              class="bg-primary h-2 rounded-full transition-all duration-500 ease-in-out"
              :style="{ width: program.progress + '%' }"
            ></div>
          </div>

          <!-- Info Donasi -->
          <div class="flex justify-between text-sm text-gray-600 mb-3">
            <div>
              <p class="text-xs">Terkumpul</p>
              <p class="font-semibold">
                Rp {{ formatNumber(program.collected_donation) }}
              </p>
              <p class="text-xs">
                dari Rp {{ formatNumber(program.donation_target) }}
              </p>
            </div>
            <div class="text-right">
              <p class="text-xs">Sisa Hari</p>
              <p class="font-semibold">{{ program.remaining_days }}</p>
            </div>
          </div>

          <!-- Metadata -->
          <div class="flex justify-between text-xs text-gray-500 mb-3">
            <span>{{ program.start_date }}</span>
            <span class="text-primary font-medium">{{ program.category_program }}</span>
          </div>

          <!-- Tombol -->
          <div class="mt-auto">
            <span
              class="bg-primary hover:bg-primary-dark text-white py-2 rounded-md px-4 block text-center text-sm transition"
            >
              DONASI
            </span>
          </div>
        </div>
      </NuxtLink>
    </main>

    <!-- Tambahan Tombol Tunaikan & Kalkulator Zakat -->
    <div class="px-4 py-6 text-center">
      <h2 class="text-lg font-semibold mb-2">
        Bayar Zakat sekarang dengan Mizan Amanah
      </h2>
      <p class="text-sm text-gray-600 mb-4">
        Saatnya Bayar Zakat. Bersihkan harta anda dengan zakat di Mizan Amanah. 
        InsyaAllah Mudah, berkah dan amanah.
      </p>
      <div class="flex justify-center gap-4">
        <NuxtLink
          to="/tunaikan-zakat"
          class="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition"
        >
          TUNAIKAN ZAKAT
        </NuxtLink>
        <NuxtLink
          to="/kalkulator-zakat"
          class="bg-secondary hover:bg-secondary-dark text-white font-medium py-2 px-6 rounded-md transition"
        >
          KALKULATOR ZAKAT
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import { useRoute } from "vue-router"

// Routing
const route = useRoute()

// Fetch data dari backend
const { data: programs, pending } = await useFetch("http://localhost:3001/programs")

// ===== Dummy Data dengan gambar dari /assets/images =====
if (!programs.value || programs.value.length === 0) {
  programs.value = [
    {
      id: 1,
      title: "Tunaikan Zakat: Dekatkan Diri Menuju Surga Bersama Rasulullah",
      image: "assets/image/zakat.png",
      collected_donation: 454295053,
      donation_target: 400000000,
      remaining_days: "310",
      start_date: "31 Juli 2025",
      category_program: "Zakat"
    },
    {
      id: 2,
      title: "Raih Pahala Berlipat: 2.5% Zakat Penghasilan Untuk Da’i Pelosok",
      image: "/image/zakat_penghasilan.png",
      collected_donation: 1405557,
      donation_target: 50000000,
      remaining_days: "∞",
      start_date: "Tanpa Batas Waktu",
      category_program: "Zakat"
    },
    {
      id: 3,
      title: "Gajian Tiba, Tunaikan Zakat Penghasilanmu",
      image: "/image/zakat_penghasilan.png",
      collected_donation: 1060980455,
      donation_target: 1000000000,
      remaining_days: "∞",
      start_date: "Tanpa Batas Waktu",
      category_program: "Zakat"
    },
    {
      id: 4,
      title: "Zakat Pertanian",
      image: "/images/zakat_pertanian.png",
      collected_donation: 37000,
      donation_target: 1000000000,
      remaining_days: "∞",
      start_date: "Tanpa Batas Waktu",
      category_program: "Zakat"
    },
    {
      id: 5,
      title: "Zakat Barang Temuan",
      image: "/images/zakat_barang.png",
      collected_donation: 561248,
      donation_target: 100000000,
      remaining_days: "∞",
      start_date: "Tanpa Batas Waktu",
      category_program: "Zakat"
    },
    {
      id: 6,
      title: "Wakaf Pembangunan Masjid",
      image: "/images/wakaf_masjid.png",
      collected_donation: 250000000,
      donation_target: 1000000000,
      remaining_days: "120",
      start_date: "01 Jan 2025",
      category_program: "Wakaf"
    },
    {
      id: 7,
      title: "Sosial: Bantu Korban Banjir",
      image: "/images/sosial_banjir.png",
      collected_donation: 75000000,
      donation_target: 500000000,
      remaining_days: "45",
      start_date: "15 Feb 2025",
      category_program: "Sosial"
    }
  ]
}
// ===== End Dummy =====

// State filter
const search = ref("")
const activeCategory = ref("Zakat")
const categories = ["Semua", "Zakat", "Wakaf", "Sosial"]

onMounted(() => {
  if (route.query.category) {
    activeCategory.value = route.query.category
  }
})

// Filter + Progress
const filteredPrograms = computed(() => {
  if (!programs.value) return []

  return programs.value
    .filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.value.toLowerCase())
      const matchCategory =
        activeCategory.value === "Semua" || p.category_program === activeCategory.value
      return matchSearch && matchCategory
    })
    .map((p) => ({
      ...p,
      progress: Math.min(100, Math.round((p.collected_donation / p.donation_target) * 100)),
    }))
})

// Format angka
const formatNumber = (num) => {
  return new Intl.NumberFormat("id-ID").format(num || 0)
}
</script>


<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.bg-primary {
  background-color: #FB8505 !important;
}
.text-primary {
  color: #FB8505 !important;
}
.bg-primary-dark {
  background-color: #C96A04 !important;
}

.bg-secondary {
  background-color: #59AAB7 !important;
}
.text-secondary {
  color: #59AAB7 !important;
}
.bg-secondary-dark {
  background-color: #478892 !important;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #FB8505;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
  display: inline-block;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
