<template>
    <img 
        :src="growthStageImgSrc" 
        class="w-10 h-10"
    />
</template>

<script>
    export default {
        props: {
            growthStage: {
            type: String,
            required: true,
            },
        },
        computed: {
            growthStageImgSrc() {
                let thisGrowthStage = this.growthStage;
                switch(thisGrowthStage) {
                    case 'seed' : return require('~/assets/images/growth-icons/idea-seed.png')
                    case 'sprout' : return require('~/assets/images/growth-icons/experiment-sprout.png')
                    case 'plant' : return require('~/assets/images/growth-icons/essay-plant.png')
                    default: console.warn('growth stage not configured'); break;
                }
            }
        },
        methods: {
            
        },
    }
</script>