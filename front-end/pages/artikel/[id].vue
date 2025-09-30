<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar / Header -->
    <header class="bg-orange-600 text-white py-6 shadow-md">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Judul Halaman -->
        <h1 class="text-xl font-bold mb-1">Artikel Qurban</h1>

        <!-- Breadcrumb -->
        <nav class="text-sm space-x-1">
          <router-link to="/" class="hover:underline">Home</router-link>
          <span>/</span>
          <span>Artikel</span>
        </nav>
      </div>
    </header>

    <!-- Konten Artikel -->
    <div class="max-w-4xl mx-auto p-6 flex-1">
      <div v-if="artikel" class="grid md:grid-cols-2 gap-8 items-start">
        <!-- Foto artikel -->
        <div>
          <img
            :src="artikel.image"
            :alt="artikel.title"
            class="w-full rounded-lg shadow-md border-4 border-orange-500"
          />
        </div>

        <!-- Teks artikel -->
        <div>
          <!-- Judul -->
          <h1 class="text-3xl font-bold mb-4 text-orange-700">
            {{ artikel.title }}
          </h1>

          <!-- Isi/Excerpt -->
          <p class="text-gray-800 leading-relaxed text-lg bg-teal-300/20 p-4 rounded-lg">
            {{ artikel.excerpt }}
          </p>
        </div>
      </div>

      <!-- Jika artikel tidak ditemukan -->
      <div v-else class="text-center py-20">
        <p class="text-gray-500">Artikel tidak ditemukan.</p>
      </div>
    </div>
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
    excerpt: "Keutamaan qurban meliputi pahala yang sangat besar di sisi Allah SWT, di mana hewan kurban akan menjadi saksi di Hari Kiamat; sebagai bentuk rasa syukur dan ungkapan ketaatan kepada perintah Allah SWT; menjadi sarana untuk membantu fakir miskin dan mempererat tali persaudaraan melalui pembagian daging kurban; serta menghapus sifat egoisme dan individualisme dengan berbagi kepada sesama.",
    image: "/artikel/Keutamaan-berqurban.jpg",
  },
  {
    id: 2,
    title: "Panduan Praktis Ibadah Qurban",
    excerpt: "pemilihan hewan sesuai syarat usia dan kondisi, persiapan diri bagi shohibul qurban seperti menahan diri dari memotong rambut dan kuku, tata cara penyembelihan termasuk niat dan doa yang tepat, serta manajemen daging yang bersih dan terorganisir, dan waktu pelaksanaan yang harus sesuai dengan syariat Islam, yaitu dari setelah Salat Idul Adha hingga akhir hari Tasyriq.",
    image: "/artikel/Panduan-Praktis-Ibadah-Qurban.jpg",
  },
  {
    id: 3,
    title: "Sejarah Ibadah Qurban",
    excerpt: "ibadah menyembelih hewan tertentu pada waktu tertentu sebagai bentuk ketaatan dan rasa syukur kepada Allah SWT, yang juga mengandung nilai sosial dengan berbagi daging kepada sesama, terutama yang membutuhkan. Sejarahnya berawal dari perintah Allah kepada Nabi Ibrahim untuk menyembelih putranya, Nabi Ismail, sebagai ujian kesabaran dan ketakwaan, yang kemudian Allah gantikan dengan seekor domba. Pelaksanaan qurban bertujuan untuk mendekatkan diri kepada Allah, membersihkan harta, meneladani ketaatan Nabi Ibrahim, serta menumbuhkan sikap peduli, empati, dan kepedulian sosial.",
    image: "/artikel/sejarah_ibadah_qurban.jpeg",
  },
]

// Cari artikel berdasarkan id di route
const artikel = artikels.find(
  (a) => a.id === parseInt(route.params.id)
)
</script>
