<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <!-- Navbar -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <span class="font-bold text-red-600 text-lg">Qurban Amanah</span>
        </div>
        <ul class="hidden md:flex space-x-6 font-medium">
          <li><a href="#harga" class="hover:text-red-600">Harga</a></li>
          <li><a href="#daftar" class="hover:text-red-600">Daftar</a></li>
          <li><a href="#faq" class="hover:text-red-600">FAQ</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-orange-400 to-red-500 text-white py-16">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
            Tebar Kebaikan Lewat <span class="text-yellow-300">Qurban</span>
          </h1>
          <p class="text-lg mb-6">
            Qurbanmu menjadi sumber gizi dan kebahagiaan bagi saudara kita yang membutuhkan.
          </p>
          <a
            href="#daftar"
            class="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Daftar Sekarang
          </a>
        </div>
        <div class="flex justify-center">
        </div>
      </div>
    </section>

    <!-- Harga Qurban -->
    <section id="harga" class="py-16 max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-10">Harga Paket Qurban</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h3 class="text-xl font-semibold mb-2">Kambing</h3>
          <p class="text-2xl font-bold text-red-600">Rp 2.500.000</p>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-6 text-center border-2 border-red-600">
          <h3 class="text-xl font-semibold mb-2">Sapi (1/7)</h3>
          <p class="text-2xl font-bold text-red-600">Rp 3.500.000</p>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h3 class="text-xl font-semibold mb-2">Sapi (1 Ekor)</h3>
          <p class="text-2xl font-bold text-red-600">Rp 24.500.000</p>
        </div>
      </div>
    </section>

    <!-- Form Pendaftaran -->
    <section id="daftar" class="py-16 bg-gray-100">
      <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-10">Form Pendaftaran Qurban</h2>
        <form class="bg-white p-6 rounded-2xl shadow-lg space-y-4">
          <div>
            <label class="block text-sm font-medium">Nama Lengkap</label>
            <input
              type="text"
              class="w-full border rounded-lg p-2 mt-1"
              placeholder="Masukkan nama lengkap"
            />
          </div>
          <div>
            <label class="block text-sm font-medium">Nomor WhatsApp</label>
            <input
              type="text"
              class="w-full border rounded-lg p-2 mt-1"
              placeholder="08xxxx"
            />
          </div>
          <div>
            <label class="block text-sm font-medium">Paket Qurban</label>
            <select class="w-full border rounded-lg p-2 mt-1">
              <option>Pilih Paket</option>
              <option>Kambing - Rp 2.500.000</option>
              <option>Sapi (1/7) - Rp 3.500.000</option>
              <option>Sapi (1 ekor) - Rp 24.500.000</option>
            </select>
          </div>
          <button
            type="submit"
            class="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold"
          >
            Daftar Qurban
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-red-600 text-white py-6 mt-auto">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p>&copy; 2025 Qurban Amanah. Semua Hak Dilindungi.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Halaman masih UI statis, belum ada interaktivitas
</script>
