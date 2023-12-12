<script>
  import { page } from "$app/stores";
  import { pageTitle } from "$lib/globals";

  pageTitle.set(new URL($page.url).pathname.replace("/", ""));
</script>

<main>
  <img src="/favicon.png" alt="Dusk Logo" />
  <h1>We couldn't find that page.</h1>
  <p>The link might be broken, or this page might have moved.</p>
  <div>
    <a href="/">Go Back</a>
    <a href="https://github.com/aarvinr/dusk/issues">File an Issue</a>
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
    text-decoration: none;
  }

  div > a[href="/"] {
    color: #000000;
    background-color: #ffffff;
  }

  div > a[href="https://github.com/aarvinr/dusk/issues"]
  {
    color: #ffffff;
    background-color: #262626;
    border: 1px solid #404040;
    transition: background-color 0.2s;
  }

  div > a[href="https://github.com/aarvinr/dusk/issues"]:hover
  {
    background-color: #404040;
  }
</style>
