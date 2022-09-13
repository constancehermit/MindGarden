<template>
    <nav class="ml-4 h-16 py-4">
        <div class="space-x-2">  
            <span> 
                <NuxtLink to="/">Garden</NuxtLink>
             </span>
            <span> 
                <NuxtLink to="/library">Library</NuxtLink>
            </span>
            <span> 
                <NuxtLink to="/study">Study</NuxtLink>
            </span>
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