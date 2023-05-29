<script lang="ts">
	import type { Character } from '$lib/types';
	import { Avatar } from '@skeletonlabs/skeleton';

	let character: Character = {
		id: 2,
		firstName: 'Jimmi',
		lastName: 'Neutron',
		age: 31,
		soulType: 'Undead',
		species: 'Angel',
		gender: 'Cisgender',
		relationshipStatus: 'Open Relationship',
		avatar: 'https://cdn.midjourney.com/eaa42a60-2bae-4661-8b16-a88ea9ef45c1/grid_0.png',
		createdAt: '2021-08-01T00:00:00.000Z',
		updatedAt: '2021-08-01T00:00:00.000Z',
		player: {
			id: '23456',
			alias: 'Elby',
			createdAt: '2021-08-01T00:00:00.000Z'
		},
		bio: "Nel Emerson, a captivating figure shrouded in mystery, is a master of stealth and an elusive character in the realm of RPGs. Born to a human mother and an elven father, Nel inherited the grace and agility of the elves while possessing the cunning and adaptability of humans. With a lean yet athletic build, piercing green eyes, and raven-black hair, Nel commands attention wherever they go. Growing up in the shadowy underbelly of the city, Nel honed their skills as a rogue and assassin, swiftly navigating the treacherous streets and exploiting the weaknesses of their adversaries. Gifted with exceptional dexterity and the ability to blend seamlessly into their surroundings, Nel is a true artist of deception and subterfuge. Nel's past remains a closely guarded secret, with rumors circulating of a tragic event that fueled their thirst for justice and vengeance. Driven by a relentless desire to balance the scales and expose corruption, Nel channels their skills towards seeking out those who exploit the innocent and oppressed. Equipped with an array of lethal daggers, a quick mind, and impeccable marksmanship, Nel dispatches enemies swiftly and silently. They are adept at disabling traps, picking locks, and gathering critical intelligence, making them an invaluable asset to any group seeking to unravel complex mysteries or infiltrate heavily fortified locations. However, beneath their hardened exterior, Nel carries a burden of conflicted emotions and the weight of their past. Their enigmatic nature masks a complex inner world, torn between seeking justice and grappling with their own demons. Nel Emerson's story unfolds in the shadowy corners of the RPG realm, weaving a tale of intrigue, survival, and redemption. Their skills, resilience, and enigmatic allure make them an unforgettable character that captures the imagination of players and leaves a lasting impact on any RPG adventure they undertake."
	};
</script>

<div class="card variant-ghost overflow-hidden">
	<div class="flex flex-row justify-center p-6">
			<Avatar src={character?.avatar} width="w-60" />
		</div>
	<div class="flex flex-row justify-center">
		<div class="-mt-12 z-10">
			<h1 class="font-semibold text-center">
				{character?.firstName}
				{character?.lastName}
			</h1>
			<dl class="flex flex-row py-5">
				<dt class="sr-only">Character Age</dt>
				<dd class="badge variant-ghost-error text-white">{character?.age}</dd>
				<dt class="sr-only">Soul Type</dt>
				<dd class="badge variant-ghost-primary text-white ml-4">{character?.soulType}</dd>
				<dt class="sr-only">Species</dt>
				<span class="badge variant-ghost-secondary text-white ml-4">{character?.species}</span>
				<dt class="sr-only">Gender</dt>
				<dd class="badge variant-ghost-warning text-white ml-4">{character?.gender}</dd>
				<dt class="sr-only">Relationship Status</dt>
				<dd class="badge variant-ghost-tertiary text-white ml-4">
					{character?.relationshipStatus}
				</dd>
			</dl>
		</div>
	</div>

	<div class="px-12 pb-12 text-justify leading-7">
		{character?.bio}
	</div>
</div>
