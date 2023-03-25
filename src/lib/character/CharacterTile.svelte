<script>
	let character = {
		id: 1,
		firstName: "Jimmi",
		lastName: "Neutron",
		age: 1234,
		soulType: "Undead", 
		species: "Human",
		avatar: "https://cdn.midjourney.com/eaa42a60-2bae-4661-8b16-a88ea9ef45c1/grid_0.png"
	}
</script>

<div
	class="card card-hover w-1/2 md:w-1/3 lg:w-1/4 ml-4 mb-4 aspect-square"
	style="background-image: url('{character?.avatar}'); background-size: cover;"
>
	<div class="w-full h-full hover:bg-black/70 rounded-md">
		<a href="/character/${character?.id}" class="card">
			<div
				class="flex flex-col variant-ghost rounded-md w-full h-full opacity-0 hover:opacity-100 justify-center items-center"
			>
				<h3 class="text-lg font-bold text-white">{character?.firstName} {character?.lastName}</h3>
				<dl class="flex justify-between mt-3">
					<dt class="sr-only">Character Age</dt>
					<dd class="badge variant-ghost-error text-white">{character?.age}</dd>

					<dt class="sr-only">Soul Type</dt>
					<dd class="badge variant-ghost-primary text-white">{character?.soulType}</dd>

					<dt class="sr-only">Species</dt>
					<span class="badge variant-ghost-secondary text-white">{character?.species}</span>
				</dl>
			</div>

		</a>
	</div>
</div>

