<template>
    <div class="">
      <img 
      :src="imgSrc()" :alt="alt" 
      class="mt-0 mb-2 sm:max-w-full md:max-w-sm lg:max-w-md"/>
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
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (error) {
        // TODO: return a default image
        return null
      }
    }
  }
}
</script>