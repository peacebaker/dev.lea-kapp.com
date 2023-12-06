<script>
  import {Trash2} from 'lucide-svelte';

  export let data;
  let storyTags = data.tags;

  let galleryTags = [
    "Art",
    "Design",
  ];
</script>

<nav>
  <h1><a href="/butt/menu">&lt;</a> Tags</h1>
</nav>

<main class="tagBoard">
  <section class="tagCard">
    <h2>Story Tags</h2>

    <ul>
      {#each storyTags as tag}
        <li>
          <form method="POST" action="?/delete">
            {tag}
            <input type="hidden" name="tag" value={tag}>
            <button>
              <Trash2 size="1rem" />
            </button>
          </form>
        </li>
      {/each}

      <li>
        <form method="POST" action="?/add">
          <input name="tag" autocomplete="off">
        </form>
      </li>
    </ul>

  </section>
  <section class="tagCard">
    <h2>Gallery Tags</h2>
  </section>
</main>

<style>

  h1 {
    margin: 1rem;
  }
  h2 {
    text-align: center;
    margin: 1rem 0rem 1.67rem 0rem;
  }

  .tagBoard {
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;
  }

  .tagCard {
    background-color: var(--grayish);
    border-radius: 1.5rem;
    padding: 1rem 1.5rem 2rem 1.5rem;
    break-inside: avoid;
    margin-bottom: 1rem;
  }

  ul {
    /* margin: 0; */
    padding: 0 3rem;
  }
  li {
    padding: .2rem 0;
    font-size: 1.1rem;
  }
  input {
    background-color: var(--grayish);
    border-style: none;
    color: var(--whitish);
    border-bottom: 1px solid;
  }

</style>