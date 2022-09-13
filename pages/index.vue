<template>
  <div class="font-sans grid grid-cols-3">
    <h1 class="text-4xl text-center pt-8 pb-8 col-span-3">The Garden</h1>
    <div class="col-span-3 col-start-1 p-4 md:p-8 lg:px-8 mb-4">
      <span class="prose">
        <i>In French, “cultiver son jardin intérieur” means to tend to your internal garden—to take care of your mind. 
        The garden metaphor is particularly apt: taking care of your mind involves cultivating your curiosity (the seeds), 
        growing your knowledge (the trees), and producing new thoughts (the fruits).</i> -- <a href="https://nesslabs.com/mind-garden">Anne-Laure Le Cunff</a>
      </span> 
    </div>
    <div class="col-span-3 col-start-1">
      <masonry 
        :cols="{default: 3, 1024: 3, 768: 2, 640: 1}" 
        :gutter="{default: 10, 1024: 10, 768: 8, 640: 4}"
      >
      <PostPreview 
        v-for="post in posts" :key="post.slug" :post="post"
        class="mr-2"
      ></PostPreview>
    </masonry>
    </div>
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
