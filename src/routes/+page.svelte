<script>
	import ActiveThreadTracker from '$lib/components/dashboard/ActiveThreadTracker.svelte';
	import Bookmarks from '$lib/components/dashboard/Bookmarks.svelte';
	import Onboarding from '$lib/components/dashboard/Onboarding.svelte';
	import ParticipatingForums from '$lib/components/dashboard/ParticipatingForums.svelte';

	export let data;
	console.log('data', data);
	
</script>

<Onboarding/>
<ParticipatingForums/>
<ActiveThreadTracker/>
<Bookmarks/>