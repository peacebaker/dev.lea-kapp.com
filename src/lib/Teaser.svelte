<script>
  import { goto } from "$app/navigation";

  export let title;
  export let date;
  export let text;
  export let slug;

  let url = `stories/${slug}`

  const jsDate = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

</script>

<div class="teaser" on:click={() => goto(url)} on:keydown={(e) => e.key === "Enter" ? goto(url) : ""} role="button" tabindex="0">
  <h2>
    {title}
  </h2>
  <p class="date">{jsDate.toLocaleString("en-US", options)}</p>
  <div class="teaser-text">
    {@html text}
  </div>
</div>

<style>
  .teaser {
    display: flex;
    flex-direction: column;
    background-color: var(--grayish);
    border-radius: 24px;
    margin: 16px;
    padding: 24px;
    cursor: pointer;
  }
  h2 {
    font-family: "Poiret One";
    font-size: 48px;
    margin: 0 auto 0 auto;
  }
  p.date {
    margin: 4px auto 24px auto;
    font-size: 14px;
  }
  .teaser-text :global(p) {
    margin: 0 0 16px 0;
    text-indent: 2em;
  }
</style>