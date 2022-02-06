<template>
    <div class="btn-div">
        <slot></slot>
    </div>
</template>
<style scoped>
    .btn-div{
        background-color: var(--imperial-red); 
        border: 2px solid var(--blood-red);
        color: white;
        padding: .375rem .75rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1rem;
        margin: 0.5em;
        transition-duration: 0.4s;
        cursor: pointer;
        border-radius: 0.3rem;
        font-weight: bold;
        line-height: 1.5;
        font-weight: 400;
    }

    .btn-div:hover {
        background-color: var(--ruby-red);
    }
</style>
<script>

export default({
    setup() {
        
    },
})
</script>
