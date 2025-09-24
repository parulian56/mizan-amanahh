<script setup>
import { ref, computed } from "vue"
import { useFetch } from "#app" // bawaan nuxt

const { data: programs } = await useFetch('http://localhost:3001/programs')

const search = ref("")
const activeCategory = ref("Semua")
const categories = ["Semua", "Zakat", "Wakaf", "Sosial"]

const filteredPrograms = computed(() => {
  if (!programs.value) return []

  return programs.value.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.value.toLowerCase())
    const matchCategory = activeCategory.value === "Semua" || p.category_program === activeCategory.value
    return matchSearch && matchCategory
  }).map(p => ({
    ...p,
    progress: Math.min(100, Math.round((p.collected_donation / p.donation_target) * 100))
  }))
})

const formatNumber = (num) => {
  return new Intl.NumberFormat("id-ID").format(num || 0)
}

// Fungsi untuk donasi
const donasi = async (programId) => {
  try {
    const res = await $fetch("http://localhost:3001/donasi", {
      method: "POST",
      body: {
        program_id: programId,
        amount: 10000 // contoh nominal tetap, nanti bisa bikin form input jumlah
      },
    })
    alert("Donasi berhasil!")
    console.log("res:", res)
  } catch (err) {
    console.error(err)
    alert("Donasi gagal")
  }
}
</script>