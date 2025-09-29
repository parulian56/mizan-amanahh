<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header/Navbar -->
    <div class="bg-orange-500 text-white py-6">
      <div class="container mx-auto px-4">
        <!-- Judul + Tombol Back -->
        <div class="flex items-center gap-2 mb-1">
          <NuxtLink to="/berita" class="flex items-center gap-1 hover:underline">
            <i class="fas fa-arrow-left text-xl"></i>
            <span class="font-bold">Detail Berita</span>
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
              <NuxtLink to="/berita" class="hover:underline">Berita</NuxtLink>
            </li>
            <li>/</li>
            <li>
              <span>{{ berita?.title || "Detail" }}</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Konten Detail Berita -->
    <div class="container mx-auto px-4 py-8">
      <div v-if="berita" class="bg-white rounded-xl shadow p-6">
        <!-- Gambar -->
        <img
          :src="berita.image"
          alt="Berita Image"
          class="w-full h-64 object-cover rounded-lg mb-6"
        />

        <!-- Judul -->
        <h2 class="text-2xl font-bold mb-2">{{ berita.title }}</h2>
        <p class="text-gray-600 mb-6">{{ berita.content }}</p>

        <!-- Info Lain -->
        <div class="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
          <div>
            <span class="font-semibold">Kategori:</span>
            <span>{{ berita.category || '-' }}</span>
          </div>
          <div>
            <span class="font-semibold">Tanggal:</span>
            <span>{{ formatDate(berita.created_at) }}</span>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else class="text-center text-gray-500 py-12">
        Loading...
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const route = useRoute()

const berita = ref(null)

const formatDate = (date) => {
  if (!date) return "-"
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

onMounted(async () => {
  try {
    const res = await $fetch(`http://localhost:3001/berita/${route.params.id}`)
    berita.value = {
      ...res,
      image: res.image || "https://via.placeholder.com/800x400.png?text=" + res.title,
    }
  } catch (err) {
    console.error("Gagal ambil data berita:", err)
  }
})
</script>
