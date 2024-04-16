<template>
    <article>
      <div class="w-full grid grid-cols-3 col-span-3 col-start-1 "
            v-for="policy in policy" :key="policy.title">
        <div class="w-full col-span-3 col-start-1 px-4">
          <h1 class="text-4xl py-4 dark:text-white">{{policy.title}}</h1>
          <span class="dark:text-white">Last updated: {{ formatDate(policy.updatedAt) }}</span>
          <nuxt-content class="mt-4 prose dark:prose-invert max-w-none" :document="policy" />
        </div>
      </div>
    </article>
</template>

<script>

export default {
    async asyncData({ $content, params }) {
        const policy = await $content('legal', params.slug).fetch()
        return { policy }
    },
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en-gb', options)
        }
    }
}
</script>
