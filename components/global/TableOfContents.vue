<template>
    <nav v-if="toc.length!=0"
        class="pt-2 border-b border-slate-300 border-solid">
        <h3 class="text-xl dark:text-white">
            Contents
        </h3>
        <div id="toc" class="prose pb-4">
            <ul class="list-none pl-0">
                <li
                    v-for="link of toc"
                    :key="link.id"
                    :class="{
                        'pl-0': link.depth === 1,
                        'pl-4': link.depth === 2,
                        'pl-8': link.depth === 3
                    }"
                >
                    <span v-if="link.depth === 2"> </span>
                    <span v-if="link.depth === 2">&#8594; </span>
                    <span v-if="link.depth === 3">&#8627; </span>
                    <NuxtLink :to="`#${link.id}`"
                        class="">
                        {{ link.text }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

  <script>
  export default {
    props: ['toc'],
  }
  </script>
