<script>
    import CharacterTile from './CharacterTile.svelte';
    let testList = [0,1,2,3,4,5]
</script>


<div class="container flex flex-wrap mx-auto">
    {#each testList as item}
        <CharacterTile />
    {/each}
</div>