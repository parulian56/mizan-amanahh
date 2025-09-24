<template>
  <div class="font-sans text-[#111111]">
    <!-- ================= HEADER ================= -->
    <header class="fixed top-0 w-full bg-white shadow z-50">
      <nav class="container mx-auto flex items-center py-4 px-6">
        <!-- Logo -->
        <div class="flex items-center space-x-2 font-bold text-[#FB8505]">
          <span class="text-xl">Ibadurrohman</span>
        </div>

        <!-- Desktop Menu (Center) -->
        <ul class="hidden md:flex md:space-x-8 font-medium items-center mx-auto">
          <li>
            <a href="/tentang" class="hover:text-[#FB8505]">Tentang</a>
          </li>

          <!-- Dropdown Program -->
          <li class="relative">
            <button
              @click="openMenu === 'program' ? openMenu = null : openMenu = 'program'"
              class="flex items-center hover:text-[#FB8505]"
            >
              <span>Program</span>
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <ul
              v-show="openMenu === 'program'"
              class="absolute left-0 mt-2 w-48 bg-white shadow rounded transition z-50"
            >
              <li><NuxtLink to="/program" class="block px-4 py-2 hover:bg-[#9BCDD4]">Program</NuxtLink></li>
              <li><NuxtLink to="/zakat" class="block px-4 py-2 hover:bg-[#9BCDD4]">Zakat</NuxtLink></li>
              <li><NuxtLink to="/sedekah" class="block px-4 py-2 hover:bg-[#9BCDD4]">Sedekah</NuxtLink></li>
              <li><NuxtLink to="/rekening" class="block px-4 py-2 hover:bg-[#9BCDD4]">Rekening Donasi</NuxtLink></li>
              <li><NuxtLink to="/qurban" class="block px-4 py-2 hover:bg-[#9BCDD4]">Qurban</NuxtLink></li>
              <li><NuxtLink to="/laporan" class="block px-4 py-2 hover:bg-[#9BCDD4]">Laporan Audit</NuxtLink></li>
            </ul>
          </li>

          <!-- Dropdown Berita -->
          <li class="relative">
            <button
              @click="openMenu === 'berita' ? openMenu = null : openMenu = 'berita'"
              class="flex items-center hover:text-[#FB8505]"
            >
              <span>Berita & Update</span>
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <ul
              v-show="openMenu === 'berita'"
              class="absolute left-0 mt-2 w-40 bg-white shadow rounded transition z-50"
            >
              <li><NuxtLink to="/berita-update" class="block px-4 py-2 hover:bg-[#9BCDD4]">Berita</NuxtLink></li>
              <li><NuxtLink to="/wakaf" class="block px-4 py-2 hover:bg-[#9BCDD4]">Wakaf</NuxtLink></li>
              <li><NuxtLink to="/artikel" class="block px-4 py-2 hover:bg-[#9BCDD4]">Artikel</NuxtLink></li>
            </ul>
          </li>

          <li>
            <a href="/kantorcabang" class="hover:text-[#FB8505]">Kantor Cabang</a>
          </li>

          <li>
            <NuxtLink to="/syaratdanketentuan" class="hover:text-[#FB8505]">
              Syarat & Ketentuan
            </NuxtLink>
          </li>
        </ul>

        <!-- Login & Donasi (Far Right) -->
        <div class="hidden md:flex items-center space-x-4 ml-auto">
          <a href="login" class="hover:text-[#FB8505] font-medium">Log in</a>
          <a href="#donasi" class="bg-[#59AAB7] text-white px-5 py-2 rounded-full font-bold hover:bg-[#478892]">
            Donasi
          </a>
        </div>

        <!-- Hamburger (Mobile) -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-[#111111] focus:outline-none ml-auto"
        >
          <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Mobile Menu -->
        <ul
          :class="[
            'absolute md:hidden top-16 left-0 w-full bg-white shadow-md transition-all',
            isOpen ? 'block' : 'hidden'
          ]"
        >
          <li class="border-b">
            <a href="#tentang" class="block px-6 py-3 hover:text-[#FB8505]">Tentang</a>
          </li>
          <li class="border-b">
            <NuxtLink to="/program" class="flex justify-between items-center px-6 py-3 hover:text-[#FB8505]">
              <span>Program</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </NuxtLink>
          </li>
          <li class="border-b">
            <NuxtLink to="/berita-update" class="flex justify-between items-center px-6 py-3 hover:text-[#FB8505]">
              <span>Berita & Update</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </NuxtLink>
          </li>
          <li class="border-b">
            <a href="#kantor" class="block px-6 py-3 hover:text-[#FB8505]">Kantor Cabang</a>
          </li>
          <li class="border-b">
            <NuxtLink to="/syaratdanketentuan" class="block px-6 py-3 hover:text-[#FB8505]">
              Syarat & Ketentuan
            </NuxtLink>
          </li>
          <li class="border-b">
            <a href="login" class="block px-6 py-3 hover:text-[#FB8505]">Log in</a>
          </li>
          <li class="px-6 py-3">
            <a href="#donasi" class="bg-[#59AAB7] text-white px-5 py-2 rounded-full font-bold hover:bg-[#478892] inline-block">
              Donasi
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- ================= HERO ================= -->
    <section id="beranda" class="bg-gradient-to-br from-[#9BCDD4] to-gray-100 pt-32 pb-20">
      <div class="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <!-- Text -->
        <div>
          <h1 class="text-4xl font-bold text-[#111111] mb-4">
            Program Kemanusiaan <br />
            <span class="text-[#FB8505]">Ciptakan Harapan.</span>
          </h1>
          <p class="text-gray-600 mb-6">
            Bergabunglah dengan misi mulia kami untuk menciptakan harapan bagi mereka yang membutuhkan.
          </p>
          <NuxtLink to="/program" class="bg-[#FB8505] text-white px-6 py-3 rounded-full font-bold hover:bg-[#C96A04]">
            Mulai Berdonasi
          </NuxtLink>
        </div>

        <!-- Ilustrasi -->
        <div class="flex justify-center relative">
          <div class="absolute w-72 h-72 bg-[#FDB669] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div class="relative z-10 w-48 h-48 bg-white rounded-lg shadow overflow-hidden">
            <img :src="logoOrang" alt="logo orang" class="w-full h-full object-cover" />
            <div v-if="showPlaceholder" class="w-full h-full bg-gray-100 flex items-center justify-center">
              <div class="text-center text-gray-600">No Image</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PROGRAM ================= -->
    <section id="program" class="bg-gray-50 py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-center text-3xl font-bold text-[#111111] mb-12">Program Infaq dan Zakat</h2>
        <div class="flex justify-center gap-4 mb-10">
          <button class="px-6 py-2 rounded-full font-bold bg-[#FB8505] text-white hover:bg-[#C96A04]">Infaq</button>
          <button class="px-6 py-2 rounded-full font-bold bg-white text-[#111111] border">Zakat</button>
        </div>

        <!-- Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="bg-white rounded-xl shadow hover:-translate-y-1 transition overflow-hidden"
          >
            <div class="bg-[#FB8505] text-white px-4 py-2 font-bold">Infaq Sedekah</div>
            <img :src="card.image" :alt="card.title" class="w-full h-48 object-cover" />

            <div class="p-5">
              <h3 class="text-lg font-bold text-[#111111] mb-2 min-h-[66px] flex items-start">{{ card.title }}</h3>
              <p class="text-[#FB8505] font-bold mb-2">
                Rp. {{ card.terkumpul.toLocaleString() }} / Rp. {{ card.target.toLocaleString() }}
              </p>

              <!-- Progress Bar -->
              <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  class="bg-[#FB8505] h-2 rounded-full"
                  :style="{ width: (card.terkumpul / card.target * 100) + '%' }"
                ></div>
              </div>

              <p class="text-sm text-gray-600 mb-4">
                {{ card.deskripsi }}
              </p>
              <NuxtLink to="/program" class="text-[#FB8505] font-bold">Read More</NuxtLink>
              <div class="mt-4">
                <NuxtLink to="/program" class="bg-[#FB8505] text-white px-4 py-1 rounded-full text-sm font-bold hover:bg-[#C96A04]">
                  Donasi
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PROGRAM TAMBAHAN ================= -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <!-- Header Section -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 class="text-3xl font-bold text-[#111111] text-center mb-6">Program</h2>
          <p class="text-gray-600 leading-relaxed">
            Bergabung Program Lembaga Amil Zakat Mizan Amanah seperti Panti Asuhan Islam, 
            Santuman Anak Yatim, dan berbagai pilihan donasi online untuk membantu sesama. 
            Bergabung Program Lembaga Amil Zakat Mizan Amanah seperti Panti Asuhan Islam, 
            Santuman Anak Yatim, dan berbagai pilihan donasi online untuk membantu sesama. 
            Satu investasi yang dapat merubah jutaan hidup untuk kehidupan dunia dan akhirat. Aamiin
          </p>
        </div>

        <!-- Program Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          <!-- Card 1: Infaq Beras -->
          <div class="bg-white rounded-xl shadow-lg hover:-translate-y-1 transition duration-300 overflow-hidden">
            <div class="bg-[#FB8505] text-white px-4 py-2 font-bold text-sm">Infaq Sedekah</div>
            <img :src="sedekah1" alt="Infaq Beras" class="w-full h-48 object-cover" />
            <div class="p-5">
              <h3 class="text-lg font-bold text-[#111111] mb-3 min-h-[66px] flex items-start leading-tight">
                Infaq Beras Untuk Fakir,Miskin,Lansia,Yatim,&Dhuafa Penghafal,AlQuran
              </h3>
              <div class="mb-4">
                <p class="text-[#FB8505] font-bold text-sm mb-2">
                  Rp. {{ (63151813).toLocaleString() }} / Rp. {{ (100000000).toLocaleString() }}
                </p>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-[#FB8505] h-2 rounded-full" style="width: 63%"></div>
                </div>
              </div>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                NAZDAR adalah menampung anak yatim yang tidak memiliki tempat tinggal...
              </p>
              <a href="#" class="text-[#FB8505] font-bold text-sm hover:text-[#C96A04] transition mb-4 block">Read More</a>
              <button class="bg-[#FB8505] hover:bg-[#C96A04] text-white px-4 py-2 rounded-full font-bold text-sm transition duration-300">
                Donasi
              </button>
            </div>
          </div>

          <!-- Card 2: Berkah Dengan Sedekah -->
          <div class="bg-white rounded-xl shadow-lg hover:-translate-y-1 transition duration-300 overflow-hidden">
            <div class="bg-[#FB8505] text-white px-4 py-2 font-bold text-sm">Infaq Sedekah</div>
            <img :src="zakat" alt="Berkah Dengan Sedekah" class="w-full h-48 object-cover" />
            <div class="p-5">
              <h3 class="text-lg font-bold text-[#111111] mb-3 min-h-[66px] flex items-start leading-tight">
                Tunaikan Zakat: Dekatkan Diri Menuju Surga Bersama Rasulullah
              </h3>
              <div class="mb-4">
                <p class="text-[#FB8505] font-bold text-sm mb-2">
                  Rp. {{ (454645053).toLocaleString() }} / Rp. {{ ( 400000000).toLocaleString() }}
                </p>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-[#FB8505] h-2 rounded-full" style="width: 100%"></div>
                </div>
              </div>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                “Sembahlah Allah dan jangan menyekutukan-Nya dengan sesuatu pun. Dirikanlah shalat, tunaikan zakat dan sambunglah tali silaturrahim.”
              </p>
              <a href="#" class="text-[#FB8505] font-bold text-sm hover:text-[#C96A04] transition mb-4 block">Read More</a>
              <button class="bg-[#FB8505] hover:bg-[#C96A04] text-white px-4 py-2 rounded-full font-bold text-sm transition duration-300">
                Donasi
              </button>
            </div>
          </div>

          <!-- Card 3: Sedekah Yatim -->
          <div class="bg-white rounded-xl shadow-lg hover:-translate-y-1 transition duration-300 overflow-hidden">
            <div class="bg-[#FB8505] text-white px-4 py-2 font-bold text-sm">Infaq Sedekah</div>
            <img :src="nenekeja" alt="Sedekah Yatim" class="w-full h-48 object-cover" />
            <div class="p-5">
              <h3 class="text-lg font-bold text-[#111111] mb-3 min-h-[66px] flex items-start leading-tight">
                Sedekah Sembako & Bedah Rumah Nenek Eja Yang Hidup Sebatang Kara
              </h3>
              <div class="mb-4">
                <p class="text-[#FB8505] font-bold text-sm mb-2">
                  Rp. {{ (16138000).toLocaleString() }} / Rp. {{ (30000000).toLocaleString() }}
                </p>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-[#FB8505] h-2 rounded-full" style="width: 100%"></div>
                </div>
              </div>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
               Yuk orang-orang baik dan Sahabat Dermawan mari kita wujudkan Impian Nek Eja
              </p>
              <a href="#" class="text-[#FB8505] font-bold text-sm hover:text-[#C96A04] transition mb-4 block">Read More</a>
              <button class="bg-[#FB8505] hover:bg-[#C96A04] text-white px-4 py-2 rounded-full font-bold text-sm transition duration-300">
                Donasi
              </button>
            </div>
          </div>

        </div>
      </div>

        <div class="font-sans text-[#111111]">
    <!-- ================= UPDATE & BERITA ================= -->
    <section class="container mx-auto px-6 py-12">
      <h2 class="text-2xl font-bold text-center mb-8">Update & Berita</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in berita"
          :key="i"
          class="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-48 object-cover"
            loading="lazy"
            @error="event => handleImageError(event, fallback)"
          />
          <div class="p-4">
            <span
              class="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded mb-3"
            >
              Artikel
            </span>
            <h3 class="font-semibold text-lg mb-1">{{ item.title }}</h3>
            <p class="text-xs text-gray-500 mb-3">{{ item.date }}</p>
            <p class="text-sm text-gray-600 mb-4">
              {{ item.desc }}
            </p>
            <NuxtLink
              :to="item.link"
              class="text-red-600 font-semibold hover:underline text-sm"
            >
              Read More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= KATA MEREKA ================= -->
    <section class="container mx-auto px-6 py-12">
      <h2 class="text-2xl font-bold text-center mb-8">Kata Mereka</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in kataMereka"
          :key="i"
          class="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full h-48 object-cover"
            loading="lazy"
            @error="event => handleImageError(event, fallback)"
          />
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-1">{{ item.name }}</h3>
            <p class="text-xs text-gray-500 mb-3">{{ item.role }}</p>
            <p class="text-sm text-gray-600 mb-4">
              {{ item.text }}
            </p>
            <NuxtLink
              :to="item.link"
              class="text-red-600 font-semibold hover:underline text-sm"
            >
              Read More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>

    </section>

    <!-- ================= FOOTER ================= -->
    <footer class="bg-[#FB8505] text-white py-12 mt-20">
      <div class="container mx-auto grid md:grid-cols-4 gap-8 px-6">
        <div>
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-white text-[#FB8505] rounded-full flex items-center justify-center font-bold mr-2">I</div>
            <div>
              <h3 class="font-bold">Ibadurrohman</h3>
              <small>Yayasan</small>
            </div>
          </div>
          <p>Investasikan kepedulian Anda untuk masa depan mereka yang lebih baik.</p>
        </div>
        <div>
          <h3 class="font-bold mb-4">Program</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="#" class="hover:underline">Peduli Yatim Indonesia</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:underline">Peduli Pendidikan</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4">Lainnya</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/program" class="hover:underline">Peduli Yatim Indonesia</NuxtLink></li>
            <li><NuxtLink to="/program" class="hover:underline">Peduli Pendidikan</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4">Newsletter</h3>
          <div class="flex">
            <input type="email" placeholder="Email Anda" class="px-3 py-2 w-full rounded-l bg-white text-[#111111]" />
            <button class="bg-[#59AAB7] hover:bg-[#478892] px-4 rounded-r">OK</button>
          </div>
        </div>
      </div>
      <div class="text-center mt-10 border-t border-white pt-5">
        &copy; 2025 Ibadurrohman. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue"

// Import gambar
import logoOrang from '~/assets/image/logo_orang.png'
import sedekah1 from '~/assets/image/sedekah1.png'
import nazar from '~/assets/image/nazar.png'
import infaq from '~/assets/image/infaq.png'
import hadiah from '~/assets/image/hadiah.png'
import zakat from '~/assets/image/zakat.png'
import nenekeja from '~/assets/image/nenekeja.png'

const isOpen = ref(false)
const showPlaceholder = ref(false)
const openMenu = ref(null)

// Data Program Cards
const cards = [
  {
    title: 'Nazdar',
    image: nazar,
    terkumpul: 63151813,
    target: 100000000,
    deskripsi: 'NAZDAR adalah menampung anak yatim yang tidak memiliki tempat tinggal...',
    deadline: '31 Juli 2025'
  },
  {
    title: 'Berkah Dengan Sedekah',
    image: infaq,
    terkumpul: 1854740659,
    target: 1600000000,
    deskripsi: 'Mari kita jadikan sedekah sebagai gaya hidup. InsyaAllah...',
    deadline: '31 Juli 2025'
  },
  {
    title: 'Sedekah Yatim, Beri Hadiah Kebaikan Rayakan Lebaran Yatim',
    image: hadiah,
    terkumpul: 30341614,
    target: 30000000,
    deskripsi: 'Bantu bahagiakan anak yatim dengan hadiah di hari raya. Jadilah bagian dari kebahagiaan mereka.',
    deadline: '31 Juli 2025'
  }
]

// ====== IMPORT GAMBAR DARI assets ======
import mizan1 from '~/assets/image/mizan1.png'
import mizan2 from '~/assets/image/mizan2.png'
import mizan3 from '~/assets/image/mizan3.png'
import mizan4 from '~/assets/image/mizan4.png'
import mizan5 from '~/assets/image/mizan5.png'
import mizan6 from '~/assets/image/mizan6.png'

// fallback image (taruh di /public/image/fallback.png)
const fallback = '/image/fallback.png'

// Data artikel
const berita = [
  {
    title: 'Doa Zakat Fitrah Beserta Arti, Lafal dan Hukumnya',
    date: '2025-09-10 15:05:03',
    desc: 'Zakat fitrah merupakan ibadah yang wajib ditunaikan oleh umat Islam menjelang Idul Fitri.',
    link: '/mizan/1',
    image: mizan1,
  },
  {
    title: 'Pengertian Infaq dalam Islam: Keutamaan dan Cara Mengamalkannya',
    date: '2025-09-10 15:05:04',
    desc: 'Infaq adalah ibadah dalam bentuk pengeluaran harta di jalan Allah untuk membantu sesama.',
    link: '/mizan/2',
    image: mizan2,
  },
  {
    title: 'Jariyah Artinya Amal yang Tak Terputus: Inilah Contoh dan Keutamaannya',
    date: '2025-09-10 15:05:05',
    desc: 'Amal jariyah adalah amalan yang pahalanya terus mengalir meskipun pelakunya telah meninggal dunia.',
    link: '/mizan/3',
    image: mizan3,
  },
]

// Data testimoni
const kataMereka = [
  {
    name: 'Aini, A.Md Keb.',
    role: 'Penerima Program Pendidikan',
    text: 'Alhamdulillah Mizan Amanah sangat membantu dalam kelanjutan pendidikan saya...',
    link: 'front-end/assets/image/mizan4.png',
    image: mizan4,
  },
  {
    name: 'Wicno Kusumo',
    role: 'Penerima Program Ekonomi',
    text: 'Mizan Amanah membantu saya mendapatkan modal usaha hingga bisa berkembang...',
    link: 'front-end/assets/image/mizan5.png',
    image: mizan5,
  },
  {
    name: 'Ust. Budi Ashari, Lc',
    role: 'Pembina Yayasan',
    text: 'Mizan Amanah hadir dengan semangat membantu sesama, terutama dalam bidang pendidikan dan ekonomi umat...',
    link: 'front-end/assets/image/mizan6.png',
    image: mizan6,
  },
]

// Handle error image
function handleImageError(event, fallbackUrl) {
  event.target.src = fallbackUrl
}

</script>