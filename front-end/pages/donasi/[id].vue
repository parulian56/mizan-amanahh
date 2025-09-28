<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="bg-white shadow rounded-xl p-6 w-full max-w-md">
      <h1 class="text-xl font-bold mb-4">
        Donasi untuk Program {{ programId }}
      </h1>

      <form @submit.prevent="submitDonasi" class="space-y-4">
  <input
    v-model="donorName"
    type="text"
    placeholder="Nama Anda"
    class="w-full border rounded p-2"
    required
  />

  <input
    v-model.number="amount"
    type="number"
    placeholder="Jumlah Donasi"
    class="w-full border rounded p-2"
    required
  />

  <!-- Pilihan metode pembayaran -->
  <select v-model="paymentMethod" class="w-full border rounded p-2" required>
    <option disabled value="">Pilih Metode Pembayaran</option>
    <option value="transfer">Transfer Bank</option>
    <option value="ewallet">E-Wallet</option>
    <option value="qris">QRIS</option>
  </select>

  <button
    type="submit"
    class="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
    :disabled="loading"
  >
    {{ loading ? "Mengirim..." : "Kirim Donasi" }}
  </button>
</form>


      <p v-if="message" class="mt-4 text-center text-green-600">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const programId = route.params.id;
const donorName = ref("");
const amount = ref(null);
const paymentMethod = ref(""); // ⬅️ state baru
const loading = ref(false);
const message = ref("");

const submitDonasi = async () => {
  loading.value = true;
  try {
    await $fetch("http://localhost:3001/donations", {
      method: "POST",
      body: {
        donorName: donorName.value,
        amount: amount.value,
        programId: programId,
        paymentMethod: paymentMethod.value, // ⬅️ kirim ke backend
      },
    });

    message.value = "Donasi berhasil dikirim! Terima kasih 🙏";
    donorName.value = "";
    amount.value = "";
    paymentMethod.value = "";

    setTimeout(() => {
      router.push(`/program/${programId}`);
    }, 2000);
  } catch (err) {
    console.error("Gagal kirim donasi:", err);
    message.value = "Gagal kirim donasi, coba lagi.";
  } finally {
    loading.value = false;
  }
};
</script>
