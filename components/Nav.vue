<template>
    <nav class="ml-4 h-16 py-4">
        <div class="container flex justify-between items-center mx-auto">
            <div class="space-x-2">  
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
                    <a href="https://github.com/constancehermit/MindGarden">
                        <font-awesome-icon  :icon="{ prefix: 'fab', iconName: 'github' }" class="fa-lg"/>
                    </a>
                    <a href="https://bsky.app/profile/drawntocode.com">
                        <font-awesome-icon  :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fa-lg"/>
                    </a>
                    <a href="https://blanketfrog.tumblr.com/">
                        <font-awesome-icon  :icon="{ prefix: 'fab', iconName: 'tumblr' }" class="fa-lg"/>
                    </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    a.nuxt-link-active { font-weight: bold; }
</style>