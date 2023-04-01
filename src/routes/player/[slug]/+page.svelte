<script lang="ts">
    export let data;
    // console.log('page data: ', data);

    let player = data?.player;
</script>

{#if data}
    <h1>{player?.alias}</h1>
{/if}