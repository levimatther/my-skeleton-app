<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

function drawerClose(): void {
	drawerStore.close();
}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose} class="">Dashboard</a></li>
		<li><a href="/forums" on:click={drawerClose}>Forums</a></li>
		<li><a href="/threads" on:click={drawerClose}>Threads</a></li>
		<li><a href="/characters" on:click={drawerClose}>Characters</a></li>
		<li><a href="/players" on:click={drawerClose}>Players</a></li>
	</ul>
</nav>