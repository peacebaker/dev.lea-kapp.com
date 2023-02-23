<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  let y;
  let maxY;
  let navOffset;
  $: navOffset = (maxY-80)/2

  export let data;

  let title = data.story.title;
  let pages = data.story.pages;

  //  create a summary page, using the teaser as text
  let summaryPage = {
    page_num: 0,
    publish_date: data.story.publish_date,
    text: data.story.teaser
  }
  pages.unshift(summaryPage);

  // set the default page to 0 unless a specific page has been requested
  let curPage = pages[0];
  let pageNum = $page.url.searchParams.get('page');
  if ( pageNum != null) {
    curPage = pages[pageNum];
  }
  

  // change to the selected page
  function setPage(num) {

    // replace page content and update parameters
    curPage = pages[num];
    $page.url.searchParams.set('page', num);

    // page 0 should reset to no query string
    if (num == 0) {
      $page.url.searchParams.delete('page');
    }

    // updates the url; doesn't do much else since we're on the same page
    goto(`?${$page.url.searchParams.toString()}`);
  }

  // changes curPage to the previous page
  function prevPage() {
    let newPage = curPage.page_num - 1;
    if (newPage < 0) {
      alert("How did you get here? $lib/FullStory > prevPage");
    } else {
      setPage(newPage);
    }
  }

  // changes curPage to the next page
  function nextPage() {
    let newPage = curPage.page_num + 1;
    if (newPage == pages.length) {
      alert("How did you get here? $lib/FullStory > nextPage");
    } else {
      setPage(newPage);
    }
  }
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={maxY} />

<!-- page begins -->
<div class="columns">

  <!-- show prev page -->
  {#if curPage.page_num != 0}
    <div class="column is-1 is-offset-2 level">
      <div class="level-item">
        <button class="button nav-button is-size-4 has-background-black" style="top: {navOffset}px;"
        on:click={prevPage}>&lt;</button>
      </div>
    </div>
  {:else}
  	<div class="column is-3"></div>
  {/if}

  <!-- display page -->
  <div class="column is-6 has-background-black">
    <hr>
    <h1 class="title has-text-centered">{title}</h1>
    <h2 class="subtitle has-text-centered">
      {#if curPage.page_num == 0}
        Summary
      {:else}
        Page {curPage.page_num}
      {/if}
    </h2>
    <hr>
    <div class="story-content">
      {@html curPage.text}
    </div>
    <hr>

    <!-- table of contents -->
    <h2 class="subtitle has-text-centered">
      Table of Contents
    </h2>
    <hr>
    <div class="columns is-multiline">
      {#each pages as page}
      <div class="column is-3 has-text-centered">
        <button class="button is-white is-outlined" on:click={() => setPage(page.page_num)}>
          {#if page.page_num == 0}
          Summary
          {:else}
          Page {page.page_num}
          {/if}
        </button>
      </div>
      {/each}
    </div>
  </div>

  <!-- show next page -->
  {#if curPage.page_num+1 < pages.length }
    <div class="column is-1 level">
      <div class="level-item">
        <button class="button nav-button is-size-4 title has-background-black" style="top: {navOffset}px;"
        on:click={nextPage}>&gt;</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .story-content {
    text-indent: 3em;
  }
  .nav-button {
    position: fixed;
  }
</style>