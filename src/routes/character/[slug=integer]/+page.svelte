<script lang="ts">
  import type { PageData } from './$types';
  import CharacterDetails from '$lib/character/CharacterDetails.svelte';

  export let data: PageData;

  console.log("data", data);
</script>

<main class="m-2">
  <CharacterDetails />
</main>