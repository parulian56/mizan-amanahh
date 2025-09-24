<template>
  <div class="font-sans text-[#111111]">
    <!-- ================= UPDATE & BERITA ================= -->
    <section class="container mx-auto px-6 py-12">
      <h2 class="text-2xl font-bold text-center mb-8">Update & Berita</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in berita"
          :key="i"
          class="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-48 object-cover"
            loading="lazy"
            @error="event => handleImageError(event, fallback)"
          />
          <div class="p-4">
            <span
              class="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded mb-3"
            >
              Artikel
            </span>
            <h3 class="font-semibold text-lg mb-1">{{ item.title }}</h3>
            <p class="text-xs text-gray-500 mb-3">{{ item.date }}</p>
            <p class="text-sm text-gray-600 mb-4">
              {{ item.desc }}
            </p>
            <NuxtLink
              :to="item.link"
              class="text-red-600 font-semibold hover:underline text-sm"
            >
              Read More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= KATA MEREKA ================= -->
    <section class="container mx-auto px-6 py-12">
      <h2 class="text-2xl font-bold text-center mb-8">Kata Mereka</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in kataMereka"
          :key="i"
          class="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full h-48 object-cover"
            loading="lazy"
            @error="event => handleImageError(event, fallback)"
          />
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-1">{{ item.name }}</h3>
            <p class="text-xs text-gray-500 mb-3">{{ item.role }}</p>
            <p class="text-sm text-gray-600 mb-4">
              {{ item.text }}
            </p>
            <NuxtLink
              :to="item.link"
              class="text-red-600 font-semibold hover:underline text-sm"
            >
              Read More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// ====== IMPORT GAMBAR DARI assets ======
import mizan1 from '~/assets/image/mizan1.png'
import mizan2 from '~/assets/image/mizan2.png'
import mizan3 from '~/assets/image/mizan3.png'
import mizan4 from '~/assets/image/mizan4.png'
import mizan5 from '~/assets/image/mizan5.png'
import mizan6 from '~/assets/image/mizan6.png'

// fallback image (taruh di /public/image/fallback.png)
const fallback = '/image/fallback.png'

// Data artikel
const berita = [
  {
    title: 'Doa Zakat Fitrah Beserta Arti, Lafal dan Hukumnya',
    date: '2025-09-10 15:05:03',
    desc: 'Zakat fitrah merupakan ibadah yang wajib ditunaikan oleh umat Islam menjelang Idul Fitri.',
    link: '/mizan/1',
    image: mizan1,
  },
  {
    title: 'Pengertian Infaq dalam Islam: Keutamaan dan Cara Mengamalkannya',
    date: '2025-09-10 15:05:04',
    desc: 'Infaq adalah ibadah dalam bentuk pengeluaran harta di jalan Allah untuk membantu sesama.',
    link: '/mizan/2',
    image: mizan2,
  },
  {
    title: 'Jariyah Artinya Amal yang Tak Terputus: Inilah Contoh dan Keutamaannya',
    date: '2025-09-10 15:05:05',
    desc: 'Amal jariyah adalah amalan yang pahalanya terus mengalir meskipun pelakunya telah meninggal dunia.',
    link: '/mizan/3',
    image: mizan3,
  },
]

// Data testimoni
const kataMereka = [
  {
    name: 'Aini, A.Md Keb.',
    role: 'Penerima Program Pendidikan',
    text: 'Alhamdulillah Mizan Amanah sangat membantu dalam kelanjutan pendidikan saya...',
    link: 'front-end/assets/image/mizan4.png',
    image: mizan4,
  },
  {
    name: 'Wicno Kusumo',
    role: 'Penerima Program Ekonomi',
    text: 'Mizan Amanah membantu saya mendapatkan modal usaha hingga bisa berkembang...',
    link: 'front-end/assets/image/mizan5.png',
    image: mizan5,
  },
  {
    name: 'Ust. Budi Ashari, Lc',
    role: 'Pembina Yayasan',
    text: 'Mizan Amanah hadir dengan semangat membantu sesama, terutama dalam bidang pendidikan dan ekonomi umat...',
    link: 'front-end/assets/image/mizan6.png',
    image: mizan6,
  },
]

// Handle error image
function handleImageError(event, fallbackUrl) {
  event.target.src = fallbackUrl
}
</script>
