<script>
  import {fly, fade} from 'svelte/transition';
  import Editor from '@tinymce/tinymce-svelte';
  
  export let data;
  let curPageNum = 0;

  function switchPage(i) {
    curPageNum = i;
  }
  function addPage() {
    data.story.pages = [...data.story.pages, ""];
  }

  // first test didn't include tags
  if (!("tags" in data.story)) {
    data.story.tags = [];
  }
  function toggleTag(tag) {
    if (data.story.tags.includes(tag)) {
      data.story.tags = [...data.story.tags.slice(0, data.story.tags.indexOf(tag)), ...data.story.tags.slice(data.story.tags.indexOf(tag)+1)]
    } else {
      data.story.tags = [...data.story.tags, tag]
    }
  }

  async function saveButton() {

    // new stories cannot be saved with the slug "new"
    if (data.story.slug === "new") {
      alert("Cannot save a story using slug 'new'.");
      return;
    }

    // build the url with the current slug
    const url = `/butt/stories/save`;

    // send a POST request to the save form
    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.story)
      });

      // pop up with an alert if that fails
      if (!resp.ok) {
        console.log(resp);
        alert("save failed, check log");
      }

    } catch (error) {
      console.error(error.message);
    }
  }
</script>

<main>

  <!-- editable title and slug; warning: this might not be accessible? -->
  <!-- using spans b/c inputs can't be easily resized based on text input-->
  <h1>
    <span role="textbox" tabindex="0" contenteditable bind:innerHTML={data.story.title} />
  </h1>
  <span class="slug" role="textbox" tabindex="0" contenteditable bind:innerHTML={data.story.slug} />

  <a class="returnLink" href="/butt/stories">Return to Stories</a>

  <div class="pager" >
    {#each data.story.pages as page, i}
      <button on:click={() => switchPage(i)} 
        transition:fade={{duration: 600}}
        class:active={curPageNum == i} 
        class:inactive={curPageNum != i}>
        {i}
      </button>
    {/each}
    <button class="inactive" on:click={() => addPage()}>+</button>
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
          <Editor scriptSrc="/tinymce/tinymce.min.js" bind:value={data.story.pages[i]} />
        </section>
      
      {/if}
    {/each}
  </div>

  <div class="tags">
    <h2>Tags</h2>
    <div class="tagList">
      {#each data.allTags as tag}
        <button on:click={() => toggleTag(tag)}
          class:active={data.story.tags.includes(tag)}
          class:inactive={!data.story.tags.includes(tag)}>
          {tag}
        </button>
      {/each}
    </div>
  </div>

  <button on:click={() => saveButton()}>Save</button>
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
  h1 span {
    border-bottom: 1px solid var(--whitish);
    color: inherit;
    min-width: 20rem;
    max-width: 60rem;
  }
  .slug {
    font-family: "Poiret One";
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
  }

  .tags {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--grayish);
    border-radius: 1.5rem;
    padding: 0rem 3rem 1.67rem 3rem;
    margin-top: 1rem;
  }
  .tagList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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