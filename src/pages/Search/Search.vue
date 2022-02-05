<template src="./search.template.html" ></template>
<style src="./search.style.css" scoped></style>
<script>
import {TvMazeService} from '../../services/tvmaze.service.ts';
import SearchResultBlock from '../../components/SearchResultBlock/SearchResultBlock.vue';
import TButton from '../../components/TButton/TButton.vue'
/**
 * Search show page
 *
 * @class Search
 */
export default {
    data(){
        return {
            loading: false,
            searchString: '',
            searchResult: []
        }
    },
    components: {
        SearchResultBlock,
        TButton
    },
    methods: {
        async searchShows(){
            this.loading = true;
            if(this.searchString.length > 2){
                this.searchResult = await TvMazeService.searchTVShows(this.searchString);
                console.log('ecieved data : ', this.searchResult)
                this.loading = false;
            }
         },
        /**
         * Calls for search function if user has entered a vallid string
         */
        onEnter(){
        if(this.searchString.trim()){
            this.searchShows();
        }
        },
    }
}
</script>
