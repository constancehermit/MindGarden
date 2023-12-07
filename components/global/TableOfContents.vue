<template>
    <div class="pt-2">
        <h3 class="text-xl">
            Contents
        </h3>
        <div id="toc" class="prose pb-2">
            <ul class="list-none pl-0">
                <li
                    v-for="link of toc"
                    :key="link.id"
                    :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
                    >
                    &#8594; <NuxtLink :to="`#${link.id}`"
                        class="">
                        {{ link.text }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <hr>
    </div>
</template>
  
  <script>
  export default {
    props: ['toc'],
  }
  </script>