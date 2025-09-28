<template>
  <div class="min-h-screen bg-gray-100 font-sans text-gray-800">
    <!-- Header -->
    <header class="bg-primary text-white p-4 flex items-center gap-2 shadow">
      <NuxtLink to="/program/program" class="mr-3">
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
        <li class="text-gray-200"><NuxtLink to="/program/program" class="hover:underline">Program</NuxtLink></li>
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import { useRoute } from "vue-router"

// Routing
const route = useRoute()

// Fetch data dari backend
const { data: programs, pending } = await useFetch("http://localhost:3001/programs")

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
