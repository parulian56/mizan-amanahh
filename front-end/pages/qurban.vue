<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <!-- Navbar -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-sm">Q</span>
          </div>
          <span class="font-bold text-red-600 text-lg">Qurban Amanah</span>
        </div>
        <ul class="hidden md:flex space-x-6 font-medium">
          <li><a href="#harga" @click="scrollTo('harga')" class="hover:text-red-600 transition-colors cursor-pointer">Harga</a></li>
          <li><a href="#daftar" @click="scrollTo('daftar')" class="hover:text-red-600 transition-colors cursor-pointer">Daftar</a></li>
          <li><a href="#faq" @click="scrollTo('faq')" class="hover:text-red-600 transition-colors cursor-pointer">FAQ</a></li>
        </ul>
        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2" @click="toggleMobileMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
      <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="md:hidden bg-white border-t">
        <div class="px-4 py-2 space-y-2">
          <a @click="scrollTo('harga')" class="block py-2 hover:text-red-600 transition-colors cursor-pointer">Harga</a>
          <a @click="scrollTo('daftar')" class="block py-2 hover:text-red-600 transition-colors cursor-pointer">Daftar</a>
          <a @click="scrollTo('faq')" class="block py-2 hover:text-red-600 transition-colors cursor-pointer">FAQ</a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-orange-400 to-red-500 text-white py-16 lg:py-20">
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div class="animate-fade-in-up">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Tebar Kebaikan Lewat <span class="text-yellow-300">Qurban</span>
          </h1>
          <p class="text-lg mb-6 opacity-90">
            Qurbanmu menjadi sumber gizi dan kebahagiaan bagi saudara kita yang membutuhkan. Mari bersama-sama berbagi berkah di hari yang mulia ini.
          </p>
          <button
            @click="scrollTo('daftar')"
            class="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Daftar Sekarang
          </button>
        </div>
        <div class="flex justify-center animate-fade-in-up">
          <div class="w-64 h-64 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div class="text-center">
              <div class="text-6xl mb-4">🐄</div>
              <p class="text-sm font-medium">Qurban Berkah</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Keunggulan Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Mengapa Memilih Qurban Amanah?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.id" class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">{{ feature.icon }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Harga Qurban -->
    <section id="harga" ref="harga" class="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="text-3xl font-bold text-center mb-10">Paket Harga Qurban</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(paket, index) in paketQurban" 
          :key="paket.id"
          class="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
          :class="{ 'border-2 border-red-600 transform scale-105': paket.popular }"
        >
          <div v-if="paket.popular" class="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span class="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">POPULER</span>
          </div>
          <div class="text-4xl mb-4">{{ paket.icon }}</div>
          <h3 class="text-xl font-semibold mb-2">{{ paket.name }}</h3>
          <p class="text-3xl font-bold text-red-600 mb-4">{{ formatCurrency(paket.price) }}</p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li v-for="benefit in paket.benefits" :key="benefit">✓ {{ benefit }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Form Pendaftaran -->
    <section id="daftar" ref="daftar" class="py-16 bg-gray-100">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-bold text-center mb-10">Form Pendaftaran Qurban</h2>
        <form @submit.prevent="submitForm" class="bg-white p-6 lg:p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label class="block text-sm font-medium mb-2">Nama Lengkap *</label>
            <input
              v-model="form.nama"
              type="text"
              class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              :class="{ 'border-red-500': errors.nama }"
              placeholder="Masukkan nama lengkap Anda"
            />
            <span v-if="errors.nama" class="text-red-500 text-sm">{{ errors.nama }}</span>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Nomor WhatsApp *</label>
            <input
              v-model="form.whatsapp"
              type="tel"
              class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              :class="{ 'border-red-500': errors.whatsapp }"
              placeholder="Contoh: 08123456789"
            />
            <span v-if="errors.whatsapp" class="text-red-500 text-sm">{{ errors.whatsapp }}</span>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="email@contoh.com (opsional)"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Paket Qurban *</label>
            <select 
              v-model="form.paket" 
              class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              :class="{ 'border-red-500': errors.paket }"
            >
              <option value="">Pilih Paket Qurban</option>
              <option v-for="paket in paketQurban" :key="paket.id" :value="paket.id">
                {{ paket.name }} - {{ formatCurrency(paket.price) }}
              </option>
            </select>
            <span v-if="errors.paket" class="text-red-500 text-sm">{{ errors.paket }}</span>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Alamat Lengkap</label>
            <textarea
              v-model="form.alamat"
              rows="3"
              class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Alamat lengkap untuk keperluan dokumentasi"
            ></textarea>
          </div>
          
          <button
            type="submit"
            class="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
            :disabled="loading"
          >
            {{ loading ? 'Mengirim...' : 'Daftar Qurban Sekarang' }}
          </button>
          
          <p class="text-xs text-gray-500 text-center">
            * Wajib diisi. Dengan mendaftar, Anda akan dihubungi melalui WhatsApp untuk konfirmasi pembayaran.
          </p>
        </form>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" ref="faq" class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-200 rounded-lg">
            <button 
              @click="toggleFAQ(index)"
              class="w-full px-6 py-4 text-left font-semibold hover:bg-gray-50 flex justify-between items-center"
            >
              {{ faq.question }}
              <span>{{ faq.open ? '-' : '+' }}</span>
            </button>
            <div v-show="faq.open" class="px-6 pb-4 text-gray-600">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-red-600 text-white py-8 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span class="text-red-600 font-bold text-sm">Q</span>
              </div>
              <span class="font-bold text-lg">Qurban Amanah</span>
            </div>
            <p class="text-sm opacity-90">Menebar kebaikan melalui qurban yang amanah dan terpercaya.</p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Kontak</h4>
            <p class="text-sm opacity-90 mb-2">📱 WhatsApp: {{ contact.whatsapp }}</p>
            <p class="text-sm opacity-90 mb-2">📧 Email: {{ contact.email }}</p>
            <p class="text-sm opacity-90">📍 {{ contact.address }}</p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Media Sosial</h4>
            <div class="space-y-2">
              <a v-for="social in socialMedia" :key="social.name" :href="social.url" target="_blank" class="block text-sm opacity-90 hover:opacity-100">
                {{ social.name }}: {{ social.handle }}
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-red-500 pt-6 text-center">
          <p class="text-sm opacity-90">&copy; {{ currentYear }} Qurban Amanah. Semua Hak Dilindungi.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Meta tags untuk SEO
useHead({
  title: 'Qurban Amanah - Tebar Kebaikan Lewat Qurban',
  meta: [
    { name: 'description', content: 'Daftarkan qurban Anda bersama Qurban Amanah. Pengelolaan terpercaya, transparan, dan tepat sasaran.' },
    { property: 'og:title', content: 'Qurban Amanah - Tebar Kebaikan Lewat Qurban' },
    { property: 'og:description', content: 'Daftarkan qurban Anda bersama Qurban Amanah. Pengelolaan terpercaya, transparan, dan tepat sasaran.' },
    { property: 'og:type', content: 'website' }
  ]
})

// Reactive data
const mobileMenuOpen = ref(false)
const loading = ref(false)

// Form data
const form = reactive({
  nama: '',
  whatsapp: '',
  email: '',
  paket: '',
  alamat: ''
})

// Form errors
const errors = reactive({
  nama: '',
  whatsapp: '',
  paket: ''
})

// Static data
const features = [
  {
    id: 1,
    icon: '✅',
    title: 'Terpercaya',
    description: 'Pengelolaan qurban yang transparan dan terpercaya sejak 2015'
  },
  {
    id: 2,
    icon: '🎯',
    title: 'Tepat Sasaran',
    description: 'Daging qurban disalurkan langsung kepada yang berhak menerimanya'
  },
  {
    id: 3,
    icon: '📱',
    title: 'Mudah',
    description: 'Pendaftaran online yang mudah dan cepat melalui WhatsApp'
  }
]

const paketQurban = [
  {
    id: 'kambing',
    name: 'Kambing',
    price: 2500000,
    icon: '🐐',
    benefits: ['Kambing berkualitas', 'Berat minimal 25kg', 'Sudah termasuk akikah'],
    popular: false
  },
  {
    id: 'sapi_1_7',
    name: 'Sapi (1/7)',
    price: 3500000,
    icon: '🐄',
    benefits: ['Sapi berkualitas tinggi', 'Berat minimal 250kg', 'Berbagi dengan 6 orang'],
    popular: true
  },
  {
    id: 'sapi_1_ekor',
    name: 'Sapi (1 Ekor)',
    price: 24500000,
    icon: '🐂',
    benefits: ['Sapi premium', 'Berat minimal 400kg', 'Untuk keluarga besar'],
    popular: false
  }
]

const faqs = reactive([
  {
    question: 'Kapan waktu penyembelihan?',
    answer: 'Penyembelihan akan dilaksanakan pada hari Raya Idul Adha setelah selesai shalat Eid, sesuai dengan ketentuan syariah.',
    open: false
  },
  {
    question: 'Bagaimana cara pembayaran?',
    answer: 'Pembayaran dapat dilakukan melalui transfer bank, e-wallet, atau cash. Tim kami akan menghubungi Anda untuk konfirmasi metode pembayaran yang dipilih.',
    open: false
  },
  {
    question: 'Apakah ada dokumentasi?',
    answer: 'Ya, kami menyediakan dokumentasi foto dan video proses penyembelihan serta pembagian daging qurban untuk setiap peserta.',
    open: false
  },
  {
    question: 'Ke mana daging qurban akan dibagikan?',
    answer: 'Daging qurban akan dibagikan kepada mustahik di wilayah Depok, Bogor, dan sekitarnya, termasuk yatim piatu, janda, dan keluarga kurang mampu.',
    open: false
  }
])

const contact = {
  whatsapp: '0812-3456-7890',
  email: 'info@qurbanamanah.com',
  address: 'Depok, Jawa Barat'
}

const socialMedia = [
  { name: 'Instagram', handle: '@qurbanamanah', url: '#' },
  { name: 'Facebook', handle: 'Qurban Amanah', url: '#' },
  { name: 'YouTube', handle: 'Qurban Amanah', url: '#' }
]

// Computed
const currentYear = computed(() => new Date().getFullYear())

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    mobileMenuOpen.value = false
  }
}

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount)
}

const toggleFAQ = (index) => {
  faqs[index].open = !faqs[index].open
}

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })

  let isValid = true

  // Validate nama
  if (!form.nama.trim()) {
    errors.nama = 'Nama harus diisi'
    isValid = false
  }

  // Validate WhatsApp
  const waRegex = /^(08|628|\+628)[0-9]{8,12}$/
  if (!form.whatsapp.trim()) {
    errors.whatsapp = 'Nomor WhatsApp harus diisi'
    isValid = false
  } else if (!waRegex.test(form.whatsapp.trim())) {
    errors.whatsapp = 'Format WhatsApp tidak valid'
    isValid = false
  }

  // Validate paket
  if (!form.paket) {
    errors.paket = 'Silakan pilih paket qurban'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return

  loading.value = true

  try {
    // Get selected package details
    const selectedPaket = paketQurban.find(p => p.id === form.paket)
    
    // Create WhatsApp message
    const message = `Assalamu'alaikum, saya ingin mendaftar qurban dengan data sebagai berikut:

Nama: ${form.nama}
WhatsApp: ${form.whatsapp}
Email: ${form.email || 'Tidak diisi'}
Paket: ${selectedPaket.name} - ${formatCurrency(selectedPaket.price)}
Alamat: ${form.alamat || 'Tidak diisi'}

Mohon informasi lebih lanjut untuk proses pembayaran. Terima kasih.`

    // Create WhatsApp URL
    const waNumber = contact.whatsapp.replace(/[^0-9]/g, '')
    const whatsappUrl = `https://wa.me/62${waNumber.substring(1)}?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    // Show success message
    alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk konfirmasi lebih lanjut.')
    
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Terjadi kesalahan. Silakan coba lagi.')
  } finally {
    loading.value = false
  }
}

// Lifecycle
onMounted(() => {
  // Add smooth scroll behavior
  if (process.client) {
    document.documentElement.style.scrollBehavior = 'smooth'
  }
})
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom scrollbar untuk area yang memerlukan */
.scroll-smooth {
  scroll-behavior: smooth;
}

/* Hover effects */
.hover\\:scale-105:hover {
  transform: scale(1.05);
}

/* Focus states untuk accessibility */
input:focus, select:focus, textarea:focus {
  outline: none;
  ring: 2px;
  ring-color: rgb(239 68 68);
}
</style>