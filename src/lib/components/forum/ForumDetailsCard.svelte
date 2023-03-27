<script lang="ts">
	import type { Forum } from '$lib/types';
	export let forum: Forum;
</script>

<div
	class="w-4/1 aspect-[21/5] lg:aspect-[21/3] rounded-md"
	style="background-image: url('{forum?.heroImage}'); background-size: cover;"
>
	<div
		class="variant-ghost rounded-md w-full h-full flex flex-col justify-center items-start pl-5 lg:pl-20 "
	>
		<h2 class="text-lg font-bold text-white">{forum?.title}</h2>
		<p class="text-center text-white mt-1">{forum?.description}</p>
	</div>
</div>
