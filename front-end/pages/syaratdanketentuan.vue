<template>
  <div class="bg-gradient-to-br from-red-50 via-white to-red-100 text-gray-800 min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-primary text-white py-4 shadow">
      <div class="container mx-auto px-4">
        <!-- Baris atas: tombol back + title -->
        <div class="flex items-center">
          <router-link to="/" class="mr-3 flex items-center">
            <i class="fas fa-arrow-left text-xl"></i>
          </router-link>
          <h1 class="text-lg font-semibold">Syarat & Ketentuan</h1>
        </div>

        <!-- Breadcrumb -->
        <nav class="text-sm mt-2">
          <ul class="flex items-center space-x-2">
            <li>
              <a href="/" class="hover:underline">Home</a>
            </li>
            <li>/</li>
            <li class="text-gray-200">Tentang</li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Konten Utama -->
    <main class="flex-1 container mx-auto px-4 py-10">
      <h1
        class="text-3xl md:text-4xl font-extrabold text-[#FB8603] drop-shadow-sm text-center"
      >
        Syarat &amp; Ketentuan Ibadurrohman
      </h1>
      <p class="mt-3 text-base text-gray-600 text-center">
        Pembaruan terakhir: 5 November 2019
      </p>

      <div
        class="bg-white rounded-2xl shadow-xl p-6 md:p-10 prose prose-red max-w-none mt-6"
      >
        <p>
          Persyaratan Layanan ini berlaku jika Anda melakukan donasi melalui
          <strong>ibadurrohman.or.id</strong>. Harap membaca Ketentuan Layanan
          ini dengan seksama karena berisi informasi penting tentang hak dan
          kewajiban Anda.
        </p>

        <p>
          Dengan mengakses atau menggunakan www.ibadurrohman.or.id (apakah Anda
          mendaftar untuk menggunakan Layanan kami atau tidak), Anda setuju
          untuk terikat secara hukum dengan Syarat dan Ketentuan di website kami
          serta perubahan yang kami tetapkan dari waktu ke waktu.
        </p>

        <p>
          Jika Anda tidak ingin terikat dengan Ketentuan Layanan ini maka Anda
          tidak boleh menggunakan situs kami.
        </p>

        <h2>Tentang Website</h2>
        <p>
          Situs web kami memberikan kesempatan untuk membuat kampanye
          penggalangan donasi secara online untuk mendukung proyek amal di
          Indonesia serta negara lain yang tidak melanggar hukum. ...
        </p>

        <h2>Menggunakan Layanan Website</h2>
        <p>
          Untuk menggunakan Layanan kami, Anda harus mengikuti prosedur yang
          ditetapkan di Situs Web. ...
        </p>

        <h2>Perubahan pada Website</h2>
        <p>
          Kami berhak melakukan perubahan atau koreksi, menangguhkan, atau
          menghentikan segala aspek situs web kami atau konten atau layanan yang
          tersedia...
        </p>

        <h2>Informasi yang Anda berikan kepada kami</h2>
        <p>
          Kebijakan Privasi kami menjelaskan bagaimana kami dapat menggunakan
          informasi pribadi yang Anda berikan...
        </p>

        <h2>Keamanan</h2>
        <p>
          Anda bertanggung jawab sepenuhnya dalam semua hal untuk semua
          penggunaan dan perlindungan kerahasiaan nama pengguna, verifikasi
          email dan kata sandi...
        </p>

        <h2>Penerapan Materi Online</h2>
        <p>
          Kecuali ditentukan lain, semua konten dan materi yang dipublikasikan
          di situs kami disajikan semata-mata untuk penggunaan khusus, pribadi
          dan non-komersial Anda...
        </p>

        <h2>Hak Cipta dan Pemantauan</h2>
        <p>
          Isi dari website kami dilindungi oleh undang-undang hak cipta dan hak
          kekayaan intelektual lainnya...
        </p>

        <h2>Situs yang terhubung</h2>
        <p>
          Ibadurrohman tidak membuat pernyataan apa pun tentang situs web lain
          yang dapat Anda akses...
        </p>

        <h2>Ketersediaan Website</h2>
        <p>
          Kami akan mencoba membuat situs web kami tersedia namun tidak dapat
          menjamin bahwa situs web kami akan beroperasi terus menerus...
        </p>

        <h2>Kewajiban</h2>
        <p>
          Kami berjanji bahwa Layanan kami akan diberikan sesuai keterampilan
          dan perhatian yang optimal...
        </p>

        <h2>Ketentuan Umum</h2>
        <p>
          Kami bisa, tapi Anda tidak bisa, memberikan hak dan / atau
          mentransfer, mensubkontrakkan atau mendelegasikan kewajiban...
        </p>

        <h2>Keluhan dan Pelaporan</h2>
        <p>
          Jika Anda memiliki keluhan atau ingin melaporkan masalah teknis apapun
          dengan situs web kami...
        </p>

        <h2>Pemberitahuan</h2>
        <p>
          Semua pemberitahuan harus diberikan kepada kami melalui email di
          <em>info@ibadurrohman.or.id</em> atau melalui surat ke alamat kantor
          kami...
        </p>

        <p class="mt-8 text-sm text-gray-500">
          <strong>Pembaruan terakhir:</strong> 5 November 2019
        </p>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white text-center py-6">
      <p>&copy; 2025 Ibadurrohman. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "SyaratKetentuan",
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.push({ name: "index" });
    };
    return { goBack };
  },
};
</script>

<style scoped>
.prose h2 {
  @apply text-[#FB8603] font-semibold text-xl mt-6;
}
</style>
