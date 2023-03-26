<script>
	import ActiveThreadTracker from '$lib/dashboard/ActiveThreadTracker.svelte';
	import Bookmarks from '$lib/dashboard/Bookmarks.svelte';
	import Onboarding from '$lib/dashboard/Onboarding.svelte';
	import ParticipatingForums from '$lib/dashboard/ParticipatingForums.svelte';

	export let data;
	console.log('data', data);
	
</script>

<Onboarding/>
<ParticipatingForums/>
<ActiveThreadTracker/>
<Bookmarks/>