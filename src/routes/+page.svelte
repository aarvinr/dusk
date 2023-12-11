<script>
  import { pageTitle } from "$lib/globals";

  pageTitle.set("Home");
</script>

<main>
  <img src="/favicon.png" alt="Dusk Logo" />
  <h1>One place to keep track<br />of your library.</h1>
  <p>
    Dusk is a webapp for cataloging your books, movies, games, music, & more.
  </p>
  <div>
    <a href="/signup">Get Started</a>
    <a href="/login">Log In</a>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    padding: 4rem;
  }

  main > img {
    width: 4rem;
  }

  main > h1 {
    font-size: 3.75rem;
    line-height: 1;
    font-weight: 600;
  }

  main > p {
    color: #d3d3d3;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  main > div {
    display: flex;
    gap: 1rem;
  }

  div > a {
    padding: 0.4rem 1.2rem;
    border-radius: 2rem;
    font-weight: 600;
  }

  div > a[href="/signup"] {
    color: #000000;
    background-color: #FFFFFF;
  }

  div > a[href="/login"] {
    background-color: #404040;
    border: 1px solid #525252;
    transition: background-color 0.2s;
  }

  div > a[href="/login"]:hover {
    background-color: #525252;
  }
</style>
