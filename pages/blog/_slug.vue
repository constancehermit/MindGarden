<template>
  <article class="grid grid-cols-12 pb-24">

    <div class="w-full col-start-1 col-span-12 grid grid-cols-12">
      <div class="col-start-4 col-span-6 w-full">
        <div>
          <NuxtLink to="/" href="/" class="block text-gray-400 mt-8">← Go Back</NuxtLink>
          <ul v-if="post.tags" class="flex space-x-3 mt-2">
            <li
              class="text-gray-400 font-bold"
              v-for="tag in post.tags"
              :key="tag"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
        <nuxt-content class="mt-4 prose max-w-none" :document="post" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content(params.slug).fetch()
    return { post }
  },
}
</script>