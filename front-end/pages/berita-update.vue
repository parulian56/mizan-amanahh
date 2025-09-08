<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-[#FB8505] text-white px-4 py-4 flex items-center space-x-2"
    >
      <!-- Tombol kembali -->
      <NuxtLink to="/" class="cursor-pointer">⬅</NuxtLink>
      <h2 class="text-lg font-semibold">Update & Berita</h2>
    </nav>

    <!-- Breadcrumb -->
    <div
      class="fixed top-14 left-0 right-0 z-40 bg-[#FB8505] text-white px-4 py-2 text-sm"
    >
      Home › <span class="text-[#FDB669] font-bold">Update & Berita</span>
    </div>

    <!-- ================= UPDATE & BERITA ================= -->
    <section id="berita" class="pt-28 pb-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-center text-3xl font-bold text-gray-800 mb-12">
          Update & Berita
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Article 1 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div class="relative">
              <img 
                src="#" 
                alt="Doa Zakat Fitrah" 
                class="w-full h-48 object-cover"
                @error="handleImageError($event, '#')"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Artikel</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-800 mb-3 leading-tight">
                Doa Zakat Fitrah Beserta Arab, Latin dan Artinya
              </h3>
              <p class="text-sm text-gray-500 mb-3">2025-03-29 15:15:08</p>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Ketika melaksanakan suatu ibadah, niat merupakan unsur paling penting karena menentukan sah dan tidaknya suatu ibadah. Nabi SAW bersabda...
              </p>
              <NuxtLink to="/artikel/doa-zakat-fitrah" class="text-red-600 font-semibold hover:text-red-700 transition-colors">
                Read More
              </NuxtLink>
            </div>
          </div>

          <!-- Article 2 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div class="relative">
              <img 
                src="#" 
                alt="Pengertian Infaq" 
                class="w-full h-48 object-cover"
                @error="handleImageError($event, '#')"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Artikel</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-800 mb-3 leading-tight">
                Infaq: Arti, Makna, Hukum, dan Keutamaan yang Harus Diketahui
              </h3>
              <p class="text-sm text-gray-500 mb-3">2025-04-10 14:36:44</p>
              <h4 class="font-semibold text-gray-800 mb-2">Pengertian Infaq</h4>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Infaq dalam konteks agama Islam merujuk pada pengeluaran harta atau, kekayaan yang dilakukan oleh seorang Muslim dengan tujuan yang baik, terutama untuk membantu mereka yang...
              </p>
              <NuxtLink to="/artikel/pengertian-infaq" class="text-red-600 font-semibold hover:text-red-700 transition-colors">
                Read More
              </NuxtLink>
            </div>
          </div>

          <!-- Article 3 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div class="relative">
              <img 
                src="#" 
                alt="Infaq dalam Islam" 
                class="w-full h-48 object-cover"
                @error="handleImageError($event, '#')"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Artikel</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-800 mb-3 leading-tight">
                Pengertian Infaq dalam Islam: Keutamaan dan Cara Mengamalkannya
              </h3>
              <p class="text-sm text-gray-500 mb-3">2025-04-10 13:54:49</p>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Pengertian Infaq dalam Islam: Keutamaan dan Cara Mengamalkannya
              </p>
              <NuxtLink to="/artikel/infaq-dalam-islam" class="text-red-600 font-semibold hover:text-red-700 transition-colors">
                Read More
              </NuxtLink>
            </div>
          </div>

          <!-- Article 4 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div class="relative">
              <img 
                src="#" 
                alt="Jariyah Artinya" 
                class="w-full h-48 object-cover"
                @error="handleImageError($event, '#')"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Artikel</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-800 mb-3 leading-tight">
                Jariyah Artinya Amal yang Tak Terputus: Inilah Contoh dan Keutamaannya
              </h3>
              <p class="text-sm text-gray-500 mb-3">2025-04-09 14:12:43</p>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Dalam ajaran Islam, konsep jariyah memiliki makna yang mendalam dan penting bagi kehidupan seorang Muslim. Jariyah artinya se
              </p>
              <NuxtLink to="/artikel/jariyah-artinya" class="text-red-600 font-semibold hover:text-red-700 transition-colors">
                Read More
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button 
            @click="loadMoreArticles"
            class="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            Lihat Artikel Lainnya
          </button>
        </div>
      </div>
    </section>

    <!-- ================= KATA MEREKA SECTION ================= -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-center text-3xl font-bold text-gray-800 mb-12">Kata Mereka</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div class="relative">
              <img 
                src="#" 
                alt="Wowo Kuswo" 
                class="w-full h-48 object-cover"
                @error="handleImageError($event, '#')"
              />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-800 mb-2">
                Wowo Kuswo (Penerima Program Ekonomi)
              </h3>
              <p class="text-sm text-gray-500 mb-4">2019-10-27 15:40:14</p>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Saya sangat bersyukur bisa dibantu oleh Mizan Amanah, program warung ku ini sangat membantu saya untuk bisa berpenghasilan walaupun saya keterbatasan fisik.
              </p>
              <NuxtLink to="/testimoni/wowo-kuswo" class="text-red-600 font-semibold hover:text-red-700 transition-colors">
                Read More
              </NuxtLink>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div class="relative">
              <img 
                src="#" 
                alt="Prof. Dr. K.H. Miftah Faridl" 
                class="w-full h-48 object-cover"
                @error="handleImageError($event, '#')"
              />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-800 mb-2">
                Prof. Dr. K.H. Miftah Faridl
              </h3>
              <p class="text-sm text-gray-500 mb-4">2019-10-27 15:02:18</p>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Semoga hari para pengurus Mizan Amanah semakin tulus, ikhlas dan berjalan sosial yang tinggi karena Allah SWT tidak pernah salah memilih hambanya.
              </p>
              <NuxtLink to="/testimoni/prof-miftah" class="text-red-600 font-semibold hover:text-red-700 transition-colors">
                Read More
              </NuxtLink>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div class="relative">
              <img 
                src="#" 
                alt="Ust. Budi Ashari" 
                class="w-full h-48 object-cover"
                @error="handleImageError($event, '#')"
              />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-800 mb-2">
                Ust. Budi Ashari, LC
              </h3>
              <p class="text-sm text-gray-500 mb-4">2019-11-05 16:54:18</p>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Semoga teman - teman di Mizan Amanah memiliki keikhlasan dalam mengelola lembaga, dan juga harus sesuai dengan namanya, harus amanah. Maju terus Mizan Amanah.
              </p>
              <NuxtLink to="/testimoni/ust-budi" class="text-red-600 font-semibold hover:text-red-700 transition-colors">
                Read More
              </NuxtLink>
            </div>
          </div>

          <!-- Testimonial 4 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div class="relative">
              <img 
                src="#" 
                alt="Ainun" 
                class="w-full h-48 object-cover"
                @error="handleImageError($event, '#')"
              />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-800 mb-2">
                Ainun, A.Md.Keb. (Penerima Program Pendidikan)
              </h3>
              <p class="text-sm text-gray-500 mb-4">2019-10-27 16:53:21</p>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                Terima kasih kepada Mizan Amanah yang telah membiayai saya dari kelas saya bisa mandiri, terima kasih juga kepada para donatur yang telah memberikan dukungan kepada saya sehingga impian saya
              </p>
              <NuxtLink to="/testimoni/ainun" class="text-red-600 font-semibold hover:text-red-700 transition-colors">
                Read More
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button 
            @click="loadMoreTestimonials"
            class="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Lihat Testimoni Lainnya
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Methods untuk handle gambar error dan load more
const handleImageError = (event, fallbackSrc) => {
  event.target.src = fallbackSrc || '#'
}

const loadMoreArticles = () => {
  console.log('Loading more articles...')
}

const loadMoreTestimonials = () => {
  console.log('Loading more testimonials...')
}

useHead({
  title: 'Update & Berita - Ibadurrohman',
  meta: [
    {
      name: 'description',
      content:
        'Baca artikel terbaru dan testimoni dari penerima manfaat program Ibadurrohman. Update informasi seputar zakat, infaq, dan program kemanusiaan.'
    }
  ]
})
</script>

<style scoped>
.hover\:-translate-y-2:hover {
  transform: translateY(-8px);
}
</style>
