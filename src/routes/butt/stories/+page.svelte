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
    font-family: "Poiret One";
    font-size: 96px;
    margin: 1rem;
  }
  h2 {
    font-family: "Poiret One";
    font-size: 48px;
  }
  nav {
    font-family: "Poiret One";
    font-size: 36px;
  }

  .topNav {
    display: flex;
    justify-content: space-between;
  }
  .searchBox input {
    font-family: "Open Sans";
    font-size: 24px;
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
    border-radius: 24px;
  }
  .storyCard h2 {
    text-align: center;
  }
  
</style>