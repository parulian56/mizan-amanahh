// composables/useAuth.ts
import { ref } from 'vue'

const API_URL = 'http://localhost:3000' // ganti sesuai backend NestJS kamu

export function useAuth() {
  const user = ref(null)

  async function register(username: string, password: string) {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    if (!res.ok) {
      throw new Error('Register failed')
    }

    const data = await res.json()
    user.value = data
    return data
  }

  return { user, register }
}
