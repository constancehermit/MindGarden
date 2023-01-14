<template>
  <div :class="[isCenter ? 'grid place-items-center' : '']">
    <div 
      class="sm:max-w-full md:max-w-sm"
      :class="[isFullWidth ? 'lg:max-w-full' : 'lg:max-w-md']">
      <img 
      :src="imgSrc()" :alt="alt" 
      class="mt-0 mb-1"/>
      <span 
        v-if="caption"
        class="text-xs"> 
        {{caption}}  
      </span>
    </div>
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
      required: false
    },
    isCenter: {
      type: Boolean,
      default: false,
      required: false
    },
    isFullWidth: {
      type: Boolean,
      required: false,
    }
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