<template>
  <section>
    <div class="container" v-for="posts in processedPosts">
      <div class="columns" v-for="post in posts">
        <div class="column is-6 is-offset-3">
           <div class="card">
           <header class="card-header">
             <p class="card-header-title">
            {{ post.title }}
            </p>
           </header>
           <div class="card-image">
           <a :href="post.url" target="_blank">
             <figure class="image">
               <img :src="post.image_url">
             </figure>
           </a>
           </div>
        
        <div class="card-content">
          <div class="content">
            <p>{{ post.abstract }}</p>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
export default{
  props: ['results'],
  computed: {
    processedPosts() {
      let posts = this.results;
      // Add image_url attribute
      posts.map(post => {
        let imgObj = post.multimedia.find(media => media.format === "superJumbo");
        post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
      });

      // Put Array into Chunks
      let i, j, chunkedArray = [],
        chunk = 4;
      for (i = 0, j = 0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i, i + chunk);
      }
      return chunkedArray;
    }
  }  
}
</script>