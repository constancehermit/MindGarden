<template>
  <article class="grid grid-cols-12 pb-4">

    <div class="w-full col-start-1 col-span-12 grid grid-cols-12">
      <div class="col-start-2 col-span-10 w-full pb-4">
        <NuxtLink to="/" href="/" class="block text-gray-400 mt-8">← Go Back</NuxtLink>
      </div>
      <div class="col-start-2 col-span-10 w-full bg-white px-10 shadow-md pb-12">
        
        <div class="pb-6">
          <div class="border-b border-slate-300 border-solid pt-12 pb-2 text-center">
              <h1 class="text-3xl pb-4">{{note.title}}</h1>
              <div class="grid grid-rows-1 grid-cols-2 pt-4 text-sm text-gray-400">
                <span class="place-self-start"> 
                  <b class="text-gray-500">First Planted</b>: {{ formatDate(note.firstPlanted)}} 
                </span> 
                <span class="place-self-end"> 
                  <b class="text-gray-500">Last Tended</b>: {{formatDate(note.lastTended)}} 
                </span>
              </div>
          </div>
          <!-- TODO: Add tags back in when there's a tag filter on garden -->
          <!-- <ul v-if="note.tags" class="flex space-x-3 mt-2 pb-2">
            <li
              class="text-gray-400"
              v-for="tag in note.tags"
              :key="tag"
            >
              {{ tag }}
            </li>
          </ul> -->
        </div>
        <TableOfContents :toc="note.toc" />
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