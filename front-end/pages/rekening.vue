<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar -->
   <header class="bg-red-600 text-white py-4 sticky top-0 z-50 shadow">
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
            <li class="text-gray-200">Rekening Donasi</li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- Konten -->
    <main class="p-6 max-w-3xl mx-auto pt-[80px]">
      <h2 class="text-2xl font-bold text-center border-b-2 border-red-500 pb-2 mb-6">
        Rekening Donasi
      </h2>

      <!-- Zakat -->
      <section class="mt-6">
        <p class="font-semibold mb-2">Rekening Zakat a.n Yayasan Mizan Amanah</p>
        <table class="w-full border border-gray-300">
          <thead class="bg-gray-100">
            <tr>
              <th class="border px-4 py-2 text-left">BANK</th>
              <th class="border px-4 py-2 text-left">NO REKENING</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border px-4 py-2">BCA</td><td class="border px-4 py-2">139 304 0002</td></tr>
            <tr><td class="border px-4 py-2">MANDIRI</td><td class="border px-4 py-2">132 05050505 19</td></tr>
            <tr><td class="border px-4 py-2">MANDIRI SYARIAH</td><td class="border px-4 py-2">727 373 7377</td></tr>
            <tr><td class="border px-4 py-2">MUAMALAT</td><td class="border px-4 py-2">4 080 200 000</td></tr>
            <tr><td class="border px-4 py-2">BSI</td><td class="border px-4 py-2">4714 71 555 6</td></tr>
          </tbody>
        </table>
      </section>

      <!-- Sedekah -->
      <section class="mt-8">
        <p class="font-semibold mb-2">Rekening Sedekah a.n Yayasan Mizan Amanah</p>
        <table class="w-full border border-gray-300">
          <thead class="bg-gray-100">
            <tr>
              <th class="border px-4 py-2 text-left">BANK</th>
              <th class="border px-4 py-2 text-left">NO REKENING</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border px-4 py-2">BCA</td><td class="border px-4 py-2">139 300 4952</td></tr>
            <tr><td class="border px-4 py-2">MANDIRI</td><td class="border px-4 py-2">132 05050505 35</td></tr>
            <tr><td class="border px-4 py-2">MANDIRI SYARIAH</td><td class="border px-4 py-2">727 777 7775</td></tr>
            <tr><td class="border px-4 py-2">MUAMALAT</td><td class="border px-4 py-2">4 080 400 000</td></tr>
            <tr><td class="border px-4 py-2">BNI</td><td class="border px-4 py-2">01 520 101 18</td></tr>
            <tr><td class="border px-4 py-2">BSI</td><td class="border px-4 py-2">5455 44 000 6</td></tr>
          </tbody>
        </table>
      </section>

      <!-- Wakaf -->
      <section class="mt-8">
        <p class="font-semibold mb-2">Rekening Wakaf a.n Yayasan Mizan Amanah</p>
        <table class="w-full border border-gray-300">
          <thead class="bg-gray-100">
            <tr>
              <th class="border px-4 py-2 text-left">BANK</th>
              <th class="border px-4 py-2 text-left">NO REKENING</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border px-4 py-2">BCA</td><td class="border px-4 py-2">139 300 0001</td></tr>
            <tr><td class="border px-4 py-2">MANDIRI</td><td class="border px-4 py-2">132 05050505 27</td></tr>
            <tr><td class="border px-4 py-2">MANDIRI SYARIAH</td><td class="border px-4 py-2">727 5757 572</td></tr>
            <tr><td class="border px-4 py-2">MUAMALAT</td><td class="border px-4 py-2">4 080 300 000</td></tr>
            <tr><td class="border px-4 py-2">BSI</td><td class="border px-4 py-2">4545 55 6638</td></tr>
          </tbody>
        </table>
      </section>

      <!-- Kemanusiaan -->
      <section class="mt-8 mb-12">
        <p class="font-semibold mb-2">Rekening Kemanusiaan / Bencana a.n Yayasan Mizan Amanah</p>
        <table class="w-full border border-gray-300">
          <thead class="bg-gray-100">
            <tr>
              <th class="border px-4 py-2 text-left">BANK</th>
              <th class="border px-4 py-2 text-left">NO REKENING</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border px-4 py-2">MANDIRI</td><td class="border px-4 py-2">132 05050505 43</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>
