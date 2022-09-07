<template>
    <article>
      <div class="w-full grid grid-cols-3 col-span-3 col-start-1 ">
        <div class="w-full col-span-3 col-start-1 px-4">
          <nuxt-content class="mt-4 prose max-w-none" :document="note" />
        </div>
      </div>
    </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const note = await $content('privacy', params.slug).fetch()
    return { note }
  },
}
</script>