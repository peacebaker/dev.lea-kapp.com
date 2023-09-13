<script>
</script>

<div class="horizontal">

  <div class="vertical">
    <h1>Hey, Cutie.</h1>
    <h2>You know what to do.</h2>
    <form class="login" method="POST">
      <label for="username">Username:</label>
      <input id="username" name="username" />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button >Login</button>
    </form>
  </div>
  
  <img src="/fried_selfie_dark.png" alt="selfie of Lea Kapp, digitlized, pixelated, and saturated into four primary colors: whitish, blackish, purple, and magenta">
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
  .login {
    display: flex;
    flex-direction: column;
    background-color: var(--grayish);
    border-radius: 24px;
    padding: 24px;
    font-size: 36px;
  }
  label {
    font-family: "Poiret One";
    margin-bottom: 12px;
  }
  input {
    width: 360px;
    margin-bottom: 24px;
    font-size: 28px;
  }
  button {
    background-color: var(--primary);
    border: none;
    color: var(--whitish);
    font-family: "Poiret One";
    border-radius: 16px;
    padding: 12px 24px 12px 24px;
    margin: 12px auto auto auto;
  }
  img {
    max-height: 100vh;
  }
</style>