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

<style>
  .bg-light {
  @apply transition duration-500;
  }
  .bg-dark {
    @apply transition duration-500;
  }
</style>