<template>
  <div id="app">
    <products :results="results"></products>
  </div>
</template>

<script>
import Products from './components/Products'

const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "18e1540d187c4b46bae767782750f9fd";
const SECTIONS = "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world";

function buildUrl (url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey
}

export default {
  name: 'app',
  data: function(){
    return {
    results: [],
    sections: SECTIONS.split(', '), // create an array of the sections
    section: 'home', // set default section to 'home'
    loading: true,
    title: ''
    }
  },
  components: {
    Products
  },
  mounted(){
    this.getPosts('home');
  },
  methods:{
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.loading = false;
        this.results = response.data.results;
        let title = this.section !== 'home' ? "Top stories in '"+ this.section + "' today" : "Top stories today";
        this.title = title + "(" + response.data.num_results+ ")";
      }).catch((error) => { console.log(error); });
    }    
  }
}
</script>

