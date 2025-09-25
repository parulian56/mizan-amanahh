<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <!-- Header Full Width -->
    <header class="bg-orange-600 text-white shadow-md w-full">
      <div class="max-w-7xl mx-auto px-10 py-6">
        <!-- Judul -->
        <h1 class="text-2xl font-bold mb-1">Artikel Qurban</h1>
        <!-- Breadcrumb -->
        <p class="text-sm">
          <a href="/" class="underline hover:text-gray-200">Home</a> / Artikel
        </p>
      </div>
    </header>

    <!-- Konten Artikel -->
    <main class="max-w-5xl mx-auto w-full px-6 py-10">
      <div v-if="artikel">
        <!-- Foto artikel -->
        <img
          :src="artikel.image"
          :alt="artikel.title"
          class="w-full rounded-lg shadow-md mb-6 border-4 border-orange-500"
        />

        <!-- Judul -->
        <h1 class="text-3xl font-bold mb-4 text-orange-700">
          {{ artikel.title }}
        </h1>

        <!-- Isi/Excerpt -->
        <p class="text-gray-700 leading-relaxed text-lg bg-teal-300/20 p-4 rounded-lg">
          {{ artikel.excerpt }}
        </p>
      </div>

      <!-- Jika artikel tidak ditemukan -->
      <div v-else class="text-center py-20">
        <p class="text-gray-500">Artikel tidak ditemukan.</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// Data artikel
const artikels = [
  {
    id: 1,
    title: "Keutamaan Berqurban",
    excerpt:
      "Keutamaan qurban meliputi pahala yang sangat besar di sisi Allah SWT, di mana hewan kurban akan menjadi saksi di Hari Kiamat; sebagai bentuk rasa syukur dan ungkapan ketaatan kepada perintah Allah SWT; menjadi sarana untuk membantu fakir miskin dan mempererat tali persaudaraan melalui pembagian daging kurban; serta menghapus sifat egoisme dan individualisme dengan berbagi kepada sesama.",
    image: "https://source.unsplash.com/600x400/?sheep,qurban",
  },
  {
    id: 2,
    title: "Panduan Praktis Qurban",
    excerpt:
      "pemilihan hewan sesuai syarat usia dan kondisi, persiapan diri bagi shohibul qurban seperti menahan diri dari memotong rambut dan kuku, tata cara penyembelihan termasuk niat dan doa yang tepat, serta manajemen daging yang bersih dan terorganisir, dan waktu pelaksanaan yang harus sesuai dengan syariat Islam, yaitu dari setelah Salat Idul Adha hingga akhir hari Tasyriq.",
    image: "https://source.unsplash.com/600x400/?sheep,qurban",
  },
  {
    id: 3,
    title: "Sejarah Ibadah Qurban",
    excerpt:
      " ibadah menyembelih hewan tertentu pada waktu tertentu sebagai bentuk ketaatan dan rasa syukur kepada Allah SWT, yang juga mengandung nilai sosial dengan berbagi daging kepada sesama, terutama yang membutuhkan. Sejarahnya berawal dari perintah Allah kepada Nabi Ibrahim untuk menyembelih putranya, Nabi Ismail, sebagai ujian kesabaran dan ketakwaan, yang kemudian Allah gantikan dengan seekor domba. Pelaksanaan qurban bertujuan untuk mendekatkan diri kepada Allah, membersihkan harta, meneladani ketaatan Nabi Ibrahim, serta menumbuhkan sikap peduli, empati, dan kepedulian sosial.",
    image: "https://source.unsplash.com/600x400/?sheep,qurban",
  },
]

// Cari artikel berdasarkan id
const artikel = artikels.find(
  (a) => a.id === parseInt(route.params.id)
)
</script>
