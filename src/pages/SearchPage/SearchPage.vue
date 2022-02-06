<template src="./searchpage.template.html" ></template>
<script>
import {TvMazeService} from '../../services/tvmaze.service.ts';
import SearchResultBlock from '../../components/SearchResultBlock/SearchResultBlock.vue';
import TvButton from '../../components/TvButton/TvButton.vue';
import NavBar from '../../components/NavBar/NavBar.vue';
import TvSpinner from '../../components/TvSpinner/TvSpinner.vue';
import TvAlert from '../../components/TvAlert/TvAlert.vue';
/**
 * TV Box search page component
 * On this page user can type input and search for a show.
 *
 * @class Search
 */
export default {
	components: {
			SearchResultBlock,
			TvButton,
			NavBar,
			TvSpinner,
			TvAlert
	},
	data(){
		return {
			loading: false,
			searchString: '',
			searchResult: [],
			errorMsg: ''
		}
	},
	methods: {
		async searchShows(){
			this.errorMsg = '';
			this.loading = true;
			if(this.searchString.length > 2){
					this.searchResult = await TvMazeService.searchTVShows(this.searchString);
					if(!this.searchResult.length){
						this.errorMsg = "Nothing matched that!😐 Try something else."
					}
					this.loading = false;
				}
			},
		/**
		 * Calls for search function if user has entered a vallid string
		 */
		onEnter(){
				if(this.searchString.trim()){
					this.searchShows();
				} else {
					this.errorMsg = "Please enter valid search input"
				}
		},
	}
}
</script>
<style src="./searchpage.style.css" scoped></style>
