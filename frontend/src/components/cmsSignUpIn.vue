<template>
    <div>
        <SignUpIn from-cms-page></SignUpIn>
    </div>
</template>

<script>

import SignUpIn from './shop/SignUpIn.vue'

export default {
    name: 'cmsSignUpIn',
    props: {
        fromCmsPage: Boolean
    },
    components: {
        SignUpIn
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>



</style>