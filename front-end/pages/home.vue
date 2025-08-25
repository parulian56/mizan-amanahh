<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-red-500 text-white">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Hamburger Menu -->
          <button @click="toggleMobileMenu" class="md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          <!-- Logo -->
          <div class="flex items-center justify-center flex-1 md:flex-none">
            <div class="text-xl font-bold">
              <span class="bg-white text-red-500 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">M</span>
              mizan amanah
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Hero Section -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div class="p-6">
          <!-- Logo Section -->
          <div class="flex items-center mb-6">
            <div class="bg-red-500 text-white px-3 py-1 rounded mr-4">
              <span class="font-bold">mizan</span><br>
              <span class="text-sm">amanah</span>
            </div>
            <div class="text-sm text-gray-600">
              <div>Yayasan Mizan Amanah</div>
              <div class="text-blue-600">Dari Zakat Nasional</div>
            </div>
          </div>

          <!-- Main Banner -->
          <div class="text-center mb-6">
            <h1 class="text-3xl md:text-4xl font-bold mb-2">
              JADI <span class="bg-orange-500 text-white px-2 py-1 rounded">ORANG DEKAT</span> NABI
            </h1>
            <h2 class="text-xl text-orange-500 font-semibold mb-4">Yatim Sedekah Dua Jari</h2>
            <p class="text-gray-700 max-w-2xl mx-auto text-sm leading-relaxed">
              "Aku dan orang yang menanggung anak yatim (kedudukkannya) di surga seperti ini," kemudian beliau menunjukkan dengan jari telunjuk dan jari tengahnya serta agak merenggangkan keduanya. (HR. Ahmad)
            </p>
          </div>

          <!-- Hero Image -->
          <div class="relative bg-blue-400 rounded-lg p-8 mb-6">
            <div class="flex items-center justify-center space-x-8">
              <!-- Family Illustration -->
              <div class="flex items-center space-x-4">
                <div class="w-16 h-20 bg-pink-200 rounded-full relative">
                  <!-- Mother figure -->
                  <div class="absolute top-2 left-2 w-12 h-12 bg-pink-300 rounded-full"></div>
                  <div class="absolute top-1 left-1 w-14 h-6 bg-pink-100 rounded-t-full"></div>
                </div>
                <div class="w-12 h-16 bg-blue-200 rounded-full relative">
                  <!-- Child figure -->
                  <div class="absolute top-2 left-1 w-10 h-10 bg-blue-300 rounded-full"></div>
                  <div class="absolute top-1 left-0 w-12 h-5 bg-gray-200 rounded-t-full"></div>
                </div>
                <div class="w-20 h-24 bg-white rounded-full relative">
                  <!-- Father figure -->
                  <div class="absolute top-3 left-3 w-14 h-14 bg-orange-200 rounded-full"></div>
                  <div class="absolute top-1 left-2 w-16 h-8 bg-white rounded-t-full"></div>
                  <div class="absolute top-0 left-6 w-8 h-4 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
            
            <!-- Donate Button -->
            <button 
              @click="showDonationForm = true"
              class="absolute bottom-4 right-4 bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Donasi Sekarang
            </button>
          </div>

          <!-- Website URL -->
          <div class="text-center text-white bg-red-500 py-2 rounded">
            <span class="font-semibold">www.mizanamanah.or.id</span>
          </div>
        </div>
      </div>

      <!-- Program Section -->
      <div class="bg-white rounded-lg shadow-lg mb-8">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-center mb-6">Program Infaq dan Zakat</h2>
          
          <!-- Tab Navigation -->
          <div class="flex justify-center mb-6">
            <div class="flex bg-gray-100 rounded-lg p-1">
              <button 
                @click="activeTab = 'infaq'"
                :class="activeTab === 'infaq' ? 'bg-red-500 text-white' : 'text-gray-600'"
                class="px-8 py-2 rounded-lg font-semibold transition-colors"
              >
                Infaq
              </button>
              <button 
                @click="activeTab = 'zakat'"
                :class="activeTab === 'zakat' ? 'bg-red-500 text-white' : 'text-gray-600'"
                class="px-8 py-2 rounded-lg font-semibold transition-colors"
              >
                Zakat
              </button>
            </div>
          </div>

          <!-- Infaq Content -->
          <div v-if="activeTab === 'infaq'" class="space-y-6">
            <!-- Infaq Campaign -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-red-500 text-white px-4 py-2">
                <span class="font-semibold">Infaq Sedekah</span>
              </div>
              
              <div class="p-6">
                <div class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                  <!-- Campaign Image -->
                  <div class="w-full md:w-1/3">
                    <div class="bg-red-500 text-white p-4 rounded-lg">
                      <h3 class="font-bold text-lg">BERKAH DENGAN SEDEKAH</h3>
                      <div class="flex items-center space-x-2 mt-2">
                        <span class="text-2xl">#</span>
                        <div>
                          <div class="text-sm">MARI</div>
                          <div class="text-sm">MULIAKAN</div>
                          <div class="text-sm">YATIM</div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Children illustration -->
                    <div class="mt-4 flex justify-center space-x-2">
                      <div v-for="i in 5" :key="i" class="w-8 h-10 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <!-- Campaign Details -->
                  <div class="w-full md:w-2/3">
                    <h3 class="text-xl font-bold mb-3">Berkah Dengan Sedekah</h3>
                    
                    <!-- Progress Bar -->
                    <div class="mb-4">
                      <div class="bg-gray-200 rounded-full h-2 mb-2">
                        <div class="bg-red-500 h-2 rounded-full" style="width: 86%"></div>
                      </div>
                      <div class="text-sm text-gray-600">
                        <span class="font-semibold">Terkumpul Rp. 1.855.677.659</span> dari Rp. 1.600.000.000
                      </div>
                    </div>
                    
                    <p class="text-gray-700 mb-4">
                      Mari kita jadikan Sedekah sebagai Gaya Hidup, Insya Allah hidup akan lebih berkah dengan memperbanyak sedekah
                    </p>
                    
                    <button class="text-red-500 font-semibold hover:underline">
                      Read More
                    </button>
                    
                    <!-- Deadline -->
                    <div class="mt-4 flex justify-between items-center text-sm text-gray-600">
                      <span>Batas Waktu</span>
                      <span class="font-semibold">Kamis, 31 Juli 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Zakat Content -->
          <div v-if="activeTab === 'zakat'" class="text-center py-8">
            <div class="text-gray-500 mb-4">
              <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p class="text-gray-600">Program Zakat akan segera hadir</p>
          </div>
        </div>
      </div>

      <!-- Donation Programs -->
      <div class="bg-white rounded-lg shadow-lg">
        <div class="bg-red-500 text-white py-4 px-6 rounded-t-lg">
          <h2 class="text-xl font-bold text-center">DONASI SEKARANG</h2>
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-bold text-center mb-6">Program</h3>
          
          <p class="text-gray-600 text-center mb-8 leading-relaxed">
            Beragam Program Lembaga Amil Zakat Mizan Amanah seperti Panti Asuhan Islam, Santunan Anak Yatim, dan berbagai pilihan donasi online untuk membantu sesama.
          </p>

          <!-- Program Card -->
          <div class="border rounded-lg overflow-hidden">
            <div class="relative">
              <!-- Wakaf Label -->
              <div class="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded">
                <span class="font-semibold">Wakaf</span>
              </div>
              
              <!-- Program Image -->
              <div class="h-48 bg-gray-300 relative overflow-hidden">
                <!-- Children sitting at table illustration -->
                <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-400 to-transparent"></div>
                <div class="absolute bottom-8 left-8 flex space-x-2">
                  <div v-for="i in 6" :key="i" class="w-8 h-10 bg-red-400 rounded-full"></div>
                </div>
              </div>
              
              <!-- Mizan Amanah Logo -->
              <div class="absolute top-4 right-4 bg-white p-2 rounded">
                <div class="text-xs font-bold text-red-500">mizan<br>amanah</div>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-lg font-bold mb-2">
                Patungan Bebaskan Panti Asuhan
              </h3>
              <h4 class="text-blue-500 font-semibold mb-4">
                Santri Yatim Penghafal Alquran
              </h4>
              
              <p class="text-gray-600 font-semibold">
                BANTU BEBASKAN PANTI ASUHAN YATIM
              </p>
            </div>
          </div>

          <!-- Donate Button -->
          <div class="text-center mt-6">
            <button 
              @click="showDonationForm = true"
              class="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Donasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Donation Modal -->
    <div v-if="showDonationForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold">Donasi Sekarang</h3>
          <button @click="showDonationForm = false" class="text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <form @submit.prevent="submitDonation">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">Jumlah Donasi</label>
            <select v-model="donationAmount" class="w-full p-3 border rounded-lg">
              <option value="">Pilih jumlah</option>
              <option value="50000">Rp 50.000</option>
              <option value="100000">Rp 100.000</option>
              <option value="250000">Rp 250.000</option>
              <option value="500000">Rp 500.000</option>
              <option value="custom">Jumlah lainnya</option>
            </select>
          </div>
          
          <div v-if="donationAmount === 'custom'" class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">Jumlah Custom</label>
            <input 
              v-model="customAmount" 
              type="number" 
              placeholder="Masukkan jumlah"
              class="w-full p-3 border rounded-lg"
            >
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
            <input 
              v-model="donorName" 
              type="text" 
              placeholder="Masukkan nama lengkap"
              class="w-full p-3 border rounded-lg"
              required
            >
          </div>
          
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              v-model="donorEmail" 
              type="email" 
              placeholder="Masukkan email"
              class="w-full p-3 border rounded-lg"
              required
            >
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Lanjutkan Donasi
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Mizan Amanah - Yayasan Zakat dan Infaq',
  meta: [
    { name: 'description', content: 'Yayasan Mizan Amanah - Lembaga Amil Zakat untuk Program Panti Asuhan Islam, Santunan Anak Yatim, dan berbagai program sosial lainnya.' }
  ]
})

// Reactive data
const showDonationForm = ref(false)
const activeTab = ref('infaq')
const mobileMenuOpen = ref(false)

// Donation form data
const donationAmount = ref('')
const customAmount = ref('')
const donorName = ref('')
const donorEmail = ref('')

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
const submitDonation = () => {
  const amount = donationAmount.value === 'custom' ? customAmount.value : donationAmount.value
  
  if (!amount || !donorName.value || !donorEmail.value) {
    alert('Mohon lengkapi semua data yang diperlukan')
    return
  }
  
  // Here you would integrate with payment gateway
  alert(`Terima kasih ${donorName.value}! Donasi sebesar Rp ${parseInt(amount).toLocaleString('id-ID')} akan diproses.`)
  
  // Reset form
  showDonationForm.value = false
  donationAmount.value = ''
  customAmount.value = ''
  donorName.value = ''
  donorEmail.value = ''
}

</script>

<style scoped>
/* Additional custom styles if needed */
.container {
  max-width: 1200px;
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Custom scrollbar for mobile */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #ef4444;
  border-radius: 2px;
}
</style>