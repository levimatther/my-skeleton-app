<script lang="ts">
  import ForumDetailsCard from "$lib/components/forum/ForumDetailsCard.svelte";
  export let data;
  let forum = data?.forum;
</script>

<ForumDetailsCard forum={forum} />
