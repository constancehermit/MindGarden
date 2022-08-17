<template>
  <li class="transition-all duration-500 ease-in-out">
    <a :href="`/blog/${post.slug}`">
      <ul v-if="post.tags" class="flex space-x-1 mt-2">
        <li class="text-gray-400" v-for="tag in post.tags" :key="tag">
          {{ tag }}
        </li>
      </ul>
      <h2 class="mt-2 text-3xl font-semibold">{{ post.title }}</h2>
    </a>
  </li>
</template>
<script>
export default {
  props: {
    post: Object,
  }
}
</script>