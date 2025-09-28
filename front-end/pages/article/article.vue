<template>
  <div>
    <h1>Artikel</h1>
    <ul>
      <li v-for="a in articles" :key="a.id">
        <NuxtLink :to="`/articles/${a.id}`">{{ a.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getArticles } from '@/services/article'

const articles = ref([])

onMounted(async () => {
  const res = await getArticles()
  articles.value = res.data
})
</script>
