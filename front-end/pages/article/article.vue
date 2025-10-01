<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-primary text-white p-4 flex items-center gap-2">
      <NuxtLink to="/" class="mr-3">
        <i class="fas fa-arrow-left text-xl"></i>
      </NuxtLink>
      <h1 class="font-bold">Article</h1>
      <div class="flex-1"></div>
      <!-- Search -->
      <div class="relative w-2/3 md:w-1/3">
        <input
          v-model="search"
          type="text"
          placeholder="Cari article"
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
        <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
        <li>/</li>
        <li class="text-gray-200">Article</li>
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

    <!-- List Articles -->
    <main class="p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="article in filteredArticles"
        :key="article.id"
        :to="`/article/${article.id}`"
        class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition"
      >
        <!-- Gambar -->
        <img
          :src="article.image || 'https://via.placeholder.com/400x200?text=No+Image'"
          :alt="article.title"
          class="w-full h-48 object-cover"
        />

        <!-- Konten -->
        <div class="p-4 flex flex-col flex-1">
          <h2 class="font-bold text-primary mb-2">
            {{ article.title }}
          </h2>

          <p class="text-gray-600 text-sm line-clamp-3 mb-3">
            {{ article.content }}
          </p>

          <!-- Kategori -->
          <div class="mt-auto text-xs text-primary font-medium">
            {{ article.category_article }}
          </div>
        </div>
      </NuxtLink>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

// ambil data dari backend
const { data: articles } = await useFetch('http://localhost:3001/articles')

// state filter & search
const search = ref("")
const activeCategory = ref("Semua")
const categories = ["Semua", "Zakat", "Wakaf", "Sosial", "Sedekah"]

// computed untuk filter data
const filteredArticles = computed(() => {
  if (!articles.value) return []

  return articles.value.filter(a => {
    const matchSearch = a.title.toLowerCase().includes(search.value.toLowerCase())
    const matchCategory =
      activeCategory.value === "Semua" ||
      a.category_article === activeCategory.value
    return matchSearch && matchCategory
  })
})
</script>
