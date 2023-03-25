<script lang="ts">
	import type { Character } from '$lib/types'; 
	let character: Character = {
		id: 2,
		firstName: "New",
		lastName: "Character",
		age: 0,
		soulType: "undead", 
		species: "angel",
		avatar: "https://cdn.midjourney.com/70d47279-6011-4b04-9180-bbf0ba543c93/grid_0.png",
		createdAt: "2021-08-01T00:00:00.000Z",
		updatedAt: "2021-08-01T00:00:00.000Z",
		player: {
			id: 1,
			
		},
	}

    function handleClick() {
        console.log("clicked");
    }
</script>

<button
	class="card card-hover w-1/2 md:w-1/3 lg:w-1/4 ml-4 mb-4 aspect-square"
	style="background-image: url('{character?.avatar}'); background-size: cover;"
    on:click={() => handleClick()}
>
	<div class="w-full h-full hover:bg-black/70 rounded-md">
			<div
				class="flex flex-col variant-ghost rounded-md w-full h-full opacity-0 hover:opacity-100 justify-center items-center"
			>
				<h3 class="text-lg font-bold text-white">Create a {character?.firstName} {character?.lastName}</h3>
				<dl class="flex justify-between mt-3">
					<dt class="sr-only">Character Age</dt>
					<dd class="badge variant-ghost-error text-white">{character?.age}</dd>

					<dt class="sr-only">Soul Type</dt>
					<dd class="badge variant-ghost-primary text-white">{character?.soulType}</dd>

					<dt class="sr-only">Species</dt>
					<span class="badge variant-ghost-secondary text-white">{character?.species}</span>
				</dl>
			</div>
	</div>
</button>