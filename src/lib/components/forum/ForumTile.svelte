<script lang="ts">
	import type { Forum } from '$lib/types';
	export let forum: Forum;
</script>

<div
	class="card card-hover w-1/4 md:w-1/5 lg:w-1/6  ml-4 mb-4 aspect-[3/5]"
	style="background-image: url('{forum?.heroImage}'); background-size: cover;"
>
	<div class="w-full h-full hover:bg-black/70 rounded-md">
		<a href="/forum/{forum?.id}" class="card">
			<div
				class="variant-ghost rounded-md w-full h-full opacity-0 hover:opacity-100 flex flex-col justify-center items-center p-2"
			>
				<h3 class="text-lg font-bold text-white">{forum?.title}</h3>
				<p class="text-center text-primary-600 mt-1">{forum?.description}</p>
			</div>
		</a>
	</div>
</div>
