<script>
  import { goto } from "$app/navigation";
</script>

<div class="horizontal">

  <div class="vertical">
    <h1>Lea Kapp</h1>
    <!-- <h2>Short stories by a tall lady.</h2>
    <a href="/stories">
      <button>Enter</button>
    </a> -->

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
        <a href="/gallery">
          Artist
        </a>

        <a href="/gallery">
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
  h2 {
    font-family: "Poiret One";
    font-size: 24px;
    margin-top: 4px;
    margin-bottom: 36px;
  }
  .menuWrap {
    display: flex;
    margin-top: 5rem;
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
  button {
    background-color: var(--primary);
    border: none;
    color: var(--whitish);
    font-size: 48px;
    font-family: "Poiret One";
    border-radius: 16px;
    padding: 12px 24px 12px 24px;
    cursor: pointer;
  }
  img {
    max-height: 100vh;
  }
</style>