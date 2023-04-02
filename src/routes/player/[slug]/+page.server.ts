import type { Player } from '$lib/types';
import {ApiVersion} from '$lib/enums';


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