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
          <h2 class="text-4xl font-extrabold mb-4">
            Tunaikan Ibadah Qurban<br />dengan Amanah
          </h2>
          <p class="mb-6">
            Mudahkan qurbanmu bersama kami, distribusi merata untuk yang berhak,
            sesuai syariat, transparan, dan amanah.
          </p>
          <!-- Countdown -->
          <div class="mb-4">
            <span
              class="px-3 py-2 rounded bg-white text-black font-semibold"
            >
              Batas Qurban: {{ countdown.days }}h {{ countdown.hours }}j
              {{ countdown.minutes }}m {{ countdown.seconds }}d
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
          <img
            src="/assets/image/sedekah1.png"
            alt="Qurban"
            class="rounded-lg shadow-lg w-full md:w-96"
          />
        </div>
      </div>
    </section>

    <!-- Tentang Qurban -->
    <section id="tentang" class="px-4 py-16 text-center bg-white">
      <h2 class="mb-6 text-3xl font-bold text-center">Tentang Qurban</h2>
      <p class="max-w-3xl mx-auto leading-relaxed text-gray-600">
        Qurban adalah ibadah yang diperintahkan Allah SWT sebagai bentuk
        ketaatan dan rasa syukur hamba-Nya. Dengan berqurban, kita meneladani
        Nabi Ibrahim AS dan Nabi Ismail AS. Hewan qurban akan disembelih pada
        Hari Raya Idul Adha hingga hari Tasyrik, lalu dagingnya dibagikan
        kepada yang membutuhkan.
      </p>
    </section>

    <!-- Harga Qurban -->
    <section id="harga" class="px-4 py-16 mx-auto max-w-7xl">
      <h2 class="mb-10 text-3xl font-bold text-center">Harga Hewan Qurban</h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="paket in paketQurban"
          :key="paket.id"
          class="p-6 text-center transition bg-white shadow-lg rounded-xl hover:shadow-xl"
        >
          <div class="mb-4 text-5xl">{{ paket.icon }}</div>
          <h3 class="mb-2 text-xl font-semibold">{{ paket.name }}</h3>
          <p class="mb-4 text-2xl font-bold text-center">
            {{ formatCurrency(paket.price) }}
          </p>

        </div>
      </div>
    </section>

    <!-- 📌 Form Daftar Qurban -->
    <section id="daftar" class="py-20 bg-gray-100">
      <div class="max-w-4xl p-8 px-6 mx-auto bg-white shadow-lg rounded-xl">
        <h2 class="mb-8 text-3xl font-bold text-center">
          Form Pendaftaran Qurban
        </h2>

        <!-- FORM -->
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Nama -->
          <div>
            <label class="block mb-2 font-semibold">Nama Lengkap</label>
            <input
              v-model="form.nama"
              type="text"
              class="w-full border rounded p-2"
              required
            />
          </div>

          <!-- Telepon -->
          <div>
            <label class="block mb-2 font-semibold">Nomor Telepon</label>
            <input
              v-model="form.telepon"
              type="tel"
              class="w-full border rounded p-2"
              required
            />
          </div>

          <!-- Alamat -->
          <div>
            <label class="block mb-2 font-semibold">Alamat</label>
            <textarea
              v-model="form.alamat"
              class="w-full border rounded p-2"
              required
            ></textarea>
          </div>

          <!-- Paket -->
          <div>
            <label class="block mb-2 font-semibold">Paket Qurban</label>
            <select
              v-model="form.paket"
              class="w-full border rounded p-2"
              required
            >
              <option value="">-- Pilih Paket --</option>
              <option value="Kambing">Kambing</option>
              <option value="Sapi">Sapi</option>
              <option value="Sapi 1/7">Sapi (1/7)</option>
              <option value="Kerbau">Kerbau</option>
            </select>
          </div>

          <!-- Tombol -->
          <button
            type="submit"
            class="w-full bg-sky-600 text-white p-3 rounded hover:bg-green-700"
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
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="mb-4 border border-gray-200 rounded-lg"
        >
          <button
            @click="toggleFAQ(index)"
            class="flex justify-between w-full px-6 py-4 font-semibold text-left hover:bg-gray-50"
          >
            {{ faq.question }}
            <span>{{ faq.open ? "-" : "+" }}</span>
          </button>
          <div v-show="faq.open" class="px-6 pb-4 text-gray-600">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </section>

    <!-- 📌 Artikel -->
    <section id="artikel" class="py-16 bg-gray-50">
      <div class="max-w-6xl px-4 mx-auto">
        <h2 class="mb-10 text-3xl font-bold text-center">Artikel Terbaru</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div
            v-for="artikel in artikels"
            :key="artikel.id"
            class="p-6 transition bg-white shadow-lg rounded-xl hover:shadow-xl"
          >
            <img
              :src="artikel.image"
              alt="artikel"
              class="object-cover w-full h-40 mb-4 rounded-lg"
            />
            <h3 class="mb-2 text-xl font-semibold">{{ artikel.title }}</h3>
            <p class="mb-4 text-gray-600 line-clamp-3">
              {{ artikel.excerpt }}
            </p>
            <a
              :href="artikel.link"
              target="_blank"
              class="text-[#FB8603] font-medium hover:underline"
              >Baca Selengkapnya →</a
            >
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
import { reactive, computed, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const form = reactive({
  nama: "",
  telepon: "",
  alamat: "",
  paket: ""
})

// ✅ Function daftarSekarang
const daftarSekarang = () => {
  const nomor = "6283153611239"
  const pesan = encodeURIComponent("Assalamualaikum, saya ingin daftar qurban.")
  window.open(`https://wa.me/${nomor}?text=${pesan}`, "_blank")
}

// ✅ Nomor WA tujuan global
const noWaTujuan = "6283153611239"

const submitForm = async () => {
  const payload = { ...form }

  await fetch("http://localhost:3000/pendaftaran", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const pesan = `
Assalamu'alaikum, saya ingin mendaftar Qurban:

👤 Nama: ${form.nama}
📞 Telepon: ${form.telepon}
🏠 Alamat: ${form.alamat}
🐄 Paket: ${form.paket}
`
  const url = `https://wa.me/${noWaTujuan}?text=${encodeURIComponent(pesan)}`
  window.open(url, "_blank")

  form.nama = ""
  form.telepon = ""
  form.alamat = ""
  form.paket = ""
}

// 📌 Artikel Data
const artikels = reactive([
  { 
    id: 1, 
    title: "Keutamaan Berqurban dalam Islam", 
    excerpt: "Qurban bukan sekadar penyembelihan hewan, namun wujud ketaatan kepada Allah SWT...", 
    image: "/assets/image/mizan7.jpg", 
    link: "#" 
  },
  { 
    id: 2, 
    title: "Tips Memilih Hewan Qurban yang Baik", 
    excerpt: "Hewan qurban harus memenuhi syarat: sehat, tidak cacat, dan cukup umur sesuai syariat...", 
    image: "https://source.unsplash.com/400x300/?goat", 
    link: "#" 
  },
  { 
    id: 3, 
    title: "Distribusi Daging Qurban Merata", 
    excerpt: "Dengan sistem distribusi modern, daging qurban bisa sampai ke pelosok negeri...", 
    image: "https://source.unsplash.com/400x300/?cow", 
    link: "#" 
  },
])

// 📌 Paket Qurban Data
const paketQurban = reactive([
  { id: 1, name: "Kambing", price: 2500000, icon: "🐐" },
  { id: 2, name: "Sapi", price: 17500000, icon: "🐄" },
  { id: 3, name: "Sapi (1/7)", price: 2500000, icon: "🐄" },
  { id: 4, name: "Kerbau", price: 16000000, icon: "🐃" },
])

// 📌 FAQ Data
const faqs = reactive([
  {
    question: "Bagaimana cara mendaftar qurban?",
    answer: "Isi form pendaftaran dan pilih paket qurban yang tersedia.",
    open: false,
  },
  {
    question: "Kapan batas waktu pendaftaran?",
    answer: "Batas waktu pendaftaran hingga H-1 Idul Adha.",
    open: false,
  },
  {
    question: "Apakah ada laporan distribusi?",
    answer: "Ya, kami menyediakan laporan distribusi untuk setiap peserta qurban.",
    open: false,
  },
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
