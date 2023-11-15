<script>
  export let data;
</script>

<nav>
  <div class="topNav">
    <h1>Stories</h1>

    <div class="searchBox">
      Search:
      <input />
    </div>
    
  </div>

  <div class="tags">
    Tags:
  </div>
</nav>




<div class="storyBoard">
  <a href="/butt/stories/new" class="storyCard">
    <h2>New Story</h2>
  </a>
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
  }
 
  .storyBoard {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 1rem;
  }
  .storyCard {
    background-color: var(--grayish);
    border-radius: 1.5rem;
  }
  .storyCard h2 {
    text-align: center;
  }
  
</style>