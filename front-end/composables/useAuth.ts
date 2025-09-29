export const useAuth = () => {
  const user = useState<any | null>("user", () => null)
  const token = useState<string | null>("token", () => null)
  const apiBase = useRuntimeConfig().public.apiBase || "http://localhost:3000"

  async function login(email: string, password: string) {
    const res = await $fetch(`${apiBase}/auth/login`, {
      method: "POST",
      body: { email, password },
    })
    token.value = (res as any).access_token
    localStorage.setItem("token", token.value as string)
    return res
  }

  async function register(name: string, email: string, password: string) {
    return await $fetch(`${apiBase}/auth/register`, {
      method: "POST",
      body: { name, email, password },
    })
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem("token")
  }

  return { user, token, login, register, logout }
}
