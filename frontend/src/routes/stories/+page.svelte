<script>
  export let data;
</script>

<div class="columns">
  <div class="column is-8 is-offset-2 has-background-black pb-0">
    <hr>
    <h1 class="title has-text-centered">Short Stories</h1>
    <hr>
  </div>
</div>

{#each data.stories as story}
<div class="columns">
  <div class="column is-8 is-offset-2 has-background-black py-0">
    <!-- story title -->
    <h1 class="title is-4">
      <a href="/stories/{story.slug}">
        {story.title}
      </a>
    </h1>

    <!-- completion date -->
    <h2 class="subtitle is-6">
      Finished: {story.finish_date}
    </h2>
    <div class="story-teaser">
      {@html story.teaser}
    </div>
    <hr>
  </div>
</div>
{/each}

<style>
  .story-teaser {
    text-indent: 3em;
  }
</style>