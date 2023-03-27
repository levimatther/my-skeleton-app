<script lang="ts">
    import ForumTileList from '$lib/components/forum/ForumTileList.svelte';
    import type { Forum } from '$lib/types';
    export let data;
    
    const forums = data.props.forums as Forum[];
</script>

<ForumTileList forums={forums}/>