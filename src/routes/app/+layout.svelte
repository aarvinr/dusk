<script>
  import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<Sidebar />
<main>
  <slot />
</main>

<style>
  main {
    margin-left: 5rem;
    padding: 1rem;
  }
</style>
