<script>
  // import a few svelte functions
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  // declaring data automagically populates it with the contents of the load function from +page.js
  export let data;

  // 
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

  // table of contents button text
  function getSubtitle(num) {
    if (num == 0) {
      return "Summary";
    } else {
      return `Page ${num}`;
    }
  }

  // finally, declare variables that will shift with the state
  let subtitle;
  $: subtitle = getSubtitle(curPage.page_num)
</script>

<!-- page begins -->
<div class="columns">
  <div class="column is-2"></div>

  <!-- display page -->
  <div class="column is-8 has-background-black">
    <hr>
    <h1 class="title has-text-centered">
      {title}
    </h1>
    <h2 class="subtitle has-text-centered">
      {subtitle}
    </h2>
    <hr>
    <div class="story-content">
      {@html curPage.text}
    </div>
    <hr>

    <!-- table of contents -->
    <h2 class="subtitle has-text-centered" id="ToC">
      Table of Contents
    </h2>
    <hr>
    <div class="columns is-multiline is-mobile is-centered">
      {#each pages as page}
        <div class="column has-text-centered">
          {#if page.page_num == curPage.page_num}
            <button class="button is-white is-outlined" disabled>
              {subtitle}
            </button>
          {:else}
            <button class="button is-white is-outlined" on:click={() => setPage(page.page_num)}>
              {getSubtitle(page.page_num)}
            </button>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  <div class="column is-3 is-hidden-mobile">
    <a href="#">
      <button class="button goto-top title has-background-black">&uarr;</button>
    </a>
    <a href="#ToC">
      <button class="button goto-bottom title has-background-black">&darr;</button>
    </a>
  </div>
</div>

<style>
  .story-content {
    text-indent: 3em;
  }
  .goto-top {
    position: fixed;
    top: 2em;
    right: .5em;
  }
  .goto-bottom {
    position: fixed;
    bottom: .5em;
    right: .5em;
  }
</style>