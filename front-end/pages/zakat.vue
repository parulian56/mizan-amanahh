<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-[#FB8505] text-white px-4 py-4 flex items-center space-x-2"
    >
      <router-link to="/" class="mr-3">
        <i class="fas fa-arrow-left text-xl"></i>
      </router-link>
      <h2 class="text-lg font-semibold">Zakat</h2>
    </nav>

    <!-- Breadcrumb -->
    <div
      class="fixed top-14 left-0 right-0 z-40 bg-[#FB8505] text-white px-4 py-2 text-sm"
    >
      <span v-if="page === 'home'">
        Home › <span class="text-[#FDB669] font-bold">Bayar-Zakat</span>
      </span>
      <span v-else-if="page === 'form'">
        Home › Bayar-Zakat ›
        <span class="text-[#FDB669] font-bold">Form-Zakat</span>
      </span>
      <span v-else-if="page === 'calc'">
        Home › Bayar-Zakat ›
        <span class="text-[#FDB669] font-bold">Kalkulator</span>
      </span>
      <span v-else-if="page === 'donate'">
        Home › <span class="text-[#FDB669] font-bold">Donate</span>
      </span>
    </div>

    <!-- Konten Utama -->
    <div class="pt-24">
      <!-- Halaman Utama -->
      <div v-if="page === 'home'" class="p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Card -->
          <div
            v-for="(item, index) in zakatList"
            :key="index"
            class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              :src="item.image"
              alt="zakat"
              class="w-full h-40 object-cover"
            />
            <div class="p-3 flex flex-col flex-1">
              <h3 class="font-semibold text-[#FB8505] text-sm">
                {{ item.title }}
              </h3>
              <p class="text-xs text-gray-600 mt-1 line-clamp-3">
                {{ item.description }}
              </p>

              <!-- Progress -->
              <div class="mt-3">
                <p class="text-xs text-gray-500">
                  Terkumpul
                  <span class="font-semibold"
                    >Rp. {{ item.collected.toLocaleString() }}</span
                  >
                  dari Rp. {{ item.target.toLocaleString() }}
                </p>
                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    class="bg-[#59AAB7] h-2 rounded-full"
                    :style="{
                      width: ((item.collected / item.target) * 100) + '%'
                    }"
                  ></div>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{{ item.deadline }}</span>
                  <span>Zakat</span>
                </div>
              </div>

              <!-- Button -->
              <div class="mt-auto pt-3">
                <button
                  @click="page = 'donate'"
                  class="w-full bg-[#FB8505] text-white text-sm py-2 rounded-lg shadow hover:bg-[#C96A04]"
                >
                  Donasi Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer CTA -->
        <div class="text-center mt-6 px-4">
          <p class="font-semibold">Bayar Zakat sekarang dengan Mizan Amanah</p>
          <p class="text-xs text-gray-600 mt-1">
            Saatnya Bayar Zakat. Bersihkan harta anda dengan zakat di Mizan
            Amanah. Insyallah Mudah, berkah dan amanah.
          </p>
          <div class="flex justify-center space-x-3 mt-4">
            <button
              @click="page = 'form'"
              class="bg-[#FB8505] text-white px-4 py-2 rounded-lg shadow text-sm hover:bg-[#C96A04]"
            >
              TUNAIKAN ZAKAT
            </button>
            <button
              @click="page = 'calc'"
              class="bg-[#59AAB7] text-white px-4 py-2 rounded-lg shadow text-sm hover:bg-[#478892]"
            >
              KALKULATOR ZAKAT
            </button>
          </div>
        </div>
      </div>

      <!-- Halaman Donasi -->
      <div v-else-if="page === 'donate'" class="p-4">
        <h2 class="text-center text-xl font-bold text-[#FB8505] mb-2">
          Donasi
        </h2>
        <p class="text-center text-sm text-red-500 mb-4">
          Silahkan Login atau isi data di bawah ini
        </p>

        <form class="space-y-4" @submit.prevent="submitDonasi">
          <div>
            <label class="block text-sm">Nama Lengkap</label>
            <input v-model="nama" type="text" class="w-full border-b focus:outline-none py-1" />
          </div>
          <div>
            <label class="block text-sm">No Handphone / Whatsapp</label>
            <input v-model="hp" type="text" class="w-full border-b focus:outline-none py-1" />
          </div>
          <div>
            <label class="block text-sm">Email</label>
            <input v-model="email" type="email" class="w-full border-b focus:outline-none py-1" />
          </div>

          <!-- Pilihan Nominal -->
          <div>
            <label class="block text-sm">Nominal Donasi</label>
            <div class="flex flex-wrap gap-2 mt-2">
              <button type="button" class="bg-red-600 text-white px-3 py-2 rounded-lg" @click="donasi = 1000000">
                Rp. 1.000.000
              </button>
              <button type="button" class="bg-red-600 text-white px-3 py-2 rounded-lg" @click="donasi = 500000">
                Rp. 500.000
              </button>
              <button type="button" class="bg-red-600 text-white px-3 py-2 rounded-lg" @click="donasi = 200000">
                Rp. 200.000
              </button>
              <button type="button" class="bg-red-600 text-white px-3 py-2 rounded-lg" @click="donasi = 100000">
                Rp. 100.000
              </button>
            </div>
          </div>

          <!-- Nominal Lain -->
          <div>
            <label class="block text-sm">Nominal Donasi Lainnya</label>
            <input v-model.number="donasi" type="number" class="w-full border-b focus:outline-none py-1" />
          </div>

          <!-- Tombol Aksi -->
          <button type="button" class="w-full bg-red-600 text-white py-2 rounded-lg" @click="showPayment = !showPayment">
            Pilih Metode Pembayaran
          </button>

          <!-- Metode Pembayaran -->
          <div v-if="showPayment" class="space-y-2">
            <label class="block">
              <input type="radio" value="Transfer Bank" v-model="metode" /> Transfer Bank
            </label>
            <label class="block">
              <input type="radio" value="E-Wallet" v-model="metode" /> E-Wallet
            </label>
            <label class="block">
              <input type="radio" value="VA (Virtual Account)" v-model="metode" /> Virtual Account
            </label>
          </div>

          <button type="submit" class="w-full bg-red-600 text-white py-2 rounded-lg">
            Donasi
          </button>
        </form>
      </div>

      <!-- Form Zakat -->
      <div v-else-if="page === 'form'" class="p-4">
        <h2 class="text-center text-xl font-bold text-[#FB8505] mb-2">
          Tunaikan Zakat
        </h2>
        <p class="text-center text-sm text-[#59AAB7] mb-4">
          Silahkan Login atau isi data di bawah ini
        </p>

        <form class="space-y-4">
          <div>
            <label class="block text-sm">Nama Lengkap</label>
            <input type="text" class="w-full border-b focus:outline-none py-1" />
          </div>
          <div>
            <label class="block text-sm">No Handphone / Whatsapp</label>
            <input type="text" class="w-full border-b focus:outline-none py-1" />
          </div>
          <div>
            <label class="block text-sm">Email</label>
            <input type="email" class="w-full border-b focus:outline-none py-1" />
          </div>
          <div>
            <label class="block text-sm">Kategori Zakat</label>
            <select class="w-full border-b py-1">
              <option>--- Pilih Kategori ---</option>
              <option>Zakat Penghasilan</option>
              <option>Zakat Pertanian</option>
              <option>Zakat Perdagangan</option>
            </select>
          </div>
          <div>
            <label class="block text-sm">Jumlah Zakat</label>
            <input type="number" value="0" class="w-full border-b focus:outline-none py-1" />
          </div>

          <button class="w-full bg-[#59AAB7] text-white py-2 rounded-lg hover:bg-[#478892]">
            Pilih Metode Pembayaran
          </button>
          <button class="w-full bg-[#FB8505] text-white py-2 rounded-lg hover:bg-[#C96A04]">
            Lanjutkan Pembayaran
          </button>
        </form>
      </div>

      <!-- Kalkulator Zakat -->
      <div v-else-if="page === 'calc'" class="p-4">
        <h2 class="text-center text-xl font-bold text-[#FB8505] mb-4">
          Perhitungan Zakat Penghasilan
        </h2>

        <form class="space-y-3">
          <label class="flex items-center gap-2">
            <input type="checkbox" /> SAYA PUNYA PERHITUNGAN SENDIRI (TANPA
            KALKULATOR)
          </label>

          <div>
            <label class="block text-sm">Penghasilan Per Bulan</label>
            <input type="number" value="0" class="w-full border rounded py-1 px-2" />
          </div>
          <div>
            <label class="block text-sm">Penghasilan Tambahan Per Bulan</label>
            <input type="number" value="0" class="w-full border rounded py-1 px-2" />
          </div>
          <div>
            <label class="block text-sm">Pengeluaran Pokok Per Bulan</label>
            <input type="number" value="0" class="w-full border rounded py-1 px-2" />
          </div>
          <div>
            <label class="block text-sm">Harga Beras (Kg)</label>
            <input type="number" value="0" class="w-full border rounded py-1 px-2" />
          </div>
          <div>
            <label class="block text-sm">NISHAB (Harga Beras x 522 Kg)</label>
            <input type="number" value="0" class="w-full border rounded py-1 px-2 bg-gray-100" readonly />
          </div>
          <div>
            <label class="block text-sm">Jumlah Bulan Yang Akan Dibayarkan Zakatnya</label>
            <input type="number" value="1" class="w-full border rounded py-1 px-2" />
          </div>
          <div>
            <label class="block text-sm">Besar Zakat Hasil Perhitungan</label>
            <input type="number" value="0" class="w-full border rounded py-1 px-2 bg-gray-100" readonly />
          </div>

          <p class="text-xs text-gray-600">
            Bismillah. Saya serahkan zakat saya kepada Yayasan Mizan Amanah
            agar dapat di kelola dengan sebaik-baiknya sesuai dengan ketentuan
            syariat agama.
          </p>

          <button class="w-full bg-[#FB8505] text-white py-2 rounded-lg hover:bg-[#C96A04]">
            BAYAR
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const page = ref("home");

const nama = ref("");
const hp = ref("");
const email = ref("");
const donasi = ref(0);
const metode = ref("");
const showPayment = ref(false);

const submitDonasi = () => {
  alert(`Donasi Berhasil!\nNama: ${nama.value}\nHP: ${hp.value}\nEmail: ${email.value}\nNominal: Rp ${donasi.value.toLocaleString()}\nMetode: ${metode.value}`);
};

const zakatList = ref([
  {
    title: "Tunaikan Zakat: Dekatkan Diri Menuju Surga Bersama Rasulullah",
    description:
      "Tak terasa kita sudah berada dipenghujung tahun 2020, lembaran baru akan kita ukir di tahun 2021. Sebagai seorang muslim tentu kita harus senantiasa mensyukuri nikmat yang Allah berikan selama ini.",
    collected: 454295053,
    target: 400000000,
    deadline: "Kamis, 31 Juli 2025",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Raih Pahala Berlipat: 2.5% Zakat Penghasilan Untuk Da’i Pelosok",
    description:
      "Bantu da’i di pelosok dengan zakat penghasilanmu, insyaAllah berkah.",
    collected: 1405557,
    target: 50000000,
    deadline: "Tanpa Batas Waktu",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Gajian Tiba, Tunaikan Zakat Penghasilanmu",
    description:
      "Zakat penghasilan adalah zakat dari profesi yang telah mencapai nisab.",
    collected: 1060980455,
    target: 1000000000,
    deadline: "Tanpa Batas Waktu",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Zakat Pertanian",
    description:
      "Zakat pertanian adalah zakat dari hasil tumbuh-tumbuhan atau tanaman yang bernilai ekonomi.",
    collected: 37000,
    target: 1000000000,
    deadline: "Tanpa Batas Waktu",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Zakat Barang Temuan",
    description:
      "Zakat barang temuan adalah zakat dari barang yang ditemukan dan memiliki nilai.",
    collected: 561248,
    target: 100000000,
    deadline: "Tanpa Batas Waktu",
    image: "https://via.placeholder.com/300x200",
  },
]);
</script>
