<template>
<div class="transition duration-500 ease-in-out hover:-translate-y-1">
    <div class="bg-white bg-repeat shadow p-3 m-2 h-fit rounded-md text-center">
      <li class="list-none">
        <a :href="`/garden/${post.slug}`">
          <!-- <ul v-if="post.tags" class="flex space-x-1 mt-2">
            <li class="text-gray-400" v-for="tag in post.tags" :key="tag">
              {{ tag }}
            </li>
          </ul> -->
          <div class="grid place-items-center"> 
            <growth-stage-icon :growthStage="post.growthStage"></growth-stage-icon>  
          </div>
          <h2 class="mt-2 text-2xl font-semibold mb-4">{{ post.title }}</h2>
          <img 
            v-if="post.thumbnail" 
            :src="imgSrc(post.thumbnail)"
            class=""
          />
        </a>
      </li>
    </div>
</div>
</template>
<script>
import GrowthStageIcon from './global/GrowthStageIcon.vue'
export default {
  props: {
    post: Object,
  },
  methods: {
    imgSrc(partial) {
      try {
        return require(`~/assets/images/${partial}`)
      } catch (error) {
        // TODO: return a default image
        return null
      }
    }
  }
}
</script>