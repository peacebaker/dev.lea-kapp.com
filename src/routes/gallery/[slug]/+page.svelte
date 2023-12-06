<script>
  export let data;
</script>

<main>

  <h1>
    {data.curPic.title}
  </h1>

  <a class="returnLink" href="/gallery">Return to Gallery</a>
  
  <div class="sectionContainer">

    <section>
      <div class="description">
        {@html data.curPic.description}
      </div>
    
      <div>
        <img src={data.curPic.filename} alt={data.curPic.alt}>
      </div>
      
    </section>
  
  </div>

  <div class="sectionContainer">
    {#if data.prevPic}
      <a href="/gallery/{data.prevPic.slug}">
        <button>
          &lt; Previous
        </button>
      </a>
    {/if}
    {#if data.nextPic}
      <a href="/gallery/{data.nextPic.slug}">
        <button>
          Next &gt;
        </button>
      </a>
    {/if}
  </div>

</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 90vh;
  }
  h1 {
    margin: 3rem 1rem 1rem 1rem;
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
    margin-bottom: 2rem;
  }

  .sectionContainer {
    display: flex;
    align-items: center;
  }
  .sectionContainer a button{
    font-size: 1rem;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grayish);
    border-radius: 1.5rem;
    padding: 1.67rem 3rem 1.67rem 3rem;
    max-width: 760px;
    overflow: hidden;
    resize: both;
    box-sizing: border-box;
  }
  .description {
    /* max-width: 50%; */
    padding-bottom: 1rem;
  }
  img {
    max-width: 100%;
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