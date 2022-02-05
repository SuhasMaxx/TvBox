<template src="./showrow.template.html"></template>
<style src="./showrow.style.css" scoped></style>
<script>
import ShowBlock from "../ShowBlock/ShowBlock.vue";
/**
 * Row of shows with same Genre
 *
 * @class ShowRow
 */
export default {
    components: {
        ShowBlock
    },
    props: {
        showList: Object
    },
    mounted(){
        // this.getData();
    },
}
</script>
