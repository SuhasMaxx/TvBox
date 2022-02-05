<template src="./searchresultblock.template.html" />
<style src="./searchresultblock.style.css" scoped></style>
<script>
/**
 * Small show block with show info on Home page
 *
 * @class ShowBlock
 */
export default {
    props: {
        showDetails: Object
    },
    mounted(){
        // this.getData();
    },
    methods: {
        gotoShowDetails() {
            this.$router.push('/show/'+this.showDetails.id)
        }
    }
}
</script>
