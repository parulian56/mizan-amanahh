<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-primary text-white p-4 flex items-center gap-2">
      <router-link to="/" class="mr-3">
        <i class="fas fa-arrow-left text-xl"></i>
      </router-link>
      <h1 class="font-bold">Program</h1>
      <div class="flex-1"></div>
      <!-- Search -->
      <div class="relative w-2/3 md:w-1/3">
        <input
          v-model="search"
          type="text"
          placeholder="Cari Program"
          class="w-full rounded-md px-3 py-1 text-gray-800"
        />
        <span
          class="material-icons absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
        >
          search
        </span>
      </div>
    </header>

    <!-- Breadcrumb -->
    <nav class="bg-primary px-4 py-2 text-sm text-white">
     <ul class="flex items-center space-x-2">
        <li><a href="/" class="hover:underline">Home</a></li>
        <li>/</li>
        <li class="text-gray-200">Tentang</li>
      </ul>
    </nav>

    <!-- Tabs / Filter -->
    <div class="bg-white px-4 py-3 flex gap-3 overflow-x-auto border-b">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        :class="[ 
          'px-4 py-1 rounded-full text-sm whitespace-nowrap',
          activeCategory === cat
            ? 'bg-primary text-white font-medium'
            : 'bg-secondary text-white hover:bg-secondary-dark'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- List Programs -->
    <main class="p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="program in filteredPrograms"
        :key="program.id"
        class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
      >
        <!-- Gambar -->
        <img
          :src="program.image"
          :alt="program.title"
          class="w-full h-48 object-cover"
        />

        <!-- Konten -->
        <div class="p-4 flex flex-col flex-1">
          <h2 class="font-bold text-primary mb-2">
            {{ program.title }}
          </h2>

          <!-- Progress bar -->
          <div class="w-full bg-gray-200 h-2 rounded-full mb-2">
            <div
              class="bg-primary h-2 rounded-full"
              :style="{ width: program.progress + '%' }"
            ></div>
          </div>

          <!-- Info Donasi -->
          <div class="flex justify-between text-sm text-gray-600 mb-3">
            <div>
              Terkumpul<br />
              <span class="font-semibold">
                Rp. {{ formatNumber(program.collected) }}
              </span>
              <span class="text-xs">
                dari Rp. {{ formatNumber(program.target) }}
              </span>
            </div>
            <div class="text-right">
              Sisa Hari<br />
              <span class="font-semibold">{{ program.daysLeft }}</span>
            </div>
          </div>

          <!-- Tanggal & Kategori -->
          <div class="flex justify-between text-xs text-gray-500 mb-3">
            <span>{{ program.date }}</span>
            <span class="text-primary font-medium">{{ program.category }}</span>
          </div>

          <!-- Tombol -->
          <button
            class="bg-primary text-white py-2 rounded-lg mt-auto hover:bg-primary-dark transition"
          >
            DONASI
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const search = ref("");
const activeCategory = ref("Semua");

const programs = ref([
  {
    id: 1,
    title: "Nenek Penjual Sayur Berjuang Rawat Anaknya yang Sakit-sakitan",
    image: "https://via.placeholder.com/600x400.png?text=Program+1",
    collected: 12265173,
    target: 30000000,
    daysLeft: -143,
    date: "Senin, 31 Maret 2025",
    category: "Kemanusiaan",
  },
  {
    id: 2,
    title: "Sedekah Sembako & Bedah Rumah Nenek Eja Yang Hidup Sebatang Kara",
    image: "https://via.placeholder.com/600x400.png?text=Program+2",
    collected: 16108000,
    target: 30000000,
    daysLeft: -113,
    date: "Rabu, 30 April 2025",
    category: "Pendidikan",
  },
]);

programs.value.forEach((p) => {
  p.progress = Math.min(100, (p.collected / p.target) * 100);
});

const categories = computed(() => {
  const cats = ["Semua", ...new Set(programs.value.map((p) => p.category))];
  return cats;
});

const filteredPrograms = computed(() =>
  programs.value.filter((p) => {
    const matchSearch = p.title
      .toLowerCase()
      .includes(search.value.toLowerCase());
    const matchCategory =
      activeCategory.value === "Semua" || p.category === activeCategory.value;
    return matchSearch && matchCategory;
  })
);

function formatNumber(num) {
  return new Intl.NumberFormat("id-ID").format(num);
}
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

/* Primary → Orange 500 */
.bg-primary {
  background-color: #FB8505 !important;
}
.text-primary {
  color: #FB8505 !important;
}
.bg-primary-dark {
  background-color: #C96A04 !important; /* Orange 700 */
}

/* Secondary → Teal 500 */
.bg-secondary {
  background-color: #59AAB7 !important;
}
.text-secondary {
  color: #59AAB7 !important;
}
.bg-secondary-dark {
  background-color: #478892 !important; /* Teal 700 */
}

/* Tambahan */
.bg-light {
  background-color: #FDB669 !important; /* Orange 300 */
}
.bg-accent {
  background-color: #9BCCD4 !important; /* Teal 300 */
}
.bg-black-rich {
  background-color: #111111 !important;
}
.text-black-rich {
  color: #111111 !important;
}
</style>
