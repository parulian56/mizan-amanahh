```vue
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-6 w-96">
      <h1 class="text-xl font-bold text-center">Login</h1>
      <form @submit.prevent="handleLogin" class="flex flex-col gap-3 mt-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="border p-2 rounded"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="border p-2 rounded"
        />
        <button
          type="submit"
          class="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <p class="text-center text-sm mt-2">
        Belum punya akun?
        <NuxtLink to="/auth/register" class="text-blue-600">Register</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useAuth } from "~/composables/useAuth"
import { navigateTo } from "#app"

const email = ref("")
const password = ref("")
const auth = useAuth()

const handleLogin = async () => {
  try {
    await auth.login(email.value, password.value)
    navigateTo("/") // setelah login, arahkan ke home
  } catch (err) {
    alert("Login gagal!")
    console.error(err)
  }
}
</script>
```
