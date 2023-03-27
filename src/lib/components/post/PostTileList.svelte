<script>
    import Post from '$lib/components/post/PostTile.svelte';

    const testList = [0,1,2,3,4,5]
</script>

<div class="container mx-auto px-4 sm:px-6 lg:px-8">
    {#each testList as item}
        <Post />
    {/each}
</div>