<template>
    <div class="nav">
        <a v-if="showHomebutton" @click="goBack()"><font-awesome-icon :icon="['fas', 'angle-left']" /><span class="nav-label">Home</span></a>
        <slot></slot>
    </div>
</template>
<style scoped>
    .nav a{
        font-size: 2em;
        color: white;
        display: flex;
        align-items: center;
        text-decoration: none;
    }
    .nav a .nav-label{
        font-size: 0.7em;
        margin-left: 0.2em;
        cursor: pointer;
    }
</style>
<script>
export default({
    setup() {
        
    },
    props: {
        showHomebutton: Boolean,
        backPage: String
    },
    methods:{
        goBack() {
            this.$router.push(this.backPage ? '/'+this.backPage : '/')
        }
    }
})
</script>
