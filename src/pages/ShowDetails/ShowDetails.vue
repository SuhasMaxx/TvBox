<template src="./showdetails.template.html">
</template>
<style src="./showdetails.style.css"></style>
<script>
import { useRoute } from 'vue-router';
import NavBar from '../../components/NavBar/NavBar.vue';
import {TvMazeService} from '../../services/tvmaze.service.ts';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default{
    props: {

    },
    components: {
        FontAwesomeIcon,
        NavBar,
    },
    data() {
        return {
            showId: 0,
            showDetails: null
        }
    },
    mounted(){
        const route = useRoute();
        this.showId = route.params.id || 1;
        this.getShowData();
    },
    methods: {
        async getShowData(){
            this.showDetails = await TvMazeService.getShowDetails(this.showId);
        }
    }
}
</script>
