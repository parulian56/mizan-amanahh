<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-primary text-white p-4 flex items-center gap-2">
      <router-link to="/" class="mr-3">
        <i class="fas fa-arrow-left text-xl"></i>
      </router-link>
      <h1 class="font-bold">Berita</h1>
      <div class="flex-1"></div>

      <!-- Search -->
      <div class="relative w-2/3 md:w-1/3">
        <input
          v-model="search"
          type="text"
          placeholder="Cari Berita"
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
        <li class="text-gray-200">Berita</li>
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

    <!-- List Berita -->
    <main class="p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="item in filteredBerita"
        :key="item.id"
        :to="`/berita/${item.id}`"
        class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition"
      >
        <!-- Gambar -->
        <img
          :src="item.image || 'https://via.placeholder.com/400x200?text=No+Image'"
          :alt="item.title"
          class="w-full h-48 object-cover"
        />

        <!-- Konten -->
        <div class="p-4 flex flex-col flex-1">
          <h2 class="font-bold text-primary mb-2">
            {{ item.title }}
          </h2>
          <p class="text-gray-600 text-sm line-clamp-3 mb-3">
            {{ item.content }}
          </p>

          <!-- Info Tanggal & Kategori -->
          <div class="flex justify-between text-xs text-gray-500 mt-auto">
            <span>{{ formatDate(item.created_at) }}</span>
            <span class="text-primary font-medium">
              {{ item.category || "Umum" }}
            </span>
          </div>
        </div>
      </NuxtLink>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

// Ambil data dari backend
const { data: berita } = await useFetch("http://localhost:3001/berita")

// state filter & search
const search = ref("")
const activeCategory = ref("Semua")
const categories = ["Semua", "Politik", "Ekonomi", "Sosial", "Olahraga", "Teknologi"]

// computed untuk filter data
const filteredBerita = computed(() => {
  if (!berita.value) return []

  return berita.value.filter(b => {
    const matchSearch = b.title.toLowerCase().includes(search.value.toLowerCase())
    const matchCategory = activeCategory.value === "Semua" || b.category === activeCategory.value
    return matchSearch && matchCategory
  })
})

// Format tanggal menjadi bahasa Indonesia
const formatDate = (date) => {
  if (!date) return "-"
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

/* Primary → Orange 500 */
.bg-primary {
  background-color: #FB8505 !important;
}
.text-primary {
  color: #FB8505 !important;
}
.bg-primary-dark {
  background-color: #C96A04 !important;
}

/* Secondary → Teal 500 */
.bg-secondary {
  background-color: #59AAB7 !important;
}
.text-secondary {
  color: #59AAB7 !important;
}
.bg-secondary-dark {
  background-color: #478892 !important;
}
</style>
