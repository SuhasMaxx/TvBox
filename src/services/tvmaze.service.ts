const API_BASE_URL = "https://api.tvmaze.com";
let allShowsData: any = null;
let genreList = null;
const SHOWS_PER_GENRE_RESULT = 10;

const fetchAllShows = async () => {
  const showData = await fetch(API_BASE_URL + "/shows");
  const allShowsRawData = await showData.json();
  allShowsData = allShowsRawData.filter((show) => show.rating.average);
  generateGenreList();
};

const generateGenreList = () => {
  genreList = [];
  allShowsData.map(function (show) {
    if (show.genres?.length) {
      show.genres.map(function (genre) {
        if (genreList.indexOf(genre) < 0) {
          genreList.push(genre);
        }
      });
    }
  });
  console.log(genreList);
};

const buildGenreWiseShowList = () => {
  var showList = [];
  showList = genreList.map((genre) => generateMapList(genre));
  console.log(showList);
  return showList;
};

const generateMapList = (genre) => {
  return {
    genre,
    showList: showListOfGenre(genre),
  };
};

const showListOfGenre = (genre) => {
  return allShowsData.filter(
    function (show) {
      if (
        this.count < SHOWS_PER_GENRE_RESULT &&
        show.genres.indexOf(genre) >= 0
      ) {
        this.count++;
        return true;
      }
      return false;
    },
    { count: 0 }
  );
};

const getTopTVShows = async () => {
  if (!allShowsData) {
    await fetchAllShows();
  }
  return buildGenreWiseShowList();

  /* return allShowsData.filter(show => show.rating.average) 
    .sort((a, b) => a.rating.average > b.rating.average ? -1 : 1) 
    .slice(0, 9); */
};
/* const getTopTenTVShowsOfGenre = async (genre) => {
    if(!allShowsData){
        await fetchAllShows();
    } 
    return allShowsData.filter(show => show.rating.average && show.genres?.indexOf(genre) >= 0) 
    .sort((a, b) => a.rating.average > b.rating.average ? -1 : 1)
    .map
    .slice(0, 9);
    
} */

const searchTVShows = async (searchStr) => {
  const showData = await fetch(API_BASE_URL + "/search/shows?q=" + searchStr);
  const searchResult = await showData.json();
  console.log(searchResult);
  return searchResult;
};

const getShowDetails = async (showId) => {
  const showData = await fetch(API_BASE_URL + "/shows/" + showId);
  const searchResult = await showData.json();
  console.log(searchResult);
  return searchResult;
}

export const TvMazeService = {
  getTopTVShows,
  searchTVShows,
  getShowDetails,
};
