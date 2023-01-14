
<template>
    <p style="white-space: pre;" class="text-xs text-red">{{ text }} </p>
</template>

<script>
    export default {
        props: {
            text: {
            type: String,
            required: true,
            },
        },
    }
</script>