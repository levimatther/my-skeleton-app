<script>
	import ActiveThreadTracker from '$lib/dashboard/ActiveThreadTracker.svelte';
	import Bookmarks from '$lib/dashboard/Bookmarks.svelte';
	import Onboarding from '$lib/dashboard/Onboarding.svelte';
	import ParticipatingForums from '$lib/dashboard/ParticipatingForums.svelte';
	import { onMount } from 'svelte';

	export let data;
	console.log('data', data);

	let a = 0;
	let b = 0;
	let total = 0;

	async function add() {
	const response = await fetch('/api/random-number', {
		method: 'POST',
		body: JSON.stringify({ a, b }),
		headers: {
		'content-type': 'application/json'
		}
	});

	total = await response.json();
	console.log('total', total)
	}

	onMount(add);
	
</script>

<Onboarding/>
<ParticipatingForums/>
<ActiveThreadTracker/>
<Bookmarks/>