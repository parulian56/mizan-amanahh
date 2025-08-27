<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-red-600 text-white py-4">
      <div class="container mx-auto px-4">
        <!-- Baris atas: tombol back + title -->
        <div class="flex items-center">
          <router-link to="/home" class="mr-3 flex items-center">
            <i class="fas fa-arrow-left text-xl"></i>
          </router-link>
          <h1 class="text-lg font-semibold">Profile Mizan Amanah</h1>
        </div>

        <!-- Breadcrumb -->
        <nav class="text-sm mt-2">
          <ul class="flex items-center space-x-2">
            <li><a href="/home" class="hover:underline">Home</a></li>
            <li>/</li>
            <li class="text-gray-200">Tentang</li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 bg-gray-100 py-10">
      <div class="container mx-auto px-4 max-w-4xl space-y-10">
        <!-- Profile Section -->
        <section>
          <h2 class="text-center text-2xl font-bold mb-4">Profile Mizan Amanah</h2>
          <div class="w-20 h-0.5 bg-red-600 mx-auto mb-6"></div>
          <div class="bg-white rounded-lg shadow p-6 text-justify leading-relaxed text-gray-700">
            <p>
              Yayasan Mizan Amanah adalah Lembaga Amil Zakat Nasional yang didirikan pada tanggal 19 Juli 1995.
              Yayasan Mizan Amanah mendapat izin untuk mengelola kegiatan zakat melalui Surat Keputusan
              Menteri Agama No. 764 Tahun 2002 dan Kementerian Agama Republik Indonesia melalui SK No. 109
              Tahun 2016.
            </p>
            <p class="mt-3">
              Lembaga Amil Zakat Nasional, sebagai Lembaga Amil Zakat Nasional (LAZNAS) Mizan Amanah
              bertanggung jawab melaksanakan pengelolaan zakat, infaq, dan shadaqah dengan cakupan wilayah
              nasional. ...
            </p>
            <p class="mt-3">
              ... (lanjutkan teks sesuai kebutuhan dari profil yang ada di gambar Anda)
            </p>
          </div>
        </section>

        <!-- Visi dan Misi -->
        <section>
          <h2 class="text-center text-2xl font-bold mb-4">Visi Dan Misi</h2>
          <div class="w-20 h-0.5 bg-red-600 mx-auto mb-6"></div>

          <!-- Visi -->
          <div class="bg-white rounded-lg shadow p-6 mb-4">
            <h3 class="font-semibold mb-2">Visi</h3>
            <p class="text-gray-700">
              Menjadi Lembaga amil zakat terpercaya di tingkat nasional dan membentuk generasi yang bermanfaat.
            </p>
          </div>

          <!-- Misi -->
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-semibold mb-2">Misi</h3>
            <p class="text-gray-700">
              Memfasilitasi layanan dan memberikan pelayanan prima bagi para pengguna kepentingan.
              Mengelola amanah para muzakki serta menyalurkan dana zakat sebagai bentuk keadilan sosial.
              Mendidik dan mengembangkan potensi anak yatim dan dhuafa untuk menjadi insan yang hakiki.
            </p>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-6">
      <div class="container mx-auto px-4 text-center text-sm">
        <p>© 2025 Mizan Amanah. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-3">
          <a href="#" class="hover:text-white">🌐</a>
          <a href="#" class="hover:text-white">📘</a>
          <a href="#" class="hover:text-white">🐦</a>
          <a href="#" class="hover:text-white">▶️</a>
        </div>
      </div>
    </footer>
  </div>
</template>
