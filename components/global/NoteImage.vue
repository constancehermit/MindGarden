<template>
    <div class="mx-auto border-2 rounded-lg max-w-max bg-white px-4 pt-4 pb-4">
      <img 
        :src="imgSrc()" :alt="alt" 
        class="mt-0 mb-2 sm:max-w-full md:max-w-sm lg:max-w-md"/>
      <span>{{caption}}</span>
      <span 
        v-if="sourcelink">
          (via <a :href="sourcelink">{{sourcetext}}</a>)
      </span>
    </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    },
    sourcetext: {
      type: String, 
      required: false
    },
    sourcelink: {
      type: String,
      required: false
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>