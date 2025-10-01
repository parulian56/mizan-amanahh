<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-6 w-96">
      <h1 class="text-xl font-bold text-center">Register</h1>
      <form @submit.prevent="handleRegister" class="flex flex-col gap-3 mt-4">
        <input v-model="name" type="text" placeholder="Nama"
               class="border p-2 rounded" />
        <input v-model="email" type="email" placeholder="Email"
               class="border p-2 rounded" />
        <input v-model="password" type="password" placeholder="Password"
               class="border p-2 rounded" />
        <button type="submit"
                class="bg-green-600 text-white rounded p-2 hover:bg-green-700">
          Register
        </button>
      </form>
      <p class="text-center text-sm mt-2">
        Sudah punya akun?
        <NuxtLink to="/auth/login" class="text-blue-600">Login</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth"

const name = ref("")
const email = ref("")
const password = ref("")
const auth = useAuth()

const handleRegister = async () => {
  try {
    await auth.register(name.value, email.value, password.value)
    navigateTo("/auth/login")
  } catch (err) {
    alert("Register gagal!")
    console.error(err)
  }
}
</script>
