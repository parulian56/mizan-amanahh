<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-[#9BCDD4] to-[#59AAB7]">
    <!-- Header -->
    <header class="bg-gradient-to-r from-[#FB8505] to-[#C96A04] text-white shadow-lg">
      <div class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div class="flex items-center font-bold text-xl">
          🏛️ <span class="ml-2">mizan amanah</span>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 flex justify-center items-center px-4 py-10">
      <div
        class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-[slideUp_0.6s_ease-out]"
      >
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#FB8505] to-[#C96A04] text-white text-center py-8 px-6">
          <h1 class="text-2xl font-semibold mb-2">Masuk Akun</h1>
          <p class="text-sm opacity-90">Silakan masuk dengan akun Anda</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="p-6 space-y-6">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-[#111111] mb-1">
              Email atau Username
            </label>
            <input
              v-model="email"
              id="email"
              type="text"
              required
              placeholder="Masukkan email atau username"
              class="w-full px-4 py-3 border-2 rounded-lg text-[#111111] bg-gray-50 focus:outline-none focus:border-[#478892] focus:bg-white transition"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-[#111111] mb-1">
              Password
            </label>
            <div class="relative">
              <input
                v-model="password"
                id="password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="Masukkan password"
                class="w-full px-4 py-3 border-2 rounded-lg text-[#111111] bg-gray-50 focus:outline-none focus:border-[#478892] focus:bg-white transition"
              />
              <button
                type="button"
                @click="togglePassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#FB8505] text-lg"
              >
                {{ showPassword ? '🙈' : '👁️' }}
              </button>
            </div>
          </div>

          <!-- Options -->
          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="remember" class="w-4 h-4 text-[#FB8505] rounded" />
              <span class="text-[#111111]">Ingat saya</span>
            </label>
            <a href="#" class="text-[#C96A04] font-medium hover:underline">Lupa password?</a>
          </div>

          <!-- Button -->
          <button
            type="submit"
            :class="[ 
              'w-full py-3 rounded-lg font-semibold text-white transition shadow-md',
              loading
                ? 'bg-gradient-to-r from-[#59AAB7] to-[#478892]'
                : 'bg-gradient-to-r from-[#FB8505] to-[#C96A04] hover:shadow-lg hover:-translate-y-1 transform'
            ]"
          >
            {{ loading ? 'Berhasil! Mengalihkan...' : 'Masuk' }}
          </button>

          <!-- Footer -->
          <div class="text-center border-t pt-4 text-sm text-[#111111]">
            Belum punya akun?
            <a href="#" class="text-[#FB8505] font-medium hover:underline">Daftar sekarang</a>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const remember = ref(false);
const loading = ref(false);

function togglePassword() {
  showPassword.value = !showPassword.value;
}

function handleLogin() {
  if (email.value && password.value) {
    loading.value = true;
    setTimeout(() => {
      alert("Login berhasil! (Demo)");
      loading.value = false;
    }, 1500);
  }
}

function toggleMenu() {
  alert("Menu clicked! (Demo)");
}
</script>

<style>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
