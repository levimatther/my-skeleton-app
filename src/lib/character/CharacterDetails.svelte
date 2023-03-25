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
</script>

<div class="card card-hover variant-ghost overflow-hidden">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-base font-semibold leading-6 text-primary">{character?.firstName} {character?.lastName}</h3>
    <p class="mt-1 max-w-2xl text-sm text-primary">{character?.player?.alias}</p>
  </div>

    <dl class="flex flex-row py-5 space-x-4">
      <dt class="sr-only">Character Age</dt>
      <dd class="badge variant-ghost-error text-white">{character?.age}</dd>
      <dt class="sr-only">Soul Type</dt>
      <dd class="badge variant-ghost-primary text-white">{character?.soulType}</dd>
      <dt class="sr-only">Species</dt>
      <span class="badge variant-ghost-secondary text-white">{character?.species}</span>
      <dt class="sr-only">Player</dt>

    </dl>
  
</div>
