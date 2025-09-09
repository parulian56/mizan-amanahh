<template>
  <div class="font-sans text-gray-800">
    <!-- Header -->
    <header class="fixed top-0 w-full bg-white shadow z-50">
      <nav class="container mx-auto flex items-center justify-between py-4 px-6">
        <!-- Logo -->
        <div class="flex items-center space-x-2 font-bold text-red-600">
          <span class="text-xl">Mizan Amanah</span>
        </div>

        <!-- Breadcrumb -->
        <div class="text-sm text-gray-500">
          <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
          <span class="mx-1">/</span>
          <span class="text-gray-700 font-medium">Update & Berita</span>
        </div>
      </nav>
    </header>

    <!-- Main -->
    <main class="container mx-auto px-6 pt-32 pb-16">
      <!-- Section: Update & Berita -->
      <section>
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Update & Berita</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Artikel 1 -->
          <div class="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
            <img
              :src="mizan1"
              alt="mizan1"
              class="w-full h-48 object-cover"
              @error="event => handleImageError(event, fallback)"
            />
            <div class="p-4">
              <h3 class="font-semibold text-lg">Doa Zakat Fitrah</h3>
              <p class="text-gray-600 text-sm mt-2">
                Panduan doa zakat fitrah sesuai sunnah.
              </p>
              <NuxtLink
                to="/berita/1"
                class="text-red-600 font-semibold hover:underline text-sm mt-3 inline-block"
              >
                Baca Selengkapnya
              </NuxtLink>
            </div>
          </div>

          <!-- Artikel 2 -->
          <div class="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
            <img
              :src="mizan2"
              alt="mizan2"
              class="w-full h-48 object-cover"
              @error="event => handleImageError(event, fallback)"
            />
            <div class="p-4">
              <h3 class="font-semibold text-lg">Manfaat Sedekah</h3>
              <p class="text-gray-600 text-sm mt-2">
                Sedekah membuka pintu rezeki dan keberkahan hidup.
              </p>
              <NuxtLink
                to="/berita/2"
                class="text-red-600 font-semibold hover:underline text-sm mt-3 inline-block"
              >
                Baca Selengkapnya
              </NuxtLink>
            </div>
          </div>

          <!-- Artikel 3 -->
          <div class="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
            <img
              :src="mizan3"
              alt="mizan3"
              class="w-full h-48 object-cover"
              @error="event => handleImageError(event, fallback)"
            />
            <div class="p-4">
              <h3 class="font-semibold text-lg">Kegiatan Mizan Amanah</h3>
              <p class="text-gray-600 text-sm mt-2">
                Laporan kegiatan terbaru untuk masyarakat.
              </p>
              <NuxtLink
                to="/berita/3"
                class="text-red-600 font-semibold hover:underline text-sm mt-3 inline-block"
              >
                Baca Selengkapnya
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Lihat Artikel Lainnya -->
        <div class="mt-6 text-center">
          <NuxtLink
            to="/berita"
            class="inline-block bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition"
          >
            Lihat Artikel Lainnya
          </NuxtLink>
        </div>
      </section>

      <!-- Section: Kata Mereka -->
      <section class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Kata Mereka</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Testimoni 1 -->
          <div class="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
            <img
              :src="mizan4"
              alt="mizan4"
              class="w-full h-48 object-cover"
              @error="event => handleImageError(event, fallback)"
            />
            <div class="p-4 text-center">
              <p class="italic text-gray-600">
                "Donasi melalui Mizan Amanah sangat mudah dan terpercaya."
              </p>
              <h4 class="mt-3 font-semibold text-gray-800">Siti</h4>
            </div>
          </div>

          <!-- Testimoni 2 -->
          <div class="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
            <img
              :src="mizan5"
              alt="mizan5"
              class="w-full h-48 object-cover"
              @error="event => handleImageError(event, fallback)"
            />
            <div class="p-4 text-center">
              <p class="italic text-gray-600">
                "Program-programnya bermanfaat dan tepat sasaran."
              </p>
              <h4 class="mt-3 font-semibold text-gray-800">Ahmad</h4>
            </div>
          </div>

          <!-- Testimoni 3 -->
          <div class="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
            <img
              :src="mizan6"
              alt="mizan6"
              class="w-full h-48 object-cover"
              @error="event => handleImageError(event, fallback)"
            />
            <div class="p-4 text-center">
              <p class="italic text-gray-600">
                "Saya senang bisa ikut berkontribusi membantu saudara-saudara kita."
              </p>
              <h4 class="mt-3 font-semibold text-gray-800">Budi</h4>
            </div>
          </div>
        </div>

        <!-- Lihat Testimoni Lainnya -->
        <div class="mt-6 text-center">
          <NuxtLink
            to="/testimoni"
            class="inline-block bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition"
          >
            Lihat Testimoni Lainnya
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// Import gambar dari assets
import mizan1 from '~/assets/image/mizan1.png'
import mizan2 from '~/assets/image/mizan2.png'
import mizan3 from '~/assets/image/mizan3.png'
import mizan4 from '~/assets/image/mizan4.png'
import mizan5 from '~/assets/image/mizan5.png'
import mizan6 from '~/assets/image/mizan6.png'

// fallback image
const fallback = '/image/fallback.png'

// handle error image
function handleImageError(event, fallbackUrl) {
  event.target.src = fallbackUrl
}
</script>
