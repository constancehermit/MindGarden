<template>
  <div class="bg-light dark:bg-dark">
    <div class="min-h-screen w-screen">
      <div class="max-w-7xl mx-auto">
        <Nav/>
        <Nuxt />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      const isDarkModeCookie = this.$cookies.get('isDarkMode');
      if (isDarkModeCookie !== undefined){
        this.$store.commit('setDarkMode', isDarkModeCookie);
        document.documentElement.classList.toggle('dark', isDarkModeCookie);
      }
    }
  }
</script>
