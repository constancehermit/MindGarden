<template>
    <blockquote>
        <span 
            class="">
            <b>{{ quote }}</b>
        </span>
        <br/>
        <span 
            class="text-sm text-slate-400/75 italic">
            -- <a 
                :href="sourcelink" class="text-sky-600/75">
                {{sourcetext}}
            </a>
        </span>
    </blockquote>
</template>

<script>
export default {
    props: {
        quote: {
            type: String,
            required: true
        },
        sourcetext: {
            type: String, 
            required: false
        },
        sourcelink: {
            type: String,
            required: false
        }
    }
}
</script>