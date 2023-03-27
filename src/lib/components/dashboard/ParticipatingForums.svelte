<script lang="ts">
    import ForumTileList from "$lib/components/forum/ForumTileList.svelte";
    import type { Forums } from "$lib/types";
    export let forums: Forums = [];
</script>

<div class="m-2">
    <h2>Your Forums</h2>
    <ForumTileList forums={forums}/>
</div>