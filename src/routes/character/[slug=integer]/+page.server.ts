import { ApiVersion } from '$lib/enums';

export async function load(event) {
	// fetch data from the API endpoint
	

    const res = await event.fetch(`/api/${ApiVersion}/character/${event.params.slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});


	return {
		props: {
			slug: event.params.slug,
            characterGet: await res.json()
		}
	};
}
