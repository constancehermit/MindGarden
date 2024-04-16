<template>
    <nav class="ml-4 h-16 py-4">
        <div class="container flex justify-between items-center mx-auto">
            <div class="space-x-2 dark:text-white">
                <span>
                    Study
                    <!-- <NuxtLink to="/study">Study</NuxtLink> -->
                </span>
                <span>
                    <NuxtLink to="/">Garden</NuxtLink>
                </span>
                <span>
                    Library
                    <!-- <NuxtLink to="/library">Library</NuxtLink> -->
                </span>
                <span>
                    Atelier
                    <!-- <NuxtLink to="/atelier">Atelier</NuxtLink> -->
                </span>
            </div>
            <div class="block w-auto text-base mr-4">
                <button @click="toggleDarkMode" class="mr-1 rounded-md border-2 px-1 border-slate-300 dark:border-slate-500">
                    <font-awesome-icon
                        icon="moon"
                        :class="['fa-lg', 'dark:text-white', {'opacity-50': !isDarkMode}]"/>
                    <font-awesome-icon
                        icon="sun"
                        :class="['fa-lg', 'dark:text-white', {'opacity-50': isDarkMode}]"/>
                </button>
                <a href="https://github.com/constancehermit/MindGarden">
                    <font-awesome-icon  :icon="{ prefix: 'fab', iconName: 'github' }" class="fa-lg dark:text-white"/>
                </a>
                <a href="https://bsky.app/profile/drawntocode.com">
                    <font-awesome-icon  :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fa-lg dark:text-white"/>
                </a>
                <a href="https://blanketfrog.tumblr.com/">
                    <font-awesome-icon  :icon="{ prefix: 'fab', iconName: 'tumblr' }" class="fa-lg dark:text-white"/>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
      isDarkMode(){
        return this.$store.state.isDarkMode;
      }
    },
  watch: {
    isDarkMode(newVal) {
      console.log('isDarkMode changed:', newVal);
    }
  },
    methods: {
        toggleDarkMode() {
            this.$store.commit('toggleDarkMode');
            document.documentElement.classList.toggle(
                'dark', this.isDarkMode
            );
            this.$cookies.set('isDarkMode', this.isDarkMode);
        },
    },
}
</script>

<style scoped>
    a.nuxt-link-active { font-weight: bold; }
</style>
