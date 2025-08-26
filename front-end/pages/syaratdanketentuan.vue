<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-md p-4 sticky top-0 z-50 flex items-center justify-between">
      <h1 class="text-lg font-semibold">Syarat & Ketentuan Qurban</h1>
      <button 
        @click="goBack" 
        class="text-gray-600 hover:text-black"
      >
        ✕
      </button>
    </header>

    <!-- Content -->
    <main class="flex-1 p-4 overflow-y-auto text-sm leading-relaxed text-gray-700 space-y-4">
      <section>
        <h2 class="font-semibold text-gray-900 mb-1">1. Hewan Qurban</h2>
        <p>
          Hewan qurban yang diterima adalah kambing, domba, sapi, atau kerbau sesuai syariat Islam,
          dalam kondisi sehat, cukup umur, dan tidak cacat.
        </p>
      </section>

      <section>
        <h2 class="font-semibold text-gray-900 mb-1">2. Pembayaran</h2>
        <p>
          Pembayaran dilakukan maksimal sebelum hari tasyrik (11–13 Dzulhijjah). 
          Bukti pembayaran wajib disimpan sebagai referensi.
        </p>
      </section>

      <section>
        <h2 class="font-semibold text-gray-900 mb-1">3. Pelaksanaan Penyembelihan</h2>
        <p>
          Penyembelihan dilakukan sesuai syariat Islam, dipimpin oleh petugas berkompeten, 
          dan disaksikan oleh panitia qurban.
        </p>
      </section>

      <section>
        <h2 class="font-semibold text-gray-900 mb-1">4. Distribusi Daging</h2>
        <p>
          Daging qurban akan dibagikan kepada masyarakat yang berhak menerima, 
          sesuai dengan ketentuan syariat dan kesepakatan panitia.
        </p>
      </section>

      <section>
        <h2 class="font-semibold text-gray-900 mb-1">5. Lain-lain</h2>
        <p>
          Panitia berhak melakukan penyesuaian teknis demi kelancaran pelaksanaan ibadah qurban.
        </p>
      </section>
    </main>

    <!-- Footer dengan checkbox + tombol -->
    <footer class="bg-white shadow-inner p-4 space-y-3">
      <label class="flex items-center space-x-2 text-sm">
        <input 
          type="checkbox" 
          v-model="isChecked" 
          class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
        >
        <span>Saya sudah membaca dan menyetujui syarat & ketentuan qurban</span>
      </label>

      <button 
        @click="acceptTerms" 
        :disabled="!isChecked"
        class="w-full py-3 rounded-lg font-semibold transition
              text-white
              bg-green-600 enabled:hover:bg-green-700 
              disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Konfirmasi Qurban
      </button>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const isChecked = ref(false)

const goBack = () => {
  router.back()
}

const acceptTerms = () => {
  alert("Terima kasih, Anda telah menyetujui syarat & ketentuan qurban.")
  router.push("/") // arahkan ke halaman utama/dashboard qurban
}
</script>

<style scoped>
main {
  -webkit-overflow-scrolling: touch;
}
</style>
