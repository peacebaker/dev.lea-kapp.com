<script>
  import {search, tagSearch} from '$lib/nav.js';
  export let data;

  let showStories = data.stories;
  let searchText = "";
  let searchTags = [];

  let allTags = data.tags;

</script>

<nav>
  <div class="topNav">
    <h1><a href="/">&lt;</a> Stories</h1>

    <div class="searchBox">
      Search:
      <input bind:value={searchText} on:input={() => {showStories = search(data.stories, searchText)}} />
    </div>
    
  </div>

  <div class="tags">
    Tags:
    {#each allTags as tag}
      <button on:click={() => ({showItems: showStories, searchTags} = tagSearch(data.stories, searchTags, tag)) }
        class:active={searchTags.includes(tag)}
        class:inactive={!searchTags.includes(tag)}>
        {tag}
      </button>
    {/each}
  </div>
</nav>

<div class="storyBoard">
  {#each showStories as story}

    <a href={`/stories/${story.slug}`}>
      <div class="storyCard">
        <h2>{story.title}</h2>  
        {@html story.pages[0]}
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
 
  .storyBoard {
    column-count: 3;
    column-gap: 1rem;
    margin: 0 1rem 1rem 1rem;
  }
  .storyCard {
    background-color: var(--grayish);
    border-radius: 1.5rem;
    padding: 1rem 1.5rem 2rem 1.5rem;
    break-inside: avoid;
    margin-bottom: 1rem;
  }
  .storyCard h2 {
    text-align: center;
  }
  
  @media screen and (max-width: 1200px) {
    .storyBoard {
      column-count: 2;
    } 
  }
  @media screen and (max-width: 900px) {
    .topNav {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 800px) {
    .storyBoard {
      column-count: 1;
    }
    nav {
      font-family: "Poiret One";
      font-size: 1.8rem;
    }
  }
</style>