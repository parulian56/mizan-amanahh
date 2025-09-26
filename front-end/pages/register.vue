<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
      <h1 class="text-xl font-bold mb-4">Register</h1>
      
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label class="block text-sm font-medium">Username</label>
          <input v-model="username" type="text" class="w-full border rounded-lg px-3 py-2 mt-1" />
        </div>

        <div class="mb-3">
          <label class="block text-sm font-medium">Password</label>
          <input v-model="password" type="password" class="w-full border rounded-lg px-3 py-2 mt-1" />
        </div>

        <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Register
        </button>
      </form>

      <p v-if="error" class="text-red-500 text-sm mt-3">{{ error }}</p>
      <p class="text-sm mt-3">
        Sudah punya akun? 
        <NuxtLink to="/login" class="text-blue-600">Login</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { register } = useAuth()
const username = ref('')
const password = ref('')
const error = ref('')

async function handleRegister() {
  try {
    await register(username.value, password.value)
  } catch (e) {
    error.value = 'Gagal register!'
  }
}
</script>
