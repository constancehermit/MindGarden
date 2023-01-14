// The dynamic height only works in combination with safelisting h-* from Tailwind's purge (see tailwind.config.js)
// https://tailwindcss.com/docs/content-configuration#safelisting-classes
<template>
    <div :class="['h-' + height]"></div>
</template>

<script>
    export default {
        props: {
            height: {
            type: Number,
            required: true,
            default: 2.5
            },
        },
    }
</script>