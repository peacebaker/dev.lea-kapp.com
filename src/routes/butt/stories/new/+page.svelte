<script>
  import Editor from '@tinymce/tinymce-svelte';
</script>

<main>
  <h1>New Story Title</h1>

  <a class="returnLink" href="/butt/stories">Return to Stories</a>

  <div class="pager">
    <button>0</button>
  </div>

  <section>
    <h2>Teaser</h2>
    <Editor scriptSrc="/tinymce/tinymce.min.js" />
  </section>

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
    margin: 3rem 0 2rem 0;
  }
  .returnLink {
    font-family: "Poiret One";
    font-size: 1.5rem;
  }
  .pager {
    display: flex;
    flex-direction: row;
    margin: 2.5rem 0 1rem 0;
  }
  .pager button {
    background-color: var(--secondary);
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    color: var(--whitish);
    padding: .6rem 1rem;
    margin: 1rem;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grayish);
    border-radius: 1.5rem;
    padding: 0rem 3rem 2rem 3rem;
  }
</style>