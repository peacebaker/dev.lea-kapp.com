<script>
  import "normalize.css"
  import "@fontsource/poiret-one";
  import "@fontsource/open-sans";
</script>

<slot />

<style>
  :root {
    --blackish: #24243c;
    --grayish: #3c3c55;
    --whitish: #e6e6ff;
    --primary: #a719ff;
    --secondary: #ff19ff;
  }

  :global(body) {
    margin: 0;
    background-color: var(--blackish);
    color: var(--whitish);
    font-family: "Open Sans";
  }

  :global(h1) {
    font-family: "Poiret One";
    font-size: 6rem;
  }
  
  :global(h2) {
    font-family: "Poiret One";
    font-size: 3rem;
  }
  @keyframes link {
    0% {
      color: var(--whitish);
    }
    100% {
      color: var(--primary);
    }
  }
  :global(a:link, a:visited) {
    color: var(--whitish);
    text-decoration: none;
  }
  :global(a:hover) {
    color: var(--primary);
    text-decoration: none;
    animation-name: link;
    animation-duration: 1s;
    animation-timing-function: ease;
  }
  :global(a:active) {
    color: var(--secondary);
  }
</style>