<template>
  <div class="font-sans">
    <h1 class="text-4xl text-center pt-12 pb-8">The Garden</h1>
    <masonry :cols="3" :gutter="10">
      <PostPreview v-for="post in posts" :key="post.slug" :post="post"></PostPreview>
    </masonry>
  </div>
</template>

  <script>
    export default {
      async asyncData({ $content }) {
        const posts = await $content('garden')
          .only(['title', 'tags', 'slug'])
          .sortBy('updatedAt', 'desc')
          .fetch()
        return {
          posts,
        }
      },
    }
  </script>
