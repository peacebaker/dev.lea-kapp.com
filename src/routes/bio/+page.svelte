<script>
</script>

<div class="horizontal">

  <div class="vertical">
    <h1>Lea Kapp</h1>
    <a href="/" id="bioLink">Menu</a>
    
    <div class="bio">
      <p>I swear: I'm a real person, not an AI.  I might be trapped inside the net, but I'm no Alt Cunningham.</p>
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
  .bio {
    background-color: var(--grayish);
    border-radius: 16px;
    margin: 3rem 2rem;
    display: flex;
    flex-direction: column;
    font-family: "Open Sans";
    padding: 1rem 1.5rem 1rem 1.5rem;
    max-width: 50%;
  }
  img {
    max-height: 100vh;
  }
</style>