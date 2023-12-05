<script>

  import { gallery } from '$lib/gallery.js';

  let showPics = gallery;
  let searchText = '';
  let searchTags = [];

  // find the array tags
  let allTags = ["design", "art"];
  gallery.forEach(pic => {
    pic.tags.forEach(tag =>{
      if (!allTags.includes(tag)) {
        allTags = [...allTags, tag];
      }
    })
  })

  // 
  function search() {
    showPics = "";
    for (const pic of gallery) {
      if (pic.title.toLowerCase().includes(searchText.toLowerCase())) {
        showPics = [...showPics, pic];
      }
    }
  }

  //
  function tagSearch(tag) {

    // add the tag to the list if it's not there already
    if (!searchTags.includes(tag)) {
      searchTags = [...searchTags, tag]

    // remove the tag from the list if it's already there
    } else {
      searchTags = [...searchTags.slice(0, searchTags.indexOf(tag)), ...searchTags.slice(searchTags.indexOf(tag)+1)]
    }

    // display all pictures matching the tags
    showPics = [];
    if (searchTags.length > 0) {
      for (const pic of gallery) {
        for (const searchTag of searchTags)
          if (pic.tags.includes(searchTag)) {
            showPics = [...showPics, pic];
          }
      } 
    } else {
      showPics = gallery;
    }
  }

</script>

<nav>
  <div class="topNav">
    <h1><a href="/">&lt;</a> Gallery</h1>

    <div class="searchBox">
      Search:
      <input bind:value={searchText} on:input={() => search()} />
    </div>
    
  </div>

  <div class="tags">
    Tags:
    {#each allTags as tag}
      <button on:click={() => tagSearch(tag)} 
        class:active={searchTags.includes(tag)}
        class:inactive={!searchTags.includes(tag)}>
        {tag}
      </button>
    {/each}
  </div>
</nav>

<div class="galleryBoard">
  {#each showPics as pic, i}

    <a href={`/gallery/${pic.slug}`}>
      <div class="galleryCard">
      
        <h2>{pic.title}</h2>
        <img src="gallery/{pic.filename}" alt="" />
      
      </div>
    </a>  
  {/each}
</div>


<style>
  h1 {
    margin: 1rem;
  }
  h2 {
    margin: 2rem;
  }
  nav {
    font-family: "Poiret One";
    font-size: 2.5rem;
  }

  .topNav {
    display: flex;
    justify-content: space-between;
  }
  .searchBox {
    margin: 1rem;

  }
  .searchBox input {
    font-family: "Open Sans";
    font-size: 1.5rem;
    color: var(--whitish);
    background-color: inherit;
    border: none;
    border-bottom: 1px solid var(--whitish);
  }
  .tags {
    margin: 1rem;
    display: flex;
  }
  .tags button {
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    color: var(--whitish);
    padding: .6rem 1rem;
    margin: 0 .5rem;
    cursor: pointer;
    font-family: "Open Sans";
    font-size: 1rem;
  }
  .inactive {
    background-color: var(--primary);
  }
  .active {
    background-color: var(--secondary);
  }
  
  .galleryBoard {
    column-count: 3;
    column-gap: 1rem;
  }
  .galleryCard {
    background-color: var(--grayish);
    border-radius: 1.5rem;
    padding: 1rem 1.5rem 2rem 1.5rem;
    break-inside: avoid;
    margin-bottom: 1rem;
  }
  .galleryCard h2 {
    text-align: center;
  }
  .galleryCard img {
    max-width: 100%;
    height: auto;
    display: block;
  }

</style>