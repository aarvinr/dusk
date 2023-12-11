<script>
  import "@unocss/reset/tailwind.css";
  import "@fontsource-variable/inter";

  import "$lib/globals.css";
  import { pageTitle } from "$lib/globals";
</script>

<svelte:head>
  <title>{$pageTitle} \ Dusk</title>
</svelte:head>

<slot />
