<template>
<div class="transition duration-500 ease-in-out hover:-translate-y-1">
    <div class="bg-white bg-repeat shadow p-3 m-2 h-fit rounded-md">
      <li class="list-none">
        <a :href="`/garden/${post.slug}`">
          <ul v-if="post.tags" class="flex space-x-1 mt-2">
            <li class="text-gray-400" v-for="tag in post.tags" :key="tag">
              {{ tag }}
            </li>
          </ul>
          <h2 class="mt-2 text-2xl font-semibold">{{ post.title }}</h2>
        </a>
      </li>
    </div>
</div>
</template>
<script>
export default {
  props: {
    post: Object,
  }
}
</script>