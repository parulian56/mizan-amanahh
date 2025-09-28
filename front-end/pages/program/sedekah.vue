<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-primary text-white p-4 flex items-center gap-2">
      <router-link to="/program/program" class="mr-3">
        <i class="fas fa-arrow-left text-xl"></i>
      </router-link>
      <h1 class="font-bold">Program Sedekah</h1>
      <div class="flex-1"></div>
      <!-- Search -->
      <div class="relative w-2/3 md:w-1/3">
        <input
          v-model="search"
          type="text"
          placeholder="Cari Program Sedekah"
          class="w-full rounded-md px-3 py-1 text-gray-800"
        />
        <span
          class="material-icons absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
        >
          search
        </span>
      </div>
    </header>

    <!-- Breadcrumb -->
    <nav class="bg-primary px-4 py-2 text-sm text-white">
      <ul class="flex items-center space-x-2">
        <li><a href="/" class="hover:underline">Home</a></li>
        <li>/</li>
        <li><a href="/program/program" class="hover:underline">program</a></li>
        <li>/</li>
        <li class="text-gray-200">Sedekah</li>
      </ul>
    </nav>

    <!-- Tabs / Filter -->
    <div class="bg-white px-4 py-3 flex gap-3 overflow-x-auto border-b">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        :class="[ 
          'px-4 py-1 rounded-full text-sm whitespace-nowrap',
          activeCategory === cat
            ? 'bg-primary text-white font-medium'
            : 'bg-secondary text-white hover:bg-secondary-dark'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- List Programs -->
    <main class="p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="program in filteredPrograms"
        :key="program.id"
        :to="`/program/${program.id}`"
        class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition"
      >
        <!-- Gambar -->
        <img
          :src="program.image || 'https://via.placeholder.com/400x200?text=No+Image'"
          :alt="program.title"
          class="w-full h-48 object-cover"
        />

        <!-- Konten -->
        <div class="p-4 flex flex-col flex-1">
          <h2 class="font-bold text-primary mb-2">
            {{ program.title }}
          </h2>

          <!-- Progress bar -->
          <div class="w-full bg-gray-200 h-2 rounded-full mb-2">
            <div
              class="bg-primary h-2 rounded-full"
              :style="{ width: program.progress + '%' }"
            ></div>
          </div>

          <!-- Info Donasi -->
          <div class="flex justify-between text-sm text-gray-600 mb-3">
            <div>
              Terkumpul<br />
              <span class="font-semibold">
                Rp. {{ formatNumber(program.collected_donation) }}
              </span>
              <span class="text-xs">
                dari Rp. {{ formatNumber(program.donation_target) }}
              </span>
            </div>
            <div class="text-right">
              Sisa Hari<br />
              <span class="font-semibold">{{ program.remaining_days }}</span>
            </div>
          </div>

          <!-- Tanggal & Kategori -->
          <div class="flex justify-between text-xs text-gray-500 mb-3">
            <span>{{ program.start_date }}</span>
            <span class="text-primary font-medium">{{ program.category_program }}</span>
          </div>

          <!-- Tombol -->
          <div class="mt-auto">
            <button
              @click.stop="donasi(program.id)"
              class="bg-primary text-white py-2 rounded-lg px-4 block text-center w-full"
            >
              DONASI
            </button>
          </div>
        </div>
      </NuxtLink>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

// ambil data dari backend
const { data: programs } = await useFetch('http://localhost:3001/programs')

// state filter & search
const search = ref("")
const activeCategory = ref("Sedekah") // langsung aktif ke Sedekah
const categories = ["Semua", "Zakat", "Wakaf", "Sosial", "Sedekah"]

// computed untuk filter data
const filteredPrograms = computed(() => {
  if (!programs.value) return []

  return programs.value.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.value.toLowerCase())
    const matchCategory = activeCategory.value === "Semua" || p.category_program === activeCategory.value
    return matchSearch && matchCategory
  }).map(p => ({
    ...p,
    progress: Math.min(100, Math.round((p.collected_donation / p.donation_target) * 100))
  }))
})

// format number (rupiah sederhana)
const formatNumber = (num) => {
  return new Intl.NumberFormat("id-ID").format(num || 0)
}
</script>
