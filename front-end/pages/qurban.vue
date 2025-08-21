<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" class="h-10" />
          <span class="font-bold text-red-600 text-lg">Mizan Amanah</span>
        </div>
        <!-- Menu -->
        <ul class="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#" class="hover:text-red-600">Daftar Pequrban</a></li>
          <li><a href="#" class="hover:text-red-600">Dokumentasi</a></li>
          <li><a href="#" class="hover:text-red-600">FAQ</a></li>
          <li><a href="#" class="hover:text-red-600">Syarat &amp; Ketentuan</a></li>
          <li><a href="#" class="hover:text-red-600">Hukum Qurban</a></li>
          <li><a href="#" class="hover:text-red-600">Konsultasi Qurban</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-orange-400 to-red-500 text-white py-16">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <!-- Text -->
        <div>
          <h2 class="text-4xl font-extrabold mb-4">
            Kebermanfaatan <span class="text-yellow-300">Kurban</span>
          </h2>
          <p class="text-lg mb-6">
            Kurbanmu bantu gizi anak yatim Indonesia
          </p>

          <!-- Info -->
          <div class="grid grid-cols-3 gap-4 text-center">
            <div class="bg-white text-red-600 rounded-2xl shadow-md p-4">
              <p class="text-2xl font-bold">75</p>
              <p class="text-sm">Panti Asuhan</p>
            </div>
            <div class="bg-white text-red-600 rounded-2xl shadow-md p-4">
              <p class="text-2xl font-bold">5.000</p>
              <p class="text-sm">Anak Yatim</p>
            </div>
            <div class="bg-white text-red-600 rounded-2xl shadow-md p-4">
              <p class="text-2xl font-bold">13</p>
              <p class="text-sm">Rumah Belajar</p>
            </div>
          </div>

          <!-- Checklist -->
          <div class="mt-6 flex flex-col space-y-2 text-sm">
            <p>✅ Dibeli hewan langsung</p>
            <p>✅ Proses sesuai syariah</p>
            <p>✅ Disalurkan dengan amanah</p>
          </div>
        </div>

        <!-- Image -->
        <div class="flex justify-center">
          <img src="/qurban.png" alt="Qurban" class="rounded-2xl shadow-xl" />
        </div>
      </div>
    </section>

    <!-- Floating WhatsApp -->
    <a
      href="https://wa.me/628123456789"
      target="_blank"
      class="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg"
    >
      <svg
        class="w-6 h-6 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.37 0 0 5.37 0 12a11.92 11.92 0 0 0 1.66 6.03L0 24l6.22-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.21-3.48-8.52zM12 22c-1.82 0-3.58-.5-5.1-1.45l-.36-.21-3.7.96.99-3.61-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10 2.68 0 5.2 1.05 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.09-7.54c-.27-.14-1.61-.79-1.86-.88-.25-.1-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.33-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.84-2-.22-.52-.44-.45-.61-.46-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.34.98 2.64 1.11 2.82.14.18 1.92 2.93 4.67 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.7.11.52-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.2-.52-.34z"
        />
      </svg>
    </a>
  </div>
</template>

<script setup>
// Static landing page, no logic
</script>

<style scoped>
/* Optional custom style */
</style>
