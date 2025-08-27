<template>
  <div class="bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800 min-h-screen">
    <main class="max-w-4xl mx-auto p-6 md:p-12">
      <!-- Header -->
      <header class="mb-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-green-700 drop-shadow-sm">Syarat &amp; Ketentuan Qurban</h1>
        <p class="mt-3 text-base text-gray-600">Mohon dibaca dengan seksama sebelum melanjutkan.</p>
      </header>

      <!-- Card Container -->
      <div class="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-8">
        <section class="space-y-6 divide-y divide-gray-200">
          <article class="pt-2">
            <h2 class="text-lg font-semibold text-green-700">1. Definisi</h2>
            <ul class="list-disc pl-5 mt-2 text-gray-700">
              <li><strong>Penyelenggara</strong> — pihak/organisasi penyelenggara program qurban.</li>
              <li><strong>Peserta</strong> — orang/badan yang mendaftar atau membayar program qurban.</li>
              <li><strong>Hewan Qurban</strong> — hewan ternak yang memenuhi syarat sah untuk qurban.</li>
            </ul>
          </article>

          <article class="pt-4">
            <h2 class="text-lg font-semibold text-green-700">2. Syarat Peserta</h2>
            <ul class="list-decimal pl-5 mt-2 text-gray-700">
              <li>Peserta adalah mukallaf sesuai syariat.</li>
              <li>Mendaftar sesuai prosedur resmi.</li>
              <li>Menyediakan data yang benar &amp; valid.</li>
            </ul>
          </article>

          <article class="pt-4">
            <h2 class="text-lg font-semibold text-green-700">3. Kriteria Hewan Qurban</h2>
            <p class="mt-2 text-gray-700">Hewan qurban harus sehat, cukup usia, dan tidak memiliki cacat yang membatalkan.</p>
          </article>

          <article class="pt-4">
            <h2 class="text-lg font-semibold text-green-700">4. Pendaftaran &amp; Pembayaran</h2>
            <ul class="list-disc pl-5 mt-2 text-gray-700">
              <li>Pendaftaran sah setelah formulir &amp; pembayaran selesai.</li>
              <li>Harga paket meliputi biaya hewan, pemotongan, pengemasan, distribusi.</li>
              <li>Bukti pembayaran wajib disimpan.</li>
            </ul>
          </article>

          <article class="pt-4">
            <h2 class="text-lg font-semibold text-green-700">5. Pembatalan &amp; Pengembalian Dana</h2>
            <ul class="list-disc pl-5 mt-2 text-gray-700">
              <li>Pembatalan sebelum cut-off dapat diproses sesuai aturan.</li>
              <li>Setelah pembelian hewan/ pelaksanaan, pengembalian penuh tidak berlaku.</li>
            </ul>
          </article>

          <article class="pt-4">
            <h2 class="text-lg font-semibold text-green-700">6. Pelaksanaan &amp; Distribusi</h2>
            <ul class="list-disc pl-5 mt-2 text-gray-700">
              <li>Penyembelihan sesuai syariat oleh petugas kompeten.</li>
              <li>Daging dikemas higienis &amp; disalurkan kepada mustahik.</li>
              <li>Dokumentasi (foto/video) dapat diberikan sesuai kebijakan.</li>
            </ul>
          </article>

          <article class="pt-4">
            <h2 class="text-lg font-semibold text-green-700">7. Tanggung Jawab</h2>
            <ul class="list-disc pl-5 mt-2 text-gray-700">
              <li>Penyelenggara bertanggung jawab atas pelaksanaan sesuai paket.</li>
              <li>Tidak bertanggung jawab atas keterlambatan distribusi akibat faktor eksternal.</li>
            </ul>
          </article>

          <article class="pt-4">
            <h2 class="text-lg font-semibold text-green-700">8. Privasi &amp; Data</h2>
            <p class="mt-2 text-gray-700">Data peserta digunakan hanya untuk administrasi &amp; distribusi, dijaga kerahasiaannya sesuai hukum berlaku.</p>
          </article>

          <article class="pt-4">
            <h2 class="text-lg font-semibold text-green-700">9. Force Majeure</h2>
            <p class="mt-2 text-gray-700">Penyelenggara tidak bertanggung jawab atas kegagalan karena bencana, pandemi, atau hal di luar kendali.</p>
          </article>

          <article class="pt-4">
            <h2 class="text-lg font-semibold text-green-700">10. Perubahan</h2>
            <p class="mt-2 text-gray-700">Syarat &amp; ketentuan dapat berubah sewaktu-waktu dan diumumkan melalui saluran resmi.</p>
          </article>

          <article class="pt-4">
            <h2 class="text-lg font-semibold text-green-700">11. Kontak</h2>
            <p class="mt-2 text-gray-700">Nama Organisasi: <em>[nama organisasi]</em><br>Email: <em>[email@example.com]</em><br>Telepon/WA: <em>[nomor]</em></p>
          </article>
        </section>

        <!-- Agreement Section -->
        <div class="mt-10 flex items-center space-x-3">
          <input type="checkbox" id="agree" v-model="isAgreed" class="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500" />
          <label for="agree" class="text-sm text-gray-700">Saya telah membaca &amp; menyetujui syarat &amp; ketentuan.</label>
        </div>

        <!-- Button -->
        <div class="mt-6 text-center">
          <button
            @click="submitAgreement"
            :disabled="!isAgreed"
            class="px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300"
            :class="isAgreed ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg' : 'bg-gray-300 text-gray-500 cursor-not-allowed'"
          >
            Setuju &amp; Lanjutkan
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "SyaratKetentuanQurban",
  data() {
    return {
      isAgreed: false
    };
  },
  methods: {
    submitAgreement() {
      if (this.isAgreed) {
        alert("Terima kasih, Anda telah menyetujui syarat & ketentuan.");
        // Arahkan ke halaman form pendaftaran qurban atau langkah berikutnya
      }
    }
  }
};
</script>

<style scoped>
</style>
