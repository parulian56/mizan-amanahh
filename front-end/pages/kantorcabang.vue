<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-red-600 text-white px-6 py-4 flex items-center gap-2">
  <NuxtLink to="/" class="cursor-pointer">←</NuxtLink>
  <span>Home › <b>Kantor Cabang</b></span>
</header>


    <!-- Content -->
    <main class="container mx-auto px-6 py-10">
      <!-- Judul -->
      <h2 class="text-2xl font-bold text-center mb-8">Kantor Cabang & Layanan Zakat</h2>

      <!-- Tabel -->
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
  { no: 11, alamat: "Jl. Binamarga no.42 Cipayung", telp: "(021) 2867 3443", hp: "" },
  { no: 12, alamat: "Jl. Kalisari Raya no. 20, Pasar Rebo", telp: "(021) 2138 7671", hp: "" },
  { no: 13, alamat: "Jl. Lapan No. 1 Pekayon, Pasar Rebo", telp: "(021) 2962 6870", hp: "" },
  { no: 14, alamat: "Jl. Raya Tengah No. 31G Batu Ampar", telp: "(021) 2285 4922", hp: "" },
  { no: 15, alamat: "Jl. Bunga Rampai Raya No. 23A, Duren Sawit", telp: "(021) 285 354 01", hp: "" },
  { no: 16, alamat: "Jl. Gading Raya No.179, Pondok Bambu, Duren Sawit", telp: "", hp: "081287727110" },
  { no: 17, alamat: "Jl. Asem Baris Raya No.39, Tebet", telp: "(021) 2854 3191", hp: "" },
  { no: 18, alamat: "Jl. Rawajati Timur Raya Komplek Kalibata Indah No. AM 12, Pancoran", telp: "(021) 798 2967", hp: "" },
  { no: 19, alamat: "Jl. Salihara No. 15, Pasar Minggu", telp: "(021) 7884 4732", hp: "" },
  { no: 20, alamat: "Jl. Jagakarsa Raya No. 3, Jagakarsa", telp: "(021) 2780 3197", hp: "" },
  { no: 21, alamat: "Jl. Srengseng Sawah No. 17 RT 04/ RW 12, Srengseng Sawah Kec. Jagakarsa", telp: "(021) 2780 2799", hp: "" },
  { no: 22, alamat: "Jl. Mohamad Kahfi 1 No. 49, Ciganjur", telp: "(021) 727 2675", hp: "" },
  { no: 23, alamat: "Jl. Karang Tengah Raya No.14 Lebak Bulus", telp: "(021) 765 4869", hp: "" },
  { no: 24, alamat: "Jl. Abdul Majid No. 8, Cipete Utara, Kebayoran Baru", telp: "(021) 739 6605", hp: "" },
  { no: 25, alamat: "Jl. Kesehatan Raya No. 16 Bintaro", telp: "(021) 7388 6407", hp: "" },
  { no: 26, alamat: "Jl. Cidodol Raya No. 1 Kebayoran Lama", telp: "(021) 2793 6442", hp: "" },
  { no: 27, alamat: "Jl. Cilandak Tengah No. 15, Cilandak Barat", telp: "(021) 7581 2029", hp: "" },
  { no: 28, alamat: "Jl. Cilandak KKO No. 17 Kelurahan Pasar Minggu", telp: "(021) 780 1870", hp: "0812 9253 3406" },
  { no: 29, alamat: "Jl. Kemandoran 1 No. 46, Kebayoran Lama", telp: "(021) 2902 2564", hp: "" },
  { no: 30, alamat: "Jl. Durian Raya No.90, Baranangsiang Bogor", telp: "", hp: "081802005286" },
  { no: 31, alamat: "Jl. RE. Abdullah Komplek Meranti, Meranti A No. 50 RT 02 RW 02 Pasir Jaya Bogor", telp: "", hp: "0822 9996 9034" },
  { no: 32, alamat: "Jl. Achmad Adnawijaya No. 103, Tegal Gundil Bogor", telp: "(0251) 835 9277", hp: "" },
  { no: 33, alamat: "Jl. Cimanggu Perikanan No.11 Kel. Kedung Waringin Kec. Tanah Sereal", telp: "", hp: "0813 8257 1359" },
  { no: 34, alamat: "Jl. Lumbu Tengah Blok 8 no. 18 Rawa Lumbu Bekasi", telp: "(021) 827 498 47", hp: "" },
  { no: 35, alamat: "Jl. Taman Narogong Indah Blok A8 No.10 Bekasi", telp: "(021) 221 03504", hp: "0822 9996 9048" },
  { no: 36, alamat: "Jl. Raya Gandul No. 15Y Cinere Depok", telp: "(021) 766 6676", hp: "" },
  { no: 37, alamat: "Jl. Bukit Cinere No.7 Cinere Depok", telp: "(021) 2276 2646", hp: "" },
  { no: 38, alamat: "Jl. Krukut Raya No. 90, Limo Depok", telp: "", hp: "0813 2772 2425" },
  { no: 39, alamat: "Jl. Jend. H. Amir Machmud No. 658 Cimahi", telp: "(022) 662 8846", hp: "" },
  { no: 40, alamat: "Jl. Pojok Utara 2 No. 45 Cimahi", telp: "(022) 665 4433", hp: "" },
  { no: 41, alamat: "Jl. Encepkartawiria No.A11 Cimahi Utara", telp: "", hp: "0878 4711 5619" },
  { no: 42, alamat: "Jl. Gedebage No. 119 Komplek Arisandi Bandung", telp: "(022) 877 98837", hp: "" },
  { no: 43, alamat: "Jl. Sarijadi Raya No. 40, Sarijadi Bandung", telp: "(022) 200 1362", hp: "" },
  { no: 44, alamat: "Jl. Hasanudin No.101, Punggawan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah", telp: "(0271) 719735", hp: "" },
  { no: 45, alamat: "Jl. Jend. Sudirman, Sokaraja, Banyumas", telp: "(0281) 654 0644", hp: "" },
  { no: 46, alamat: "Jl. Melati Wetan No. 8A RT 51 RW 14 Kel. Baciro Kec. Gondokusuman, Yogyakarta", telp: "(0274) 544 489", hp: "" },
  { no: 47, alamat: "Jl. Dukuh Kupang 25 No. 49 A, Surabaya", telp: "(031) 9954 1119", hp: "" },
  { no: 48, alamat: "Jl. Tenggelis Tengah 1-2 blok L1 Kedangsari Tenggilis Mejoyo Surabaya", telp: "", hp: "0857 0347 2881" },
  { no: 49, alamat: "Jl. Bendungan Sutami No. 17, Sumber Sari, Wonokwaru, Malang", telp: "(0341) 570 880", hp: "0821 2859 6460" },
  { no: 50, alamat: "Jl. LetJend. S. Parman No. 54 Gunung Sari Ulu, Balikpapan", telp: "(0542) 850 1539", hp: "" },
  { no: 51, alamat: "Jl. Bumi Mas Raya No.2, Banjarmasin", telp: "(0511) 325 7370", hp: "" },
  { no: 52, alamat: "KM.12 Jalan Raya Cianjur Bandung Kp. Mekarsari No. 5 RT03/RW06, Hegarmanah, Kec. Sukaluyu, Kabupaten Cianjur, Jawa Barat 43284", telp: "", hp: "0823 1942 7090" }
]
</script>
