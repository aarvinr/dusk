<script>
  import { pageTitle } from "$lib/globals";

  pageTitle.set("Sign Up");
  let email, password, confirm;
</script>

<main>
  <a href="/"><img src="/favicon.png" alt="Dusk Logo" /></a>
  <form method="post">
    <h2>Create an Account</h2>
    <div>
      <label for="email">Email</label>
      <input
        name="email"
        type="email"
        bind:value={email}
        placeholder="email@provider.com"
        required
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        name="password"
        type="password"
        bind:value={password}
        placeholder="••••••••••"
        required
      />
    </div>
    <div>
      <label for="confirm">Confirm Password</label>
      <input
        name="confirm"
        type="password"
        bind:value={confirm}
        placeholder="••••••••••"
        required
      />
    </div>
    <p>
      By signing up, you agree to our <a href="/terms">Terms of Service</a>.
    </p>
    <button type="submit">Get Started</button>
  </form>
</main>

<style>
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  main > form {
    width: 30%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    background-color: #0a0a0a;
  }

  a > img {
    width: 4rem;
  }

  form > h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
  }

  form > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  form > p,
  div > label {
    color: #a3a3a3;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  form > button {
    color: #000000;
    background-color: #ffffff;
    padding: 0.3rem;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 0.125rem;
  }

  div > input {
    outline: solid 1px #0a0a0a;
    padding: 0.3rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 0.125rem;
    background-color: #262626;
    transition: outline 0.2s;
  }

  div > input:hover {
    outline: solid 1px #404040;
  }

  div > input:focus {
    outline: solid 1px #404040;
  }

  div > input::placeholder {
    color: #a3a3a3;
  }
</style>
