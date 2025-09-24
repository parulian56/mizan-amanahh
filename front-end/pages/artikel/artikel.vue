<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <header class="bg-red-600 text-white p-4 flex items-center space-x-3 shadow-md">
     <router-link to="http://localhost:3000" class="mr-3">
        <i class="fas fa-arrow-left text-xl"></i>
     </router-link>
      <h1 class="font-semibold text-lg truncate">
        Infak: Arti, Makna, Hukum, dan K...
      </h1>
    </header>

    <!-- Breadcrumb -->
    <nav class="bg-red-600 text-white px-4 py-2 text-sm flex items-center space-x-2">
      <a href="#" class="hover:underline opacity-90">Home</a>
      <span class="opacity-75">...</span>
      <span class="truncate opacity-90 max-w-xs">
        infak-arti-makna-hukum-dan-keutamaan-yang-harus-diketahui
      </span>
    </nav>

    <!-- Content Container -->
    <main class="p-4 max-w-2xl mx-auto">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <!-- Featured Image -->
        <div class="w-full h-64 bg-cover bg-center relative" 
             style="background-image: url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80');">
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        <!-- Article Content -->
        <div class="p-6">
          <h1 class="text-red-600 font-bold text-2xl mb-6 leading-tight">
            Infak: Arti, Makna, Hukum, dan Keutamaan yang Harus Diketahui
          </h1>

          <article class="prose max-w-none text-gray-700 leading-relaxed space-y-6">
            <section>
              <h2 class="text-gray-600 font-semibold text-xl mb-3 border-b-2 border-gray-200 pb-1">
                Pengertian Infak
              </h2>
              <p>
                Infak dalam konteks agama Islam merujuk pada pengeluaran harta atau kekayaan 
                yang dilakukan oleh seorang Muslim dengan tujuan yang baik, terutama untuk membantu 
                mereka yang membutuhkan atau untuk kepentingan umum. Berbeda dengan zakat yang 
                memiliki ketentuan dan nisab tertentu, infak tidak dibatasi jumlah dan jenisnya. 
                Seorang Muslim dapat berinfak sesuai dengan kemampuan.
              </p>
            </section>

            <section>
              <h2 class="text-gray-600 font-semibold text-xl mb-3 border-b-2 border-gray-200 pb-1">
                Dalil Tentang Infak
              </h2>
              <p>
                Banyak ayat Al-Qur'an yang menjelaskan tentang keutamaan infak. 
                Salah satunya dalam <strong class="text-red-600">QS. Al-Baqarah: 267</strong>:
              </p>
              <blockquote class="border-l-4 border-red-500 pl-6 py-3 bg-red-50 italic text-gray-600 rounded-r-md">
                "Hai orang-orang yang beriman, nafkahkanlah (di jalan Allah) sebagian dari hasil usahamu yang baik-baik..."
              </blockquote>
            </section>

            <section>
              <h2 class="text-gray-600 font-semibold text-xl mb-3 border-b-2 border-gray-200 pb-1">
                Hukum Infak
              </h2>
              <p>
                Hukum infak pada dasarnya adalah sunnah, namun dalam kondisi tertentu bisa menjadi wajib. 
                Misalnya, infak seorang ayah untuk keluarganya adalah wajib. 
              </p>
            </section>

            <section>
              <h2 class="text-gray-600 font-semibold text-xl mb-3 border-b-2 border-gray-200 pb-1">
                Macam-Macam Infak
              </h2>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong class="text-red-600">Infak Wajib:</strong> nafkah untuk keluarga, atau infak darurat.</li>
                <li><strong class="text-red-600">Infak Sunnah:</strong> sedekah untuk fakir miskin, masjid, amal jariyah.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-gray-600 font-semibold text-xl mb-3 border-b-2 border-gray-200 pb-1">
                Keutamaan Infak
              </h2>
              <ol class="list-decimal pl-6 space-y-2">
                <li>Mendatangkan keberkahan harta dan kehidupan.</li>
                <li>Membersihkan jiwa dari sifat kikir.</li>
                <li>Mendekatkan diri kepada Allah SWT.</li>
                <li>Menjadi amal jariyah yang pahalanya terus mengalir.</li>
              </ol>
            </section>

            <section>
              <h2 class="text-gray-600 font-semibold text-xl mb-3 border-b-2 border-gray-200 pb-1">
                Kesimpulan
              </h2>
              <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                <p>
                  Infak adalah bentuk kepedulian seorang Muslim terhadap sesama. 
                  Dengan berinfak, seseorang bukan hanya membantu orang lain, 
                  tetapi juga membersihkan harta dan jiwanya.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>

    <!-- Footer Spacing -->
    <div class="h-8"></div>
  </div>
</template>
