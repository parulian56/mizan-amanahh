<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-primary text-white py-4 sticky top-0 z-50 shadow">
      <div class="container mx-auto px-4">
        <!-- Baris atas: tombol back + title -->
        <div class="flex items-center">
          <router-link to="/home" class="mr-3 flex items-center">
            <i class="fas fa-arrow-left text-xl"></i>
          </router-link>
          <h1 class="text-lg font-semibold">Profile Ibadurrohman</h1>
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
          <h2 class="text-center text-2xl font-bold mb-4">Profile Ibadurrohman</h2>
          <div class="w-20 h-0.5 bg-primary mx-auto mb-6"></div>
          <div class="bg-white rounded-lg shadow p-6 text-justify leading-relaxed text-gray-700">
            <p>
              Yayasan Mizan Amanah adalah Lembaga Amil Zakat Nasional yang didirikan pada tanggal 19 Juli 1995.
              Yayasan Mizan Amanah mendapat izin untuk mengelola kegiatan zakat melalui Surat Keputusan
              Menteri Agama No. 764 Tahun 2002 dan Kementerian Agama Republik Indonesia melalui SK No. 109 Tahun 2016.
            </p>
            <p class="mt-3">
              Sebagai Lembaga Amil Zakat Nasional (LAZNAS), Mizan Amanah bertanggung jawab melaksanakan pengelolaan
              zakat, infaq, dan shadaqah dengan cakupan wilayah nasional.
            </p>
            <p class="mt-3">
              Kami berkomitmen menghadirkan pengelolaan zakat yang amanah, transparan, dan berdampak pada kesejahteraan umat.
            </p>
          </div>
        </section>

        <!-- Visi dan Misi -->
        <section>
          <h2 class="text-center text-2xl font-bold mb-4">Visi Dan Misi</h2>
          <div class="w-20 h-0.5 bg-primary mx-auto mb-6"></div>

          <!-- Visi -->
          <div class="bg-white rounded-lg shadow p-6 mb-4 border-l-4 border-secondary">
            <h3 class="font-semibold mb-2 text-primary">Visi</h3>
            <p class="text-gray-700">
              Menjadi Lembaga Amil Zakat terpercaya di tingkat nasional dan membentuk generasi yang bermanfaat.
            </p>
          </div>

          <!-- Misi -->
          <div class="bg-white rounded-lg shadow p-6 border-l-4 border-secondary">
            <h3 class="font-semibold mb-2 text-primary">Misi</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Memfasilitasi layanan dan memberikan pelayanan prima bagi para pengguna kepentingan.</li>
              <li>Mengelola amanah para muzakki serta menyalurkan dana zakat sebagai bentuk keadilan sosial.</li>
              <li>Mendidik dan mengembangkan potensi anak yatim dan dhuafa untuk menjadi insan yang hakiki.</li>
            </ul>
          </div>
        </section>

        <!-- Nilai Inti -->
        <section>
          <h2 class="text-center text-2xl font-bold mb-4">Nilai Inti</h2>
          <div class="w-20 h-0.5 bg-primary mx-auto mb-6"></div>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white rounded-lg shadow p-6 text-center border-t-4 border-secondary">
              <h3 class="font-semibold text-primary mb-2">Amanah</h3>
              <p class="text-gray-600">Menjalankan kepercayaan dengan penuh tanggung jawab.</p>
            </div>
            <div class="bg-white rounded-lg shadow p-6 text-center border-t-4 border-secondary">
              <h3 class="font-semibold text-primary mb-2">Transparansi</h3>
              <p class="text-gray-600">Mengutamakan keterbukaan dalam laporan dan pengelolaan dana.</p>
            </div>
            <div class="bg-white rounded-lg shadow p-6 text-center border-t-4 border-secondary">
              <h3 class="font-semibold text-primary mb-2">Profesionalisme</h3>
              <p class="text-gray-600">Bekerja dengan sistem, standar, dan kualitas terbaik.</p>
            </div>
          </div>
        </section>

        <!-- Legalitas -->
        <section>
          <h2 class="text-center text-2xl font-bold mb-4">Legalitas</h2>
          <div class="w-20 h-0.5 bg-primary mx-auto mb-6"></div>
          <div class="bg-white rounded-lg shadow p-6 text-gray-700 space-y-2">
            <p>📜 SK Menteri Agama No. 764 Tahun 2002</p>
            <p>📜 SK Kementerian Agama RI No. 109 Tahun 2016</p>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-6">
      <div class="container mx-auto px-4 text-center text-sm">
        <p>© 2025 Ibadurrohman. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-3">
          <a href="#" class="hover:text-primary">🌐</a>
          <a href="#" class="hover:text-primary">📘</a>
          <a href="#" class="hover:text-primary">🐦</a>
          <a href="#" class="hover:text-primary">▶️</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Custom warna */
.bg-primary {
  background-color: #FB8603 !important;
}
.text-primary {
  color: #FB8603 !important;
}
.bg-secondary {
  background-color: #5DAAB9 !important;
}
.text-secondary {
  color: #5DAAB9 !important;
}
.border-secondary {
  border-color: #5DAAB9 !important;
}
</style>
