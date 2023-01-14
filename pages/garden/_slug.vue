<template>
  <article class="grid grid-cols-12 pb-4">

    <div class="w-full col-start-1 col-span-12 grid grid-cols-12">
      <div class="col-start-2 col-span-10 w-full pb-4">
        <NuxtLink to="/" href="/" class="block text-gray-400 mt-8">← Go Back</NuxtLink>
      </div>
      <div class="col-start-2 col-span-10 w-full bg-white px-10 shadow-md pb-12">
        
        <div>
          <div class="border-b-2 border-slate-300 border-solid pt-12 pb-4">
              <h1 class="text-3xl">{{note.title}}</h1>
              <span class="text-sm text-gray-400"> First Planted: {{ formatDate(note.firstPlanted)}} </span> <br/> 
              <span class="text-sm text-gray-400"> Last Tended: {{formatDate(note.lastTended)}} </span>
          </div>
          <ul v-if="note.tags" class="flex space-x-3 mt-2 pb-2">
            <li
              class="text-gray-400"
              v-for="tag in note.tags"
              :key="tag"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
        <nuxt-content class="mt-4 prose max-w-none" :document="note" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    let note = await $content('garden', params.slug).fetch()
    return { note }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en-gb', options)
    }
  }
}
</script>