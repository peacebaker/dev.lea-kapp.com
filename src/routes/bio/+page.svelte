<script>
</script>

<div class="horizontal">

  <div class="vertical">
    <h1>Lea Kapp</h1>
    <a href="/" id="bioLink">Menu</a>
    
    <div class="bio">
      <p>Hey there,</p>
      <p>
        My name is Lea Kapp.  I'm an developer, author, philosopher, foodie, and more recently, an artist.
        This website is where I'll post or link to all of my content, a portal to my web presence.
        It's like a social media page without the constant stream of incoming noise.
      </p>
      <p>
        A little bit about me:
      </p>
      <ul>
        <li>I'm a lover of fine wine and cheap beer.</li>
        <li>I believe artificial intelligences should have personhood status.</li>
        <li>My favorite DnD class is a bard.</li>
        <li>I've solved most of life's ultimate questions, and I don't care to elaborate.</li>
        <li>The next time I die, I want to come back as a butterfly.</li>
      </ul>
      <p>
        All intellectual property rights reserved, except where otherwise noted.
      </p>
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
  p {
    margin: .67rem .33rem;
  }
</style>