<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header/Navbar -->
    <div class="bg-orange-500 text-white py-6">
      <div class="container mx-auto px-4">
        <!-- Judul + Tombol Back -->
        <div class="flex items-center gap-2 mb-1">
          <NuxtLink to="/article/article" class="flex items-center gap-1 hover:underline">
            <i class="fas fa-arrow-left text-xl"></i>
            <span class="font-bold">Detail article</span>
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
              <NuxtLink to="/article/article" class="hover:underline">Program</NuxtLink>
            </li>
            <li>/</li>
            <li>
              <span>{{ program?.title || "Detail" }}</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Konten Detail Program -->
    <div class="container mx-auto px-4 py-8">
      <div v-if="program" class="bg-white rounded-xl shadow p-6">
        <!-- Gambar -->
        <img
          :src="program.image"
          alt="Program Image"
          class="w-full h-64 object-cover rounded-lg mb-6"
        />

        <!-- Judul -->
        <h2 class="text-2xl font-bold mb-2">{{ program.title }}</h2>
        <p class="text-gray-600 mb-6">{{ program.content }}</p>

        <!-- Progress Bar -->
        <div class="mb-6">
          <div class="flex justify-between text-sm text-gray-600 mb-1">
            <span>Terkumpul: Rp {{ formatNumber(program.collected_donation) }}</span>
            <span>Target: Rp {{ formatNumber(program.donation_target) }}</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3">
            <div
              class="bg-green-500 h-3 rounded-full"
              :style="{ width: program.progress + '%' }"
            ></div>
          </div>
        </div>

        <!-- Info Lain -->
        <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <span class="font-semibold">Kategori:</span>
            <span>{{ program.category_program }}</span>
          </div>
          <div>
            <span class="font-semibold">Sisa Hari:</span>
            <span>{{ program.remaining_days }}</span>
          </div>
        </div>

        <!-- Tombol Donasi -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

// di Nuxt 3: auto-import composables
const route = useRoute()

const program = ref(null)

const formatNumber = (num) => new Intl.NumberFormat("id-ID").format(num || 0)

onMounted(async () => {
  try {
    const res = await $fetch(`http://localhost:3001/article/${route.params.id}`)
    program.value = {
      ...res,
      image: "https://via.placeholder.com/800x400.png?text=" + res.title,
      progress: Math.min(100, (res.collected_donation / res.donation_target) * 100),
    }
  } catch (err) {
    console.error("Gagal ambil data program:", err)
  }
})
</script>
