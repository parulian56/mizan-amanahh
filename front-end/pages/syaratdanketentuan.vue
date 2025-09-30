<template>
  <div
    class="bg-gradient-to-br from-red-50 via-white to-red-100 text-gray-800 min-h-screen overflow-hidden flex flex-col justify-center"
  >
    <!-- Navbar -->
    <header class="sticky top-0 z-50 bg-[#FB8603] shadow-md">
      <div class="px-6 py-6 mx-auto max-w-7xl text-white flex justify-between items-center">
        <!-- Judul -->
        <h1 class="text-2xl font-bold">Syarat & Ketentuan</h1>
        <!-- Breadcrumb -->
        <nav class="mt-1 text-sm opacity-90">
          <router-link to="/" class="hover:underline">Home</router-link>
        </nav>
      </div>
    </header>

    <!-- Judul -->
    <section class="relative text-center mt-6 px-6">
      <h1
        class="text-3xl md:text-4xl font-extrabold text-black drop-shadow-sm"
      >
        Syarat &amp; Ketentuan Ibadurrohman
      </h1>
      <p class="mt-3 text-base text-gray-600">
        Pembaruan terakhir: 5 November 2019
      </p>

      <!-- Brand / Logo -->
      <div
        class="text-black font-bold text-lg mt-3 inline-block bg-black/5 px-4 py-2 rounded-full shadow-sm"
      >
        Ibadurrohman
      </div>
    </section>

    <!-- Card Container -->
    <div
      class="bg-white rounded-2xl shadow-xl p-6 md:p-10 prose prose-red max-w-4xl mx-auto mt-6 relative"
    >
      <!-- dekorasi garis -->
      <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FB8603] via-orange-400 to-yellow-400 rounded-t-2xl"></div>

      <p>
        Persyaratan Layanan ini berlaku jika Anda melakukan donasi melalui
        <strong>Ibadurrohman.or.id</strong>. Harap membaca Ketentuan Layanan ini
        dengan seksama karena berisi informasi penting tentang hak dan kewajiban
        Anda.
      </p>

      <p>
        Dengan mengakses atau menggunakan www.Ibadurrohman.or.id (apakah Anda
        mendaftar untuk menggunakan Layanan kami atau tidak), Anda setuju untuk
        terikat secara hukum dengan Syarat dan Ketentuan di website kami serta
        perubahan yang kami tetapkan dari waktu ke waktu.
      </p>

      <p>
        Jika Anda tidak ingin terikat dengan Ketentuan Layanan ini maka Anda
        tidak boleh menggunakan situs kami.
      </p>

      <h2>📌 Tentang Website</h2>
      <p>
        Situs web kami memberikan kesempatan untuk membuat kampanye penggalangan
        donasi secara online untuk mendukung proyek amal di Indonesia serta
        negara lain yang tidak melanggar hukum. ...
      </p>

      <h2>⚡ Menggunakan Layanan Website</h2>
      <p>
        Untuk menggunakan Layanan kami, Anda harus mengikuti prosedur yang
        ditetapkan di Situs Web. ...
      </p>

      <h2>🔄 Perubahan pada Website</h2>
      <p>
        Kami berhak melakukan perubahan atau koreksi, menangguhkan, atau
        menghentikan segala aspek situs web kami atau konten atau layanan yang
        tersedia...
      </p>

      <h2>🔒 Informasi yang Anda berikan kepada kami</h2>
      <p>
        Kebijakan Privasi kami menjelaskan bagaimana kami dapat menggunakan
        informasi pribadi yang Anda berikan...
      </p>

      <h2>🛡️ Keamanan</h2>
      <p>
        Anda bertanggung jawab sepenuhnya dalam semua hal untuk semua penggunaan
        dan perlindungan kerahasiaan nama pengguna, verifikasi email dan kata
        sandi...
      </p>

      <h2>📑 Penerapan Materi Online</h2>
      <p>
        Kecuali ditentukan lain, semua konten dan materi yang dipublikasikan di
        situs kami disajikan semata-mata untuk penggunaan khusus, pribadi dan
        non-komersial Anda...
      </p>

      <h2>📖 Hak Cipta dan Pemantauan</h2>
      <p>
        Isi dari website kami dilindungi oleh undang-undang hak cipta dan hak
        kekayaan intelektual lainnya...
      </p>

      <h2>🔗 Situs yang terhubung</h2>
      <p>
        Mizan Amanah tidak membuat pernyataan apa pun tentang situs web lain
        yang dapat Anda akses...
      </p>

      <h2>🌐 Ketersediaan Website</h2>
      <p>
        Kami akan mencoba membuat situs web kami tersedia namun tidak dapat
        menjamin bahwa situs web kami akan beroperasi terus menerus...
      </p>

      <h2>⚖️ Kewajiban</h2>
      <p>
        Kami berjanji bahwa Layanan kami akan diberikan sesuai keterampilan dan
        perhatian yang optimal...
      </p>

      <h2>📜 Ketentuan Umum</h2>
      <p>
        Kami bisa, tapi Anda tidak bisa, memberikan hak dan / atau mentransfer,
        mensubkontrakkan atau mendelegasikan kewajiban...
      </p>

      <h2>📬 Keluhan dan Pelaporan</h2>
      <p>
        Jika Anda memiliki keluhan atau ingin melaporkan masalah teknis apapun
        dengan situs web kami...
      </p>

      <h2>📧 Pemberitahuan</h2>
      <p>
        Semua pemberitahuan harus diberikan kepada kami melalui email di
        <em>info@mizanamanah.or.id</em> atau melalui surat ke alamat kantor
        kami...
      </p>

      <p class="mt-8 text-sm text-gray-500 border-t pt-4">
        <strong>Pembaruan terakhir:</strong> 5 November 2019
      </p>
    </div>

    <!-- Footer -->
    <footer class="bg-[#E9741C] text-white py-8 mt-auto">
      <div class="px-4 mx-auto space-y-2 text-center max-w-7xl">
        <p>&copy; {{ currentYear }} Qurban Amanah. Semua Hak Dilindungi.</p>
        <p>Hubungi kami: 0812-3456-7890 | Email: info@qurbanamanah.org</p>
      </div>
    </footer>
    
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

export default {
  name: "SyaratKetentuan",
  setup() {
    const router = useRouter();
    const currentYear = new Date().getFullYear();

    const goBack = () => {
      router.push({ name: "index" });
    };

    // Scroll otomatis ke atas saat halaman dibuka
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { goBack, currentYear };
  },
};
</script>

<style scoped>
.prose h2 {
  @apply text-black font-semibold text-xl mt-6 flex items-center gap-2;
}
.prose p {
  @apply text-gray-700 leading-relaxed;
}
</style>
