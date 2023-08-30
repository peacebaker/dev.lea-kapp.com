<script>
  import { goto } from "$app/navigation";
</script>

<div class="horizontal">

  <div class="vertical">
    <h1>Lea Kapp</h1>
    <h2>Short stories by a tall lady.</h2>
    <button on:click={() => goto("/stories")}>Enter</button>
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
  button {
    background-color: var(--primary);
    border: none;
    color: var(--whitish);
    font-size: 48px;
    font-family: "Poiret One";
    border-radius: 16px;
    padding: 12px 24px 12px 24px;
  }
  img {
    max-height: 100vh;
  }
</style>