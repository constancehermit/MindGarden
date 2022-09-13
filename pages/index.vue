<template>
  <div class="font-sans">
    <h1 class="text-4xl text-center pt-8 pb-8">The Garden</h1>
      <masonry 
        :cols="{default: 3, 1000: 3, 700: 2, 400: 1}" 
        :gutter="{default: 10, 1000: 10, 700: 8, 400: 4}"
      >
      <PostPreview 
        v-for="post in posts" :key="post.slug" :post="post"
        class="mr-2"
      ></PostPreview>
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
