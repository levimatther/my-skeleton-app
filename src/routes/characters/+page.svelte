<script>
  import CharacterTileList from '$lib/components/character/CharacterTileList.svelte';
  import CharacterCRUDTile from '$lib/components/character/CharacterCRUDTile.svelte';

  export let data;
  console.log(data);
</script>

<CharacterTileList/>
<CharacterCRUDTile/>