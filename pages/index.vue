<template>
  <div class="">
    <h1 class="text-4xl">The Garden</h1>
    <masonry :cols="3" :gutter="10">
    <!-- <ul class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-8 md:gap-4 mt-8"> -->
      <PostPreview v-for="post in posts" :key="post.slug" :post="post"></PostPreview>
    <!-- </ul> -->
    </masonry>
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
