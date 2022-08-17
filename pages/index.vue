<template>
  <div class="">
    <h1 class="text-4xl">The Garden</h1>
    <ul class="grid grid-cols-4 gap-8 mt-8">
      <PostPreview v-for="post in posts" :key="post.slug" :post="post"></PostPreview>
    </ul>
  </div>
</template>

  <script>
    export default {
      async asyncData({ $content }) {
        const posts = await $content()
          .only(['title', 'tags', 'slug'])
          .sortBy('updatedAt', 'desc')
          .fetch()
        console.log(posts)
        return {
          posts,
        }
      },
    }
  </script>
