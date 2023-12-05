<script>
</script>

<div class="horizontal">

  <div class="vertical">
    <h1>Lea Kapp</h1>
    <a href="/bio" id="bioLink">About Me</a>

    <div class="menuWrap">
      <div class="menu">
        <a href="/stories">
          Author
        </a>
    
        <a href="https://github.com/peacebaker" target="_blank">
          Developer
        </a>
      </div>
      
      <div class="menu">
        <a href="/gallery?tag=art">
          Artist
        </a>

        <a href="/gallery?tag=design">
          Designer
        </a>
      </div>
    </div>
  </div>

  <img src="fried_selfie_dark.png" alt="selfie of Lea Kapp, digitlized, pixelated, and saturated into four primary colors: whitish, blackish, purple, and pink">
</div>

<style>
  .horizontal {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .vertical {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-family: "Poiret One";
    font-size: 96px;
    margin: 0;
  }
  #bioLink {
    font-family: "Poiret One";
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  .menuWrap {
    display: flex;
    margin-top: 4rem;
  }
  .menu {
    background-color: var(--grayish);
    border-radius: 16px;
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    font-size: 48px;
    font-family: "Poiret One";
    text-align: center;
    padding: 3rem;
    gap: 4rem;
  }
  img {
    max-height: 100vh;
  }
</style>