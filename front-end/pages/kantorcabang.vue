<template>
  <div class="min-h-screen bg-white text-base">
    <!-- Header / Navbar -->
    <header class="sticky top-0 z-50 bg-[#FB8505] text-white shadow">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <!-- Back button + Title -->
        <div class="flex items-center gap-3 mb-2">
          <router-link
            to="/"
            class="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <i class="fas fa-arrow-left text-lg"></i>
          </router-link>
          <h1 class="text-xl font-bold">Kantor Cabang</h1>
        </div>

        <!-- Breadcrumb -->
        <nav class="text-sm">
          <router-link to="/" class="hover:underline opacity-90"
            >Home</router-link
          >
          <span class="mx-2">›</span>
          <span class="font-semibold">Kantor Cabang</span>
        </nav>
      </div>
    </header>

    <!-- Content -->
    <main class="max-w-6xl mx-auto px-6 pt-10 pb-12">
      <section
        v-for="(group, kota) in groupedKantorCabang"
        :key="kota"
        class="bg-[#59AAB7]/10 rounded-xl p-6 shadow mb-10"
      >
        <h3 class="text-xl font-semibold text-[#59AAB7] mb-5 border-b pb-2">
          Kantor Cabang {{ kota }}
        </h3>

        <div class="overflow-x-auto rounded-lg border border-gray-300 bg-white">
          <table class="min-w-full text-sm">
            <thead class="bg-[#FB8505] text-white text-left">
              <tr>
                <th class="px-4 py-3 border">No</th>
                <th class="px-4 py-3 border">Alamat</th>
                <th class="px-4 py-3 border">Telepon</th>
                <th class="px-4 py-3 border">HP</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="kantor in group"
                :key="kantor.no"
                class="hover:bg-gray-50 transition"
              >
                <td class="px-4 py-3 border text-center font-medium">
                  {{ kantor.no }}
                </td>
                <td class="px-4 py-3 border">{{ kantor.alamat }}</td>
                <td class="px-4 py-3 border">{{ kantor.telp }}</td>
                <td class="px-4 py-3 border text-[#FB8505] font-semibold">
                  {{ kantor.hp }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>




<script setup lang="ts">
import { computed } from "vue"

interface KantorData {
  no: number
  kota: string
  alamat: string
  telp: string
  hp: string
}

const kantorCabang: KantorData[] = [
  {
    no: 1,
    kota: "Jakarta Selatan",
    alamat: "Jl. Ulujami Raya No.111 Kel. Ulujami Kec. Pesanggrahan Jakarta Selatan",
    telp: "(021) 2765 9993",
    hp: "0899 0697 691",
  },
  {
    no: 2,
    kota: "Cimahi",
    alamat: "Jl. Terusan Gg PGRI Rt007/003 Cimahi Tengah No 34 C",
    telp: "(022) 2066 5469",
    hp: "0852 9476 2633",
  },
  {
    no: 3,
    kota: "Jakarta Pusat",
    alamat: "Jl. Pejompongan Dalam no. 9A Jakarta Pusat",
    telp: "(021) 2522 498",
    hp: "0851 0064 0666",
  },
  {
    no: 4,
    kota: "Jakarta Barat",
    alamat: "Jl. Peta Utara No.9 Kalideres Jakarta Barat",
    telp: "(021) 2940 5404",
    hp: "0813 2274 9466",
  },
  {
    no: 5,
    kota: "Tangerang Selatan",
    alamat: "Jl. Bintaro Utama 3 Blok AP No.53 Sektor 3A Bintaro Jaya, Pondok Aren Tangerang Selatan",
    telp: "(021) 73661395",
    hp: "0831 4067 6337",
  },
  {
    no: 6,
    kota: "Bandung",
    alamat: "Jl. Turangga No.33 Bandung",
    telp: "(022) 7351 2302",
    hp: "0851 5960 6126",
  },
  {
    no: 7,
    kota: "Depok",
    alamat: "Jl. Keadilan Raya No. 39A Depok II Tengah, Kota Depok",
    telp: "(021) 7720 2437",
    hp: "0812 1265 1307",
  },
  {
    no: 8,
    kota: "Bekasi",
    alamat: "Jl. Dr. Ratna No. 69A RT 001/002 Jatibening, Pondok Gede, Kota Bekasi",
    telp: "(021) 8497 3068",
    hp: "0812 9324 3053",
  },
  {
    no: 9,
    kota: "Bogor",
    alamat: "Jl. Raya Pajajaran No. 50A RT 01/ RW 03 Kel. Babakan, Kec. Bogor Tengah, Kota Bogor",
    telp: "(0251) 8574 134",
    hp: "0857 1956 3076",
  },
  {
    no: 10,
    kota: "Cirebon",
    alamat: "Jl. Kanggraksan No. 18 D, RT 004/ RW 005, Kel. Sukapura, Kec. Kejaksan, Kota Cirebon",
    telp: "(0231) 8305 689",
    hp: "0852 2466 6711",
  },
  {
    no: 11,
    kota: "Semarang",
    alamat: "Jl. Pamularsih Raya No. 70 B, Kel. Bongsari, Kec. Semarang Barat, Kota Semarang",
    telp: "(024) 7644 2460",
    hp: "0857 2581 1196",
  },
  {
    no: 12,
    kota: "Yogyakarta",
    alamat: "Jl. Wates Km. 3,5 Gang Semar No. 99, RT 05/ RW 34, Kel. Balecatur, Kec. Gamping, Kab. Sleman, DIY",
    telp: "(0274) 4341 266",
    hp: "0877 3980 4459",
  },
  {
    no: 13,
    kota: "Surabaya",
    alamat: "Jl. Dukuh Kupang Barat XXI No. 14, Kel. Dukuh Kupang, Kec. Dukuh Pakis, Kota Surabaya",
    telp: "(031) 5674 835",
    hp: "0813 5786 2665",
  },
  {
    no: 14,
    kota: "Malang",
    alamat: "Jl. S. Supriadi Gg. IV No. 551 A, Kel. Sukun, Kec. Sukun, Kota Malang",
    telp: "(0341) 8513 505",
    hp: "0856 0701 1430",
  },
  {
    no: 15,
    kota: "Medan",
    alamat: "Jl. Kapten Muslim No. 87, Kel. Dwikora, Kec. Medan Helvetia, Kota Medan",
    telp: "(061) 8450 999",
    hp: "0821 6152 1966",
  },
  {
    no: 16,
    kota: "Palembang",
    alamat: "Jl. Basuki Rahmat No. 1891, Kel. Pahlawan, Kec. Kemuning, Kota Palembang",
    telp: "(0711) 573 2065",
    hp: "0812 3456 7890",
  },
]

const groupedKantorCabang = computed(() => {
  const groups: Record<string, KantorData[]> = {}
  kantorCabang.forEach((kantor) => {
    if (!groups[kantor.kota]) groups[kantor.kota] = []
    groups[kantor.kota].push(kantor)
  })
  return groups
})
</script>
