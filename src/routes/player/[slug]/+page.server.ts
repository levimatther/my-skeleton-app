import { ApiVersion } from '$lib/enums';
import type { Player } from '$lib/types';

export async function load(event) {
    const res = await event.fetch(`/api/${ApiVersion}/player/${event.params.slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

    return {
        player: await res.json() as Player
    };
}