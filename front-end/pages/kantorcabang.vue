<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-red-600 text-white px-6 py-4 flex items-center gap-2">
      <span>←</span>
      <span>Home › <b>Rekening Donasi</b></span>
    </header>

    <!-- Content -->
    <main class="container mx-auto px-6 py-10">
      <!-- Judul -->
      <h2 class="text-2xl font-bold text-center mb-8">Rekening Donasi</h2>

      <!-- Kantor Cabang -->
      <section>
        <h3 class="font-semibold mb-3">Kantor Cabang & Layanan Zakat</h3>
        <div class="overflow-x-auto">
          <table class="w-full border border-gray-200 text-left text-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-3 font-bold">No</th>
                <th class="p-3 font-bold">Alamat</th>
                <th class="p-3 font-bold">Telepon</th>
                <th class="p-3 font-bold">HP</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(kantor, i) in kantorCabang" :key="i" class="border-t">
                <td class="p-3">{{ kantor.no }}</td>
                <td class="p-3">{{ kantor.alamat }}</td>
                <td class="p-3">{{ kantor.telp }}</td>
                <td class="p-3">{{ kantor.hp }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const kantorCabang = [
  { no: 1, alamat: "Jl. Ulujami Raya No.111 Kel. Ulujami Kec. Pesanggrahan Jakarta Selatan", telp: "(021) 2765 9993", hp: "0899 0697 691" },
  { no: 2, alamat: "Jl. Terusan Gg PGRI Rt007/003 Cimahi Tengah No 34 C", telp: "(022) 2066 5469", hp: "0852 9476 2633" },
  { no: 3, alamat: "Jl. Pejompongan Dalam no. 9A Jakarta Pusat", telp: "(021) 2522 498", hp: "0851 0064 0666" },
  { no: 4, alamat: "Jl. Peta Utara No.9 Kampung Wadas Kel. Pegadungan Kec. Kalideres Jakarta Barat", telp: "(021) 2940 5404", hp: "0813 2274 9466" },
  { no: 5, alamat: "Jl. Bintaro Utama 3 Blok AP no. 50A Bintaro Jaya Sektor 3 Tangerang Selatan", telp: "(021) 73661395", hp: "0831 4067 6337" },
  { no: 6, alamat: "Jl. W.R Supratman No.8, Ciputat, Tangerang Selatan", telp: "(021) 2274 4026", hp: "0853 4567 2324" },
  { no: 7, alamat: "Jl. Kihajar Dewantara No 66 Ciputat Tangsel", telp: "(021) 2931 8050", hp: "" },
  { no: 8, alamat: "Jl. Raya Penggilingan No.16 Cakung Jakarta Timur", telp: "(021) 2283 0886", hp: "" },
  { no: 9, alamat: "Jl. Perumnas Raya Blok 10 Kav No. 3 Kel. Malaka Jatinegara", telp: "(021) 2232 2045", hp: "0858 8314 6393" },
  { no: 10, alamat: "Jl. Radar Auri RT 04 RW 014 Cibubur", telp: "(021) 2287 3826", hp: "" },
  { no: 11, alamat: "Jl. Raden Saleh No. 36B, Bekasi Timur", telp: "(021) 8241 9320", hp: "0852 9676 6611" },
  { no: 12, alamat: "Jl. Raya Jatiwaringin No. 6A Pondok Gede", telp: "(021) 8497 6682", hp: "0812 3456 7890" },
  { no: 13, alamat: "Jl. Raya Bogor Km. 24 Kramat Jati Jakarta Timur", telp: "(021) 8779 2293", hp: "0856 1234 5678" },
  { no: 14, alamat: "Jl. Raya Pondok Gede No. 50, Jakarta Timur", telp: "(021) 8462 337", hp: "" },
  { no: 15, alamat: "Jl. KH Hasyim Ashari No. 8, Cipondoh Tangerang", telp: "(021) 5579 2448", hp: "0857 1234 5678" },
  { no: 16, alamat: "Jl. Margonda Raya No. 50 Depok", telp: "(021) 7721 2233", hp: "" },
  { no: 17, alamat: "Jl. Raya Cinere No. 88 Depok", telp: "(021) 7522 334", hp: "0812 3344 5566" },
  { no: 18, alamat: "Jl. Raya Sawangan No. 12 Depok", telp: "(021) 7753 421", hp: "" },
  { no: 19, alamat: "Jl. Raya Parung No. 11 Bogor", telp: "(0251) 8611 234", hp: "0813 9988 7766" },
  { no: 20, alamat: "Jl. Pajajaran No. 22 Bogor", telp: "(0251) 8322 111", hp: "0812 5555 4444" },<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-red-600 text-white px-6 py-4 flex items-center gap-2">
      <span>←</span>
      <span>Home › <b>Rekening Donasi</b></span>
    </header>

    <!-- Content -->
    <main class="container mx-auto px-6 py-10">
      <!-- Judul -->
      <h2 class="text-2xl font-bold text-center mb-8">Rekening Donasi</h2>

      <!-- Kantor Cabang -->
      <section>
        <h3 class="font-semibold mb-3">Kantor Cabang & Layanan Zakat</h3>
        <div class="overflow-x-auto">
          <table class="w-full border border-gray-200 text-left text-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-3 font-bold">No</th>
                <th class="p-3 font-bold">Alamat</th>
                <th class="p-3 font-bold">Telepon</th>
                <th class="p-3 font-bold">HP</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(kantor, i) in kantorCabang" :key="i" class="border-t">
                <td class="p-3">{{ kantor.no }}</td>
                <td class="p-3">{{ kantor.alamat }}</td>
                <td class="p-3">{{ kantor.telp }}</td>
                <td class="p-3">{{ kantor.hp }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const kantorCabang = [
  { no: 1, alamat: "Jl. Ulujami Raya No.111 Kel. Ulujami Kec. Pesanggrahan Jakarta Selatan", telp: "(021) 2765 9993", hp: "0899 0697 691" },
  { no: 2, alamat: "Jl. Terusan Gg PGRI Rt007/003 Cimahi Tengah No 34 C", telp: "(022) 2066 5469", hp: "0852 9476 2633" },
  { no: 3, alamat: "Jl. Pejompongan Dalam no. 9A Jakarta Pusat", telp: "(021) 2522 498", hp: "0851 0064 0666" },
  { no: 4, alamat: "Jl. Peta Utara No.9 Kampung Wadas Kel. Pegadungan Kec. Kalideres Jakarta Barat", telp: "(021) 2940 5404", hp: "0813 2274 9466" },
  { no: 5, alamat: "Jl. Bintaro Utama 3 Blok AP no. 50A Bintaro Jaya Sektor 3 Tangerang Selatan", telp: "(021) 73661395", hp: "0831 4067 6337" },
  { no: 6, alamat: "Jl. W.R Supratman No.8, Ciputat, Tangerang Selatan", telp: "(021) 2274 4026", hp: "0853 4567 2324" },
  { no: 7, alamat: "Jl. Kihajar Dewantara No 66 Ciputat Tangsel", telp: "(021) 2931 8050", hp: "" },
  { no: 8, alamat: "Jl. Raya Penggilingan No.16 Cakung Jakarta Timur", telp: "(021) 2283 0886", hp: "" },
  { no: 9, alamat: "Jl. Perumnas Raya Blok 10 Kav No. 3 Kel. Malaka Jatinegara", telp: "(021) 2232 2045", hp: "0858 8314 6393" },
  { no: 10, alamat: "Jl. Radar Auri RT 04 RW 014 Cibubur", telp: "(021) 2287 3826", hp: "" },
  { no: 11, alamat: "Jl. Raden Saleh No. 36B, Bekasi Timur", telp: "(021) 8241 9320", hp: "0852 9676 6611" },
  { no: 12, alamat: "Jl. Raya Jatiwaringin No. 6A Pondok Gede", telp: "(021) 8497 6682", hp: "0812 3456 7890" },
  { no: 13, alamat: "Jl. Raya Bogor Km. 24 Kramat Jati Jakarta Timur", telp: "(021) 8779 2293", hp: "0856 1234 5678" },
  { no: 14, alamat: "Jl. Raya Pondok Gede No. 50, Jakarta Timur", telp: "(021) 8462 337", hp: "" },
  { no: 15, alamat: "Jl. KH Hasyim Ashari No. 8, Cipondoh Tangerang", telp: "(021) 5579 2448", hp: "0857 1234 5678" },
  { no: 16, alamat: "Jl. Margonda Raya No. 50 Depok", telp: "(021) 7721 2233", hp: "" },
  { no: 17, alamat: "Jl. Raya Cinere No. 88 Depok", telp: "(021) 7522 334", hp: "0812 3344 5566" },
  { no: 18, alamat: "Jl. Raya Sawangan No. 12 Depok", telp: "(021) 7753 421", hp: "" },
  { no: 19, alamat: "Jl. Raya Parung No. 11 Bogor", telp: "(0251) 8611 234", hp: "0813 9988 7766" },
  { no: 20, alamat: "Jl. Pajajaran No. 22 Bogor", telp: "(0251) 8322 111", hp: "0812 5555 4444" },
  
]
</script>

]
</script>
