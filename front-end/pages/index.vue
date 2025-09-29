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
              <li><NuxtLink to="/program/program" class="block px-4 py-2 hover:bg-[#9BCDD4]">Program</NuxtLink></li>
              <li><NuxtLink to="/program/zakat" class="block px-4 py-2 hover:bg-[#9BCDD4]">Zakat</NuxtLink></li>
              <li><NuxtLink to="/program/sedekah" class="block px-4 py-2 hover:bg-[#9BCDD4]">Sedekah</NuxtLink></li>
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
              <li><NuxtLink to="/article/article" class="block px-4 py-2 hover:bg-[#9BCDD4]">Zakat</NuxtLink></li>
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
          <a href="/auth/login" class="hover:text-[#FB8505] font-medium">Log in</a>
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
            'absolute md:hidden top-16 left-0 w-full bg-[#FDB669] shadow-md transition-all',
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
          <div class="relative z-10 w-48 h-48 bg-[#FDB669] rounded-lg shadow overflow-hidden">
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
<footer class="bg-gray-100">
    <!-- Main Content -->
    <div class="container mx-auto px-4 py-8">
      <!-- Header Section -->
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Mitra Perusahaan</h2>
        <div class="bg-white rounded-lg p-4 shadow-sm max-w-2xl mx-auto">
          <p class="text-sm text-gray-600">
            Alhamdulillah Beberapa Perusahaan Telah Menyalurkan Donasinya Sebagai Bentuk
            Dukungan Kepada Yayasan Mizan Amanah
          </p>
        </div>
      </div>

      <!-- Partner Logos -->
      <div class="flex flex-wrap justify-center items-center gap-6 mb-12">
        <div class="bg-white rounded-lg p-4 shadow-sm w-24 h-16 flex items-center justify-center">
          <img src="assets/image/alfamart.png"></img>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-sm w-24 h-16 flex items-center justify-center">
          <img src="assets/image/forumzakat.png"></img>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-sm w-24 h-16 flex items-center justify-center">
          <div class="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center">
            <img src="assets/image/kemngan.png"></img>
          </div>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-sm w-24 h-16 flex items-center justify-center">
          <img src="assets/image/emco.png"></img>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-sm w-24 h-16 flex items-center justify-center">
          <img src="assets/image/gopay.png"></img>
        </div>
      </div>

      <!-- Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
              ibadurahman
            </div>
          </div>
          <p class="text-sm text-gray-600">
            Insan/lembaga yang sudah tidak mampu lagi bekerja atau berusaha
            dalam menafkahi keluarga yang tidak
            punya kerabat/saudara sebagai tempat berlindung.
          </p>
          
          <!-- Payment Methods -->
          <div class="flex space-x-2">
            <img src="assets/image/lulus.png" class="h-10" alt="BCA" />
            <img src="assets/image/uhhh.jpg" class="h-10" alt="BNI" />
            <img src="assets/image/goals.png" class="h-10" alt="BRI" />
            <img src="assets/image/ah.jpg" class="h-10" alt="Mandiri" />
          </div>
        </div>

        <!-- Program -->
        <div>
          <h3 class="font-semibold text-gray-800 mb-4">Program</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li><nuxt-link to="/rekening" class="hover:text-red-500">Rekening Donasi</nuxt-link></li>
            <li><nuxt-link to="/qurban" class="hover:text-red-500">Qurban</nuxt-link></li>
            <li><nuxt-link to="/laporan" class="hover:text-red-500">Laporan Audit</nuxt-link></li>
            <li><nuxt-link to="/zakat" class="hover:text-red-500">Zakat</nuxt-link></li>
            <li><nuxt-link to="/sedekah" class="hover:text-red-500">Sedekah</nuxt-link></li>
          </ul>
        </div>

        <!-- Layanan -->
        <div>
          <h3 class="font-semibold text-gray-800 mb-4">Layanan</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li><nuxt-link to="/tentang" class="hover:text-red-500">Tentang Kami</nuxt-link></li>
             <li><nuxt-link to="/wakaf" class="hover:text-red-500">wakaf</nuxt-link></li>
              <li><nuxt-link to="/kantorcabang" class="hover:text-red-500">Kantor Cabang</nuxt-link></li>
               <li><nuxt-link to="/syaratdanketentuan" class="hover:text-red-500">Syarat & Ketentuan</nuxt-link></li>
                <li><nuxt-link to="/tentang" class="hover:text-red-500">Artikel</nuxt-link></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="font-semibold text-gray-800 mb-4">Newsletter</h3>
          <form @submit.prevent="subscribeNewsletter" class="space-y-4">
            <div>
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-sm font-medium"
            >
              Berlangganan
            </button>
          </form>
          
          <!-- Warning -->
          <div class="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div class="flex items-start space-x-2">
              <div class="text-yellow-600">⚠️</div>
              <div class="text-xs text-yellow-800">
                <strong>Hati - hati penipuan mengatasnamakan Mizan Amanah.</strong> Seluruh donasi resmi hanya melalui situs website, aplikasi, dan rekening resmi Mizan Amanah SAJA!!!
              </div>
            </div>
          </div>

          <!-- App Download -->
          <div class="mt-6">
            <h4 class="font-semibold text-gray-800 mb-2 text-sm">Download Aplikasi:</h4>
            <div class="flex space-x-2">
              <a href="#" class="bg-black text-white px-3 py-1 rounded text-xs hover:bg-gray-800">
                App Store
              </a>
              <a href="#" class="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="bg-red-500 text-white py-4">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-sm">
            © 2025 Mizan Amanah. All rights reserved.
          </div>
          <div class="flex space-x-4 mt-2 md:mt-0">
            <a href="#" class="text-white hover:text-gray-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-white hover:text-gray-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" class="text-white hover:text-gray-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.163-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.753 2.864c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017-.001z"/>
              </svg>
            </a>
            <a href="#" class="text-white hover:text-gray-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
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