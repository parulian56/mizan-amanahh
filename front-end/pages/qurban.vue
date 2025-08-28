<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <!-- Navbar -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <!-- Tombol Back -->
          <button @click="goBack" class="mr-3 p-2 rounded-full hover:bg-gray-100">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div class="w-8 h-8 bg-[#FB8603] rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-sm">Q</span>
          </div>
          <span class="font-bold text-[#FB8603] text-lg">Qurban Amanah</span>
        </div>
        <ul class="hidden md:flex space-x-6 font-medium">
          <li><a href="#tentang" class="hover:text-[#FB8603]">Tentang</a></li>
          <li><a href="#harga" class="hover:text-[#FB8603]">Harga</a></li>
          <li><a href="#daftar" class="hover:text-[#FB8603]">Daftar</a></li>
          <li><a href="#faq" class="hover:text-[#FB8603]">FAQ</a></li>
          <li><a href="#artikel" class="hover:text-[#FB8603]">Artikel</a></li>
        </ul>
        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode" class="ml-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <span v-if="darkMode">🌙</span>
          <span v-else>☀️</span>
        </button>
      </nav>
    </header>

    <!-- Hero -->
    <section class="relative bg-gradient-to-r from-orange-400 to-[#FB8603] text-white py-20">
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-5xl font-extrabold mb-4 leading-tight">
            Tunaikan Ibadah <span class="text-yellow-300">Qurban</span> dengan Amanah
          </h1>
          <p class="text-lg mb-6 opacity-90">
            Mudahkan qurbanmu bersama kami, distribusi merata untuk yang berhak, sesuai syariat, transparan, dan amanah.
          </p>
          <div class="space-y-4">
            <!-- Countdown -->
            <div class="bg-white text-[#FB8603] font-bold p-3 rounded-lg shadow-md inline-block">
              Batas Qurban: {{ countdown.days }}h {{ countdown.hours }}j {{ countdown.minutes }}m {{ countdown.seconds }}d
            </div>
            <button
              @click="scrollTo('daftar')"
              class="block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div class="flex justify-center">
          <img src="https://img.icons8.com/emoji/200/cow-emoji.png" alt="Qurban" class="w-56 h-56 lg:w-72 lg:h-72" />
        </div>
      </div>
    </section>

    <!-- Tentang Qurban -->
    <section id="tentang" class="py-16 bg-white text-center px-4">
      <h2 class="text-3xl font-bold text-[#FB8603] mb-6">Tentang Qurban</h2>
      <p class="max-w-3xl mx-auto text-gray-600 leading-relaxed">
        Qurban adalah ibadah yang diperintahkan Allah SWT sebagai bentuk ketaatan dan rasa syukur hamba-Nya.
        Dengan berqurban, kita meneladani Nabi Ibrahim AS dan Nabi Ismail AS. Hewan qurban akan disembelih
        pada Hari Raya Idul Adha hingga hari Tasyrik, lalu dagingnya dibagikan kepada yang membutuhkan.
      </p>
    </section>

    <!-- Harga Qurban -->
    <section id="harga" class="py-16 max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">Harga Hewan Qurban</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="paket in paketQurban" :key="paket.id" class="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <div class="text-5xl mb-4">{{ paket.icon }}</div>
          <h3 class="text-xl font-semibold mb-2">{{ paket.name }}</h3>
          <p class="text-2xl font-bold text-[#FB8603] mb-4">{{ formatCurrency(paket.price) }}</p>
          <button @click="scrollTo('daftar')" class="w-full bg-[#5DAAB9] text-white py-2 rounded-lg hover:bg-[#4c94a1]">
            Pilih Qurban
          </button>
        </div>
      </div>
    </section>

    <!-- 📌 Form Daftar Qurban -->
    <section id="daftar" class="py-20 bg-gray-100">
      <div class="max-w-4xl mx-auto px-6 bg-white p-8 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold text-center text-[#FB8603] mb-8">Form Pendaftaran Qurban</h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label class="block font-semibold mb-2">Nama Lengkap</label>
            <input v-model="form.nama" type="text" required class="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-[#FB8603]" />
          </div>
          <div>
            <label class="block font-semibold mb-2">Nomor Telepon</label>
            <input v-model="form.telepon" type="tel" required class="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-[#FB8603]" />
          </div>
          <div>
            <label class="block font-semibold mb-2">Alamat</label>
            <textarea v-model="form.alamat" required class="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-[#FB8603]"></textarea>
          </div>
          <div>
            <label class="block font-semibold mb-2">Pilih Paket Qurban</label>
            <select v-model="form.paket" required class="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-[#FB8603]">
              <option value="" disabled>Pilih Paket</option>
              <option v-for="paket in paketQurban" :key="paket.id" :value="paket.name">
                {{ paket.name }} - {{ formatCurrency(paket.price) }}
              </option>
            </select>
          </div>
          <button type="submit" class="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg">
            Kirim Pendaftaran
          </button>
        </form>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-10">FAQ</h2>
        <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-200 rounded-lg mb-4">
          <button @click="toggleFAQ(index)" class="w-full px-6 py-4 text-left font-semibold hover:bg-gray-50 flex justify-between">
            {{ faq.question }}
            <span>{{ faq.open ? '-' : '+' }}</span>
          </button>
          <div v-show="faq.open" class="px-6 pb-4 text-gray-600">{{ faq.answer }}</div>
        </div>
      </div>
    </section>

    <!-- 📌 Artikel -->
    <section id="artikel" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-[#FB8603] mb-10">Artikel Terbaru</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="artikel in artikels" :key="artikel.id" class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <img :src="artikel.image" alt="artikel" class="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 class="text-xl font-semibold mb-2">{{ artikel.title }}</h3>
            <p class="text-gray-600 mb-4 line-clamp-3">{{ artikel.excerpt }}</p>
            <a :href="artikel.link" target="_blank" class="text-[#FB8603] font-medium hover:underline">Baca Selengkapnya →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#FB8603] text-white py-8 mt-auto">
      <div class="max-w-7xl mx-auto px-4 text-center space-y-2">
        <p>&copy; {{ currentYear }} Qurban Amanah. Semua Hak Dilindungi.</p>
        <p>Hubungi kami: 0812-3456-7890 | Email: info@qurbanamanah.org</p>
      </div>
    </footer>

    <!-- WhatsApp Floating Button -->
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      class="fixed bottom-6 right-6 bg-[#5DAAB9] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-[#4c94a1]"
    >
      💬
    </a>
  </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const paketQurban = [
  { id: 1, name: "Kambing", price: 6000000, icon: "🐐" },
  { id: 2, name: "Domba", price: 7000000, icon: "🐏" },
  { id: 3, name: "Sapi 1/7", price: 200000000, icon: "🐄" },
  { id: 4, name: "Sapi 1 Ekor", price: 400000000, icon: "🐂" }
]

const form = reactive({
  nama: "",
  telepon: "",
  alamat: "",
  paket: ""
})

const submitForm = () => {
  alert(`Pendaftaran Qurban berhasil!\n\nNama: ${form.nama}\nTelepon: ${form.telepon}\nAlamat: ${form.alamat}\nPaket: ${form.paket}`)
  form.nama = ""
  form.telepon = ""
  form.alamat = ""
  form.paket = ""
}

const faqs = reactive([
  { question: "Kapan waktu penyembelihan qurban?", answer: "Setelah shalat Idul Adha hingga hari Tasyrik (11-13 Dzulhijjah).", open: false },
  { question: "Bagaimana cara pembayaran?", answer: "Bisa transfer bank, e-wallet, atau pembayaran tunai.", open: false },
  { question: "Apakah dapat dokumentasi?", answer: "Ya, tersedia foto/video penyembelihan dan pembagian.", open: false },
  { question: "Siapa yang menerima daging qurban?", answer: "Daging akan dibagikan kepada masyarakat yang berhak di daerah pelosok.", open: false }
])

// 📌 Artikel Data
const artikels = reactive([
  { id: 1, title: "Keutamaan Berqurban dalam Islam", excerpt: "Qurban bukan sekadar penyembelihan hewan, namun wujud ketaatan kepada Allah SWT...", image: "https://source.unsplash.com/400x300/?mosque", link: "#" },
  { id: 2, title: "Tips Memilih Hewan Qurban yang Baik", excerpt: "Hewan qurban harus memenuhi syarat: sehat, tidak cacat, dan cukup umur sesuai syariat...", image: "https://source.unsplash.com/400x300/?goat", link: "#" },
  { id: 3, title: "Distribusi Daging Qurban Merata", excerpt: "Dengan sistem distribusi modern, daging qurban bisa sampai ke pelosok negeri...", image: "https://source.unsplash.com/400x300/?cow", link: "#" }
])

const currentYear = computed(() => new Date().getFullYear())

// ✅ Tombol Back ke Home Vue
const goBack = () => {
  router.push("/") 
}

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount)
}

const toggleFAQ = (index) => {
  faqs[index].open = !faqs[index].open
}

const darkMode = ref(false)
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.documentElement.classList.toggle("dark", darkMode.value)
}

const countdown = reactive({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const targetDate = new Date("2025-06-09T00:00:00").getTime()

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate - now
  countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24))
  countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000)
}

onMounted(() => {
  setInterval(updateCountdown, 1000)
})
</script>
  