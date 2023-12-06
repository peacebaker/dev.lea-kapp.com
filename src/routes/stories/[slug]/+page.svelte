<script>
  import {fly, fade} from 'svelte/transition';
  
  export let data;
  let curPageNum = 0;

  function switchPage(i) {
    curPageNum = i;
  }
</script>

<main>
  <h1>
    {data.story.title}
  </h1>

  <a class="returnLink" href="/stories">Return to Stories</a>

  <div class="pager" >
    {#each data.story.pages as page, i}
      <button on:click={() => switchPage(i)} 
        transition:fade={{duration: 600}}
        class:active={curPageNum == i} 
        class:inactive={curPageNum != i}>
        {i}
      </button>
    {/each}
  </div>
  
  <div class="pageContainer">
    {#each data.story.pages as page, i}
      {#if curPageNum == i}
   
        <section class="page" in:fly={{x: "50vw", duration: 600, delay: 300}} out:fly={{x: "-50vw", duration: 600}}>
          <h2>
            {#if curPageNum === 0}
              Teaser
            {:else}
              Page {curPageNum}
            {/if}
          </h2>
          {@html data.story.pages[i]}
        </section>
      
      {/if}
    {/each}
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 25vh;
  }
  h1 {
    margin: 3rem 0 1rem 0;
  }

  h2 {
    margin: 2.5rem 0 1.67rem 0;
  }
  .returnLink {
    font-family: "Poiret One";
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .pager {
    display: flex;
    flex-direction: row;
    margin: 2.5rem 0 1rem 0;
  }
  .active {
    background-color: var(--secondary);
  }
  .inactive {
    background-color: var(--primary);
  }
  .pager button {
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    color: var(--whitish);
    padding: .6rem 1rem;
    margin: 1rem;
    cursor: pointer;
  }

  .pageContainer {
    display: grid;
  }
  .page {
    grid-area: 1/1/2/2;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grayish);
    border-radius: 1.5rem;
    padding: 0rem 3rem 1.67rem 3rem;
    max-width: 660px;
  }

  button {
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    color: var(--whitish);
    padding: .6rem 1rem;
    margin: 1rem;
    cursor: pointer;
    background-color: var(--primary);
  }
</style>