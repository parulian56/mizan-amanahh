<template>
  <div class="font-sans text-gray-800">
    <!-- ================= HEADER ================= -->
    <header class="fixed top-0 w-full bg-white shadow z-50">
      <nav class="container mx-auto flex items-center py-4 px-6">
        <!-- Logo -->
        <div class="flex items-center space-x-2 font-bold text-red-600">
          <span class="text-xl">Ibadurrohman</span>
        </div>

        <!-- Desktop Menu (Center) -->
        <ul class="hidden md:flex md:space-x-8 font-medium items-center mx-auto">
          <li>
            <a href="#tentang" class="hover:text-red-600">Tentang</a>
          </li>

          <!-- Dropdown Program -->
          <li class="relative group">
            <NuxtLink to="/program" class="flex items-center hover:text-red-600">
              <span>Program</span>
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </NuxtLink>
            <ul class="absolute left-0 mt-2 w-40 bg-white shadow rounded hidden group-hover:block">
              <li><NuxtLink to="/program" class="block px-4 py-2 hover:bg-gray-100">Infaq</NuxtLink></li>
              <li><NuxtLink to="/program" class="block px-4 py-2 hover:bg-gray-100">Zakat</NuxtLink></li>
            </ul>
          </li>

          <!-- Dropdown Berita -->
          <li class="relative group">
            <NuxtLink to="/berita-update" class="flex items-center hover:text-red-600">
              <span>Berita & Update</span>
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </NuxtLink>
            <ul class="absolute left-0 mt-2 w-40 bg-white shadow rounded hidden group-hover:block">
              <li><NuxtLink to="/berita-update" class="block px-4 py-2 hover:bg-gray-100">Artikel</NuxtLink></li>
              <li><NuxtLink to="/berita-update" class="block px-4 py-2 hover:bg-gray-100">Pengumuman</NuxtLink></li>
            </ul>
          </li>

          <li>
            <a href="#kantor" class="hover:text-red-600">Kantor Cabang</a>
          </li>

          <li>
            <NuxtLink to="/syaratdanketentuan" class="hover:text-red-600">
              Syarat & Ketentuan
            </NuxtLink>
          </li>
        </ul>

        <!-- Login & Donasi (Far Right) -->
        <div class="hidden md:flex items-center space-x-4 ml-auto">
          <a href="#login" class="hover:text-red-600 font-medium">Log in</a>
          <a href="#donasi" class="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700">
            Donasi
          </a>
        </div>

        <!-- Hamburger (Mobile) -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden text-gray-700 focus:outline-none"
        >
          <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"/>
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
            <a href="#tentang" class="block px-6 py-3 hover:text-red-600">Tentang</a>
          </li>
          <li class="border-b">
            <NuxtLink to="/program" class="flex justify-between items-center px-6 py-3 hover:text-red-600">
              <span>Program</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </NuxtLink>
          </li>
          <li class="border-b">
            <NuxtLink to="/berita-update" class="flex justify-between items-center px-6 py-3 hover:text-red-600">
              <span>Berita & Update</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </NuxtLink>
          </li>
          <li class="border-b">
            <a href="#kantor" class="block px-6 py-3 hover:text-red-600">Kantor Cabang</a>
          </li>
          <li class="border-b">
            <NuxtLink to="/syaratdanketentuan" class="block px-6 py-3 hover:text-red-600">
              Syarat & Ketentuan
            </NuxtLink>
          </li>
          <li class="border-b">
            <a href="#login" class="block px-6 py-3 hover:text-red-600">Log in</a>
          </li>
          <li class="px-6 py-3">
            <a href="#donasi" class="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 inline-block">
              Donasi
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- ================= HERO ================= -->
    <section id="beranda" class="bg-gradient-to-br from-blue-50 to-gray-100 pt-32 pb-20">
      <div class="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <!-- Text -->
        <div>
          <h1 class="text-4xl font-bold text-gray-800 mb-4">
            Program Kemanusiaan <br />
            <span class="text-red-600">Ciptakan Harapan.</span>
          </h1>
          <p class="text-gray-600 mb-6">
            Bergabunglah dengan misi mulia kami untuk menciptakan harapan bagi mereka yang membutuhkan.
          </p>
          <NuxtLink to="/program" class="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700">
            Mulai Berdonasi
          </NuxtLink>
        </div>

        <!-- Ilustrasi -->
        <div class="flex justify-center relative">
          <div class="absolute w-72 h-72 bg-orange-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div class="relative z-10 w-48 h-48 bg-white rounded-lg shadow overflow-hidden">
             <img :src="logoOrang" alt="logo orang" />
            <div v-if="showPlaceholder"
              class="w-full h-full bg-gray-100 flex items-center justify-center">
              <div class="text-center text-gray-600">No Image</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PROGRAM ================= -->
    <section id="program" class="bg-gray-50 py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-center text-3xl font-bold text-gray-800 mb-12">Program Infaq dan Zakat</h2>
        <div class="flex justify-center gap-4 mb-10">
          <button class="px-6 py-2 rounded-full font-bold bg-red-600 text-white">Infaq</button>
          <button class="px-6 py-2 rounded-full font-bold bg-white text-gray-600 border">Zakat</button>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow hover:-translate-y-1 transition overflow-hidden">
            <div class="bg-red-600 text-white px-4 py-2 font-bold">Infaq Sedekah</div>
            <div class="p-5">
              <h3 class="text-lg font-bold text-gray-800 mb-2">Nazdar</h3>
              <p class="text-red-600 font-bold mb-2">Rp. 63.151.813 / Rp. 100.000.000</p>
              <p class="text-sm text-gray-600 mb-4">
                NAZDAR adalah menampung anak yatim yang tidak memiliki tempat tinggal...
              </p>
              <NuxtLink to="/program" class="text-red-600 font-bold">Read More</NuxtLink>
              <div class="mt-4">
                <NuxtLink to="/program" class="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold hover:bg-red-700">
                  Donasi
                </NuxtLink>
              </div>
            </div>
            <div class="bg-gray-100 px-5 py-3 flex justify-between items-center">
              <span class="text-sm text-gray-600">Batas: 31 Juli 2025</span>
              <button class="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold hover:bg-red-700">Donasi</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= BERITA ================= -->
    <section id="berita" class="py-20">
      <div class="container mx-auto px-6">
        <NuxtLink to="/berita-update" class="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold hover:bg-red-700">
          TEST
        </NuxtLink>        
        <div class="grid md:grid-cols-3 gap-8 mt-6">
          <div class="bg-white rounded-xl shadow overflow-hidden">
            <img :src="sedekah" alt="" />
            <div class="p-5">
              <span class="bg-red-600 text-white px-3 py-1 rounded-full text-xs">Artikel</span>
              <h3 class="font-bold text-lg mt-3">Doa Zakat Fitrah Beserta Arab...</h3>
              <NuxtLink to="/berita-update" class="text-red-600 font-bold">Read More</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= FOOTER ================= -->
    <footer class="bg-red-600 text-white py-12 mt-20">
      <div class="container mx-auto grid md:grid-cols-4 gap-8 px-6">
        <div>
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center font-bold mr-2">I</div>
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
            <input type="email" placeholder="Email Anda" class="px-3 py-2 w-full rounded-l bg-white text-gray-700" />
            <button class="bg-blue-600 px-4 rounded-r">OK</button>
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

// Import gambar dari folder assets
import logoOrang from '~/assets/logo_orang.png'
import sedekah from '~/assets/sedekah1.png'

const isOpen = ref(false)
const showPlaceholder = ref(false)
</script>
