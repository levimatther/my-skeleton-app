<script>
    import ForumTile from './ForumTile.svelte';
    let testList = [0,1,2,3,4,5]
</script>


<div class="container flex flex-wrap mx-auto px-4 sm:px-6 lg:px-8">
    {#each testList as item}
        <ForumTile />
    {/each}
</div>