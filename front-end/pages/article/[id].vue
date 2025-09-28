<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getArticle } from '@/services/article'

const route = useRoute()
const article = ref(null)

onMounted(async () => {
  const res = await getArticle(route.params.id)
  article.value = res.data
})
</script>
