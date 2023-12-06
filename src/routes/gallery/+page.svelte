<script>

  import {search, tagSearch} from '$lib/nav.js';
  import { gallery } from '$lib/gallery.js';

  export let data;

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

  // preload search tag if passed a query param
  if (data.tag) {
    ({ showItems: showPics, searchTags } = tagSearch(gallery, searchTags, data.tag))
  }
  
</script>

<nav>
  <div class="topNav">
    <h1><a href="/">&lt;</a> Gallery</h1>

    <div class="searchBox">
      Search:
      <input bind:value={searchText} on:input={() => {showPics = search(gallery, searchText)}} />
    </div>
    
  </div>

  <div class="tags">
    Tags:
    {#each allTags as tag}
      <button on:click={() => ({ showItems: showPics, searchTags } = tagSearch(gallery, searchTags, tag))} 
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
    margin: 1rem 1rem 0 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  .tags button {
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    color: var(--whitish);
    padding: .6rem 1rem;
    margin: 0 .5rem 1rem .5rem;
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
    margin: 0 1rem 1rem 1rem;
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

  @media screen and (max-width: 1200px) {
    .galleryBoard {
      column-count: 2;
    }
  }
  @media screen and (max-width: 900px) {
    .topNav {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 800px) {
    .galleryBoard {
      column-count: 1;
    }
    nav {
      font-family: "Poiret One";
      font-size: 1.8rem;
    }
  }
</style>