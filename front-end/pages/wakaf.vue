<template>
  <div>
    <!-- Header -->
    <div class="flex items-center p-4 text-white bg-red-500">
      <!-- Icon back -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <h1 class="text-lg italic font-semibold">Wakaf</h1>
    </div>

    <!-- Breadcrumb -->
    <div class="px-6 py-3 text-white bg-red-500">
      <p>
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <span class="mx-2">›</span>
        <span>Wakaf</span>
      </p>
    </div>

    <!-- Image -->
    <div class="p-4">
      <!-- Gunakan path dari folder public -->
      <img src="/image/yp.png" alt="yp.png" class="w-full rounded-lg shadow-md" />
    </div>

    <!-- Title -->
    <div class="px-4">
      <h2 class="text-xl font-bold leading-snug text-red-600">
        Wakaf: Arti, Makna, Hukum, dan Keutamaan yang Harus Diketahui
      </h2>
    </div>

    <!-- Content -->
    <div class="p-4">
      <h3 class="mb-2 text-2xl font-bold text-gray-600">Pengertian Wakaf</h3>
      <p class="leading-relaxed text-gray-700">
        Wakaf dalam konteks Islam adalah penyerahan hak milik suatu harta untuk
        dimanfaatkan bagi kepentingan umat sesuai syariat. Wakaf tidak boleh
        diperjualbelikan, diwariskan, atau dihibahkan, melainkan harus digunakan
        sesuai tujuan awalnya.
      </p>
    </div>
  </div>
</template>

<script setup>
// Tidak perlu script tambahan, hanya UI statis
</script>

<style scoped>
/* Tambahan kalau mau custom */
</style>
