<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <header class="bg-red-500 text-white px-4 py-3">
      <div class="flex items-center">
        <router-link to="/program" class="mr-3">
             <i class="fas fa-arrow-left text-xl"></i>
        </router-link>
        <h1 class="text-lg font-medium">Infaq Beras Untuk Fakir, Miskin, L...</h1>
      </div>
    </header>

    <!-- Breadcrumb -->
    <nav class="bg-red-500 px-4 pb-3">
      <div class="flex items-center text-white text-sm">
        <span>Home</span>
        <i class="fas fa-chevron-right mx-2 text-xs"></i>
        <span class="bg-white bg-opacity-20 px-2 py-1 rounded">...</span>
        <i class="fas fa-chevron-right mx-2 text-xs"></i>
        <span>infaq-beras</span>
      </div>
    </nav>

    <div class="max-w-md mx-auto bg-white">
      <!-- Main Image -->
      <div class="relative">
        <img
          src="/image/sedekah1.png"
          alt="Foto kegiatan donasi beras"
          class="w-full h-64 object-cover"
        />
        <button
          class="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
        >
          <i class="fas fa-chevron-up text-white text-xs"></i>
        </button>
      </div>

      <!-- Content -->
      <div class="p-4">
        <!-- Title -->
        <h2 class="text-xl font-bold text-red-500 mb-2">
          Infaq Beras Untuk Fakir, Miskin, Lansia, Yatim & Dhuafa
        </h2>
        <p class="text-lg font-semibold text-red-500 mb-1">Penghafal Al Quran</p>
        <p class="text-sm text-gray-600 mb-4">Tanpa Batas Waktu</p>

        <!-- Progress -->
        <div class="mb-4">
          <div class="flex justify-between items-center mb-2">
            <span class="text-lg font-bold">{{ donationCount }} Donasi</span>
          </div>
          <div class="bg-gray-200 rounded-full h-2 mb-2">
            <div
              class="bg-red-500 h-2 rounded-full"
              :style="{ width: progressPercentage + '%' }"
            ></div>
          </div>
          <p class="text-sm text-gray-600">
            Terkumpul
            <span class="font-semibold">Rp. {{ formatCurrency(collectedAmount) }}</span>
            dari
            <span class="font-semibold">Rp. {{ formatCurrency(targetAmount) }}</span>
          </p>
        </div> 

        <!-- Bismillah -->
        <div class="mb-6">
          <p class="text-gray-700 font-semibold mb-2">Bismillah,</p>
          <p class="text-sm text-gray-600 leading-relaxed mb-4">
            Assalamualaikum Warahmatullahi Wabarakatuh para donatur yang dimuliakan oleh Allah SWT.
          </p>
          <p class="text-sm text-gray-600 leading-relaxed mb-4">
            Kami dari Tim Baksos Peduli Generasi mengajak para donatur untuk berbagi kebaikan dengan memberikan bantuan berupa beras kepada fakir, miskin, lansia, yatim dan dhuafa yang sangat membutuhkan bantuan kita.
          </p>
          <p class="text-sm text-gray-600 leading-relaxed mb-4">
            Setiap donasi yang Anda berikan akan disalurkan langsung kepada mereka yang membutuhkan.
          </p>
          <p class="text-sm text-gray-600 leading-relaxed">
            "Dan apa saja yang kamu nafkahkan, maka Allah akan menggantinya dan Dia-lah Pemberi rezeki yang sebaik-baiknya." (QS. Saba: 39)
          </p>
        </div>

        <!-- Donation Amount Options -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-3">Pilih Nominal Donasi</h3>
          <div class="grid grid-cols-2 gap-3 mb-4">
            <button
              v-for="amount in donationOptions"
              :key="amount"
              @click="selectedAmount = amount"
              :class="[
                'border-2 rounded-lg p-3 text-center font-semibold transition-all',
                selectedAmount === amount
                  ? 'border-red-500 bg-red-50 text-red-500'
                  : 'border-gray-200 text-gray-700 hover:border-red-300'
              ]"
            >
              Rp {{ formatCurrency(amount) }}
            </button>
          </div>

          <!-- Custom Amount -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Atau masukkan nominal lain:
            </label>
            <input
              v-model="customAmount"
              @input="selectedAmount = null"
              type="number"
              placeholder="Minimal Rp 10.000"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        <!-- Donor Name -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Nama Donatur (Opsional)
          </label>
          <input
            v-model="donorName"
            type="text"
            placeholder="Masukkan nama Anda"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <!-- Message -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Pesan & Doa (Opsional)
          </label>
          <textarea
            v-model="message"
            rows="3"
            placeholder="Tulis pesan atau doa untuk penerima manfaat"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          ></textarea>
        </div>

        <!-- Anonymous Option -->
        <div class="mb-6">
          <label class="flex items-center">
            <input
              v-model="isAnonymous"
              type="checkbox"
              class="rounded border-gray-300 text-red-500 focus:ring-red-500"
            />
            <span class="ml-2 text-sm text-gray-700">Donasi sebagai Anonim</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Donate Button -->
    <div class="max-w-md mx-auto bg-white sticky bottom-0 p-4 border-t">
      <button
        @click="donate"
        :disabled="!isValidDonation"
        :class="[
          'w-full py-3 px-4 rounded-lg font-semibold text-white transition-all',
          isValidDonation
            ? 'bg-red-500 hover:bg-red-600 active:bg-red-700'
            : 'bg-gray-400 cursor-not-allowed'
        ]"
      >
        <span v-if="isLoading">
          <i class="fas fa-spinner fa-spin mr-2"></i>
          Memproses...
        </span>
        <span v-else>DONASI SEKARANG</span>
      </button>
    </div>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white rounded-lg p-6 max-w-sm w-full">
        <div class="text-center">
          <div
            class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <i class="fas fa-check text-green-500 text-2xl"></i>
          </div>
          <h3 class="text-lg font-semibold mb-2">Terima Kasih!</h3>
          <p class="text-gray-600 mb-4">
            Donasi Anda sebesar
            <span class="font-semibold">Rp {{ formatCurrency(finalDonationAmount) }}</span>
            telah berhasil dikirim.
          </p>
          <p class="text-sm text-gray-500 mb-4">
            Semoga Allah SWT memberikan balasan yang berlipat ganda. Aamiin.
          </p>
          <button
            @click="closeSuccessModal"
            class="w-full bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const donationCount = ref(335)
const collectedAmount = ref(28541520)
const targetAmount = ref(50000000)
const donationOptions = [25000, 50000, 100000, 200000, 500000, 1000000]

const selectedAmount = ref(null)
const customAmount = ref("")
const donorName = ref("")
const message = ref("")
const isAnonymous = ref(false)
const isLoading = ref(false)
const showSuccessModal = ref(false)
const finalDonationAmount = ref(0)

const progressPercentage = computed(() =>
  Math.min((collectedAmount.value / targetAmount.value) * 100, 100)
)

const currentDonationAmount = computed(() => {
  if (selectedAmount.value) return selectedAmount.value
  return parseInt(customAmount.value) || 0
})

const isValidDonation = computed(() => currentDonationAmount.value >= 10000)

const formatCurrency = (amount) =>
  amount.toLocaleString("id-ID")

const goBack = () => {
  alert("Kembali ke halaman sebelumnya")
}

const donate = async () => {
  if (!isValidDonation.value) {
    alert("Minimal donasi adalah Rp 10.000")
    return
  }

  isLoading.value = true
  finalDonationAmount.value = currentDonationAmount.value

  // Simulasi API
  await new Promise((resolve) => setTimeout(resolve, 2000))

  donationCount.value++
  collectedAmount.value += currentDonationAmount.value

  selectedAmount.value = null
  customAmount.value = ""
  donorName.value = ""
  message.value = ""
  isAnonymous.value = false
  isLoading.value = false
  showSuccessModal.value = true
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
</style>
