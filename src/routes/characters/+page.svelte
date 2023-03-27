<script>
  import CharacterTileList from '$lib/character/CharacterTileList.svelte';
  import CharacterCRUDTile from '$lib/character/CharacterCRUDTile.svelte';

  export let data;
  console.log(data);
</script>

<CharacterTileList/>
<CharacterCRUDTile/>