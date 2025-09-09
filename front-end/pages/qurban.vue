<template>
  <div class="flex flex-col min-h-screen text-gray-800 bg-gray-50">
    <!-- Navbar -->
    <header class="sticky top-0 z-50 bg-[#E9741C] shadow-md">
      <div class="px-6 py-6 mx-auto max-w-7xl text-white">
        <!-- Baris Atas: Back + Judul -->
        <div class="flex items-center mb-1">
          <!-- Tombol Back -->
          <router-link to="/" class="mr-2 flex items-center">
            <i class="fas fa-arrow-left text-xl"></i>
          </router-link>
          <!-- Judul -->
          <h1 class="text-2xl font-bold">Program</h1>
        </div>

        <!-- Breadcrumb -->
        <nav class="text-sm opacity-90">
          <router-link to="/" class="hover:underline">Home</router-link>
          <span class="mx-1">/</span>
          <span>Tentang</span>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-[#E9741C] py-16">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center text-white">
        <!-- Teks -->
        <div>
          <h2 class="text-4xl font-extrabold mb-4">Tunaikan Ibadah Qurban<br />dengan Amanah</h2>
          <p class="mb-6">Mudahkan qurbanmu bersama kami, distribusi merata untuk yang berhak, sesuai syariat, transparan, dan amanah.</p>
          <!-- Countdown -->
          <div class="mb-4">
            <span class="px-3 py-2 rounded bg-white text-black font-semibold">
              Batas Qurban: {{ countdown.days }}h {{ countdown.hours }}j {{ countdown.minutes }}m {{ countdown.seconds }}d
            </span>
          </div>
          <!-- Button -->
          <button 
            @click="daftarSekarang"
            class="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded shadow-md"
          >
            Daftar Sekarang
          </button>
        </div>
        <!-- Gambar -->
        <div class="flex justify-center">
          <img src="/assets/image/sedekah1.png" alt="Qurban" class="rounded-lg shadow-lg w-full md:w-96" />
        </div>
      </div>
    </section>

    <!-- Tentang Qurban -->
    <section id="tentang" class="px-4 py-16 text-center bg-white">
      <h2 class="mb-6 text-3xl font-bold text-center">Tentang Qurban</h2>
      <p class="max-w-3xl mx-auto leading-relaxed text-gray-600">
        Qurban adalah ibadah yang diperintahkan Allah SWT sebagai bentuk ketaatan dan rasa syukur hamba-Nya.
        Dengan berqurban, kita meneladani Nabi Ibrahim AS dan Nabi Ismail AS. Hewan qurban akan disembelih
        pada Hari Raya Idul Adha hingga hari Tasyrik, lalu dagingnya dibagikan kepada yang membutuhkan.
      </p>
    </section>

    <!-- Harga Qurban -->
    <section id="harga" class="px-4 py-16 mx-auto max-w-7xl">
      <h2 class="mb-10 text-3xl font-bold text-center">Harga Hewan Qurban</h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="paket in paketQurban" :key="paket.id" class="p-6 text-center transition bg-white shadow-lg rounded-xl hover:shadow-xl">
          <div class="mb-4 text-5xl">{{ paket.icon }}</div>
          <h3 class="mb-2 text-xl font-semibold">{{ paket.name }}</h3>
          <p class="mb-4 text-2xl font-bold text-center">{{ formatCurrency(paket.price) }}</p>
          <button @click="scrollTo('daftar')" class="w-full bg-[#5DAAB9] text-white py-2 rounded-lg hover:bg-[#4c94a1]">
            Pilih Qurban
          </button>
        </div>
      </div>
    </section>

    <!-- 📌 Form Daftar Qurban -->
    <section id="daftar" class="py-20 bg-gray-100">
      <div class="max-w-4xl p-8 px-6 mx-auto bg-white shadow-lg rounded-xl">
        <h2 class="mb-8 text-3xl font-bold text-center">Form Pendaftaran Qurban</h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label class="block mb-2 font-semibold">Nama Lengkap</label>
            <input v-model="form.nama" type="text" required class="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-[#FB8603]" />
          </div>
          <div>
            <label class="block mb-2 font-semibold">Nomor Telepon</label>
            <input v-model="form.telepon" type="tel" required class="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-[#FB8603]" />
          </div>
          <div>
            <label class="block mb-2 font-semibold">Alamat</label>
            <textarea v-model="form.alamat" required class="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-[#FB8603]"></textarea>
          </div>
          <div>
            <label class="block mb-2 font-semibold">Pilih Paket Qurban</label>
            <select v-model="form.paket" required class="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-[#FB8603]">
              <option value="" disabled>Pilih Paket</option>
              <option v-for="paket in paketQurban" :key="paket.id" :value="paket.name">
                {{ paket.name }} - {{ formatCurrency(paket.price) }}
              </option>
            </select>
          </div>
          <!-- Button Kirim Pendaftaran -->
          <button 
            type="submit" 
            class="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded-lg !bg-[#5DAAB9] hover:!bg-[#4c94a1]"
          >
            Kirim Pendaftaran
          </button>
        </form>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-16 bg-white">
      <div class="max-w-4xl px-4 mx-auto">
        <h2 class="mb-10 text-3xl font-bold text-center">FAQ</h2>
        <div v-for="(faq, index) in faqs" :key="index" class="mb-4 border border-gray-200 rounded-lg">
          <button @click="toggleFAQ(index)" class="flex justify-between w-full px-6 py-4 font-semibold text-left hover:bg-gray-50">
            {{ faq.question }}
            <span>{{ faq.open ? '-' : '+' }}</span>
          </button>
          <div v-show="faq.open" class="px-6 pb-4 text-gray-600">{{ faq.answer }}</div>
        </div>
      </div>
    </section>

    <!-- 📌 Artikel -->
    <section id="artikel" class="py-16 bg-gray-50">
      <div class="max-w-6xl px-4 mx-auto">
        <h2 class="mb-10 text-3xl font-bold text-center">Artikel Terbaru</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div v-for="artikel in artikels" :key="artikel.id" class="p-6 transition bg-white shadow-lg rounded-xl hover:shadow-xl">
            <img :src="artikel.image" alt="artikel" class="object-cover w-full h-40 mb-4 rounded-lg" />
            <h3 class="mb-2 text-xl font-semibold">{{ artikel.title }}</h3>
            <p class="mb-4 text-gray-600 line-clamp-3">{{ artikel.excerpt }}</p>
            <a :href="artikel.link" target="_blank" class="text-[#FB8603] font-medium hover:underline">Baca Selengkapnya →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#E9741C] text-white py-8 mt-auto">
      <div class="px-4 mx-auto space-y-2 text-center max-w-7xl">
        <p>&copy; {{ currentYear }} Qurban Amanah. Semua Hak Dilindungi.</p>
        <p>Hubungi kami: 0812-3456-7890 | Email: info@qurbanamanah.org</p>
      </div>
    </footer>

    <!-- WhatsApp Floating Button -->
    <a
      href="https://wa.me/6283153611239"
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
  { id: 3, name: "Sapi 1/7", price: 20000000, icon: "🐄" },
  { id: 4, name: "Sapi 1 Ekor", price: 40000000, icon: "🐂" }
]

const form = reactive({
  nama: "",
  telepon: "",
  alamat: "",
  paket: ""
})

const noWaTujuan = "6283153611239" // ✅ format internasional

// ✅ Form Pendaftaran -> WhatsApp
const submitForm = () => {
  const pesan = `
Assalamu'alaikum, saya ingin mendaftar Qurban:

👤 Nama: ${form.nama}
📞 Telepon: ${form.telepon}
🏠 Alamat: ${form.alamat}
🐄 Paket: ${form.paket}
`
  const url = `https://wa.me/${noWaTujuan}?text=${encodeURIComponent(pesan)}`
  window.open(url, "_blank")

  // reset form
  form.nama = ""
  form.telepon = ""
  form.alamat = ""
  form.paket = ""
}

// ✅ Tombol Daftar Sekarang -> WhatsApp
const daftarSekarang = () => {
  const pesan = "Assalamu'alaikum, saya ingin daftar Qurban sekarang."
  const url = `https://wa.me/${noWaTujuan}?text=${encodeURIComponent(pesan)}`
  window.open(url, "_blank")
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

const goBack = () => {
  router.push("/") 
}

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount)
}

const toggleFAQ = (index) => {
  faqs[index].open = !faqs[index].open
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
