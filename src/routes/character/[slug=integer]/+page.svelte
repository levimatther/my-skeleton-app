<script lang="ts">
  import CharacterDetails from '$lib/components/character/CharacterDetails.svelte';

  export let data
  let character = data?.props?.character
</script>

<main class="m-2">
  <CharacterDetails character={character} />
</main>