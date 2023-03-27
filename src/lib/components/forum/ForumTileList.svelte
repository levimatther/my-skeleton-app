<script lang="ts">
    import ForumTile from './ForumTile.svelte';
    import type { Forums } from '$lib/types';
    export let forums: Forums;

</script>


<div class="container flex flex-wrap mx-auto px-4 sm:px-6 lg:px-8">
    {#each forums as forum}
        <ForumTile {forum} />
    {/each}
</div>