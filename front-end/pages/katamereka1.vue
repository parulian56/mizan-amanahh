<template>
  <div class="p-6 max-w-3xl mx-auto text-center">
    <!-- Foto di tengah -->
    <div class="flex justify-center mb-4">
      <img 
        src="~/assets/image/mizan4.png" 
        alt="Aini, A.Md Keb." 
        class="rounded-lg shadow-lg w-64"
      />
    </div>

    <!-- Nama -->
    <h1 class="text-2xl font-bold text-red-600 mt-2 mb-2">
      Aini, A.Md Keb.
    </h1>

    <!-- Role -->
    <p class="text-gray-500 mb-4">Penerima Program Pendidikan</p>

    <!-- Testimoni -->
    <p class="text-gray-600 leading-relaxed mb-6">
      Terima kasih kepada Mizan Amanah yang telah membimbing saya dari kecil sampai saya bisa mandiri,
       terima kasih juga kepada para donatur yang telah memberikan dukungan kepada saya sehingga impian saya menjadi seorang bidan tercapai. .
    </p>

    <!-- Tombol Back -->
    <NuxtLink
      to="/"
      class="inline-block bg-orange-500 text-white px-5 py-2 rounded-lg shadow hover:bg-orange-600 transition"
    >
      ← Kembali
    </NuxtLink>
  </div>
</template>
