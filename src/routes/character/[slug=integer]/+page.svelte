<script lang="ts">
  import CharacterDetails from '$lib/character/CharacterDetails.svelte';

  export let data
  console.log("data", data);
</script>

<main class="m-2">
  <CharacterDetails />
</main>