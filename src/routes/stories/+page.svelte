<script>
  import Teaser from "$lib/Teaser.svelte";
  export let data;
</script>

<div class="top">
  <h1>Stories</h1>
  <div class="search">Search: <input /></div>
</div>

<div class="tags">
  <div class="tag-label">
    Tags:
  </div>
</div>

<div class="teasers">
  {#each data.stories as story}
    <Teaser {...story} />
  {/each}
</div>

<style>
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: "Poiret One";
  }
  h1 {
    font-size: 96px;
    margin: 16px;
  }
  .search {
    font-size: 36px;
    margin: 16px;
  }
  input {
    border: 0;
    background-color: inherit;
    border-bottom: 2px solid var(--primary);
    color: var(--whitish);
  }
  .tags {
    display: flex;
    flex-direction: row;
  }
  .tag-label {
    font-family: "Poiret One";
    font-size: 36px;
    margin: 0 0 16px 16px;
  }
  .teasers {
    display: grid;
    grid-template-columns: repeat(3, 1fr)
  }
  
  
</style>