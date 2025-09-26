<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-orange-600 text-white shadow-md w-full">
      <div class="max-w-7xl mx-auto px-10 py-6">
        <h1 class="text-2xl font-bold mb-1">Artikel Qurban</h1>
        <p class="text-sm">
          <a href="/" class="underline hover:text-gray-200">Home</a> / Artikel
        </p>
      </div>
    </header>

    <!-- Konten Artikel -->
    <main class="max-w-6xl mx-auto w-full px-6 py-10">
      <div v-if="artikel" class="flex flex-col md:flex-row items-start gap-8">
        <!-- Bagian Teks (kiri) -->
        <div class="flex-1">
          <h1 class="text-3xl font-bold mb-4 text-orange-700">
            {{ artikel.title }}
          </h1>
          <p class="text-gray-700 leading-relaxed text-lg bg-teal-300/20 p-4 rounded-lg">
            {{ artikel.excerpt }}
          </p>
        </div>

        <!-- Bagian Gambar (kanan) -->
        <div class="flex-1">
          <img
            :src="artikel.image"
            :alt="artikel.title"
            class="w-full rounded-lg shadow-md border-4 border-orange-500 object-cover max-h-[400px]"
          />
        </div>
      </div>

      <div v-else class="text-center py-20">
        <p class="text-gray-500">Artikel tidak ditemukan.</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"

const route = useRoute()

const artikels = [
  {
    id: 1,
    title: "Keutamaan Berqurban",
    excerpt:
      "Keutamaan berkurban meliputi bentuk ketaatan dan syukur kepada Allah SWT, sarana menghapus dosa, mendekatkan diri kepada Allah, meningkatkan nilai pahala (setiap helai bulu dan tetes darah hewan kurban mengandung kebaikan), serta membantu sesama dan mempererat tali silaturahmi melalui pembagian daging kurban. ",
    image: "/artikel/Keutamaan-berqurban.jpg",
  },
  {
    id: 2,
    title: "Panduan Praktis Qurban",
    excerpt:
      "Panduan praktis qurban meliputi pemilihan hewan dan peralatannya, pelaksanaan penyembelihan yang sesuai syariat, dan pembagian daging kurban. Hal-hal penting yang perlu diperhatikan adalah memilih hewan yang sehat, menyembelih dengan pisau tajam di hadapan kiblat setelah membaca bismillah, serta mempraktikkan kebersihan dan etika yang baik selama proses penyembelihan hingga pembagian daging. ",
    image: "/artikel/Panduan-Praktis-ibadah-Qurban.jpg",
  },
  {
    id: 3,
    title: "Sejarah Ibadah Qurban",
    excerpt:
      "Sejarah ibadah qurban berawal dari perintah Allah kepada Nabi Ibrahim untuk menyembelih putranya, Ismail AS, yang kemudian diganti dengan hewan sembelihan sebagai ujian keimanan. Umat Islam menjalankan ibadah qurban sebagai peneladanan ketaatan, kesabaran, dan rasa syukur kepada Allah, seperti yang dicontohkan oleh Nabi Ibrahim dan Ismail AS. ",
    image: "/artikel/sejarah_ibadah_qurban.jpeg",
  },
]

const artikel = artikels.find((a) => a.id === parseInt(route.params.id))
</script>
