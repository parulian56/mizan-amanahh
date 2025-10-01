<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header/Navbar -->
    <div class="bg-orange-500 text-white py-6">
      <div class="container mx-auto px-4">
        <!-- Judul + Tombol Back -->
        <div class="flex items-center gap-2 mb-1">
          <NuxtLink to="/articles" class="flex items-center gap-1 hover:underline">
            <i class="fas fa-arrow-left text-xl"></i>
            <span class="font-bold">Kembali</span>
          </NuxtLink>
        </div>

        <!-- Breadcrumb -->
        <nav class="text-sm">
          <ol class="flex items-center space-x-1">
            <li>
              <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
            </li>
            <li>/</li>
            <li>
              <NuxtLink to="/articles" class="hover:underline">Articles</NuxtLink>
            </li>
            <li>/</li>
            <li>
              <span>{{ article?.title || "Detail" }}</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Konten Detail Article -->
    <div class="container mx-auto px-4 py-8">
      <div v-if="article" class="bg-white rounded-xl shadow p-6">
        <!-- Gambar -->
        <img
          :src="article.image"
          alt="Article Image"
          class="w-full h-64 object-cover rounded-lg mb-6"
        />

        <!-- Judul -->
        <h2 class="text-2xl font-bold mb-2">{{ article.title }}</h2>
        <p class="text-gray-600 mb-6">{{ article.content }}</p>

        <!-- Info Lain -->
        <div class="text-sm text-gray-700">
          <span class="font-semibold">Kategori:</span>
          <span>{{ article.category_article }}</span>
        </div>
      </div>

      <div v-else class="text-center text-gray-500">
        Loading...
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

// Nuxt composable
const route = useRoute()

const article = ref(null)

onMounted(async () => {
  try {
    const res = await $fetch(`http://localhost:3001/articles/${route.params.id}`)
    article.value = {
      ...res,
      image: "https://via.placeholder.com/800x400.png?text=" + res.title,
    }
  } catch (err) {
    console.error("Gagal ambil data article:", err)
  }
})
</script>
