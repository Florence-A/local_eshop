<template>
    <div>
        <SignUpIn origin-cms></SignUpIn>
    </div>
</template>

<script>

import SignUpIn from './shop/SignUpIn.vue'

export default {
    name: 'cmsSignUpIn',
    props: {
        originCms: Boolean
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