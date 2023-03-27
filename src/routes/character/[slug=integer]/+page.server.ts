import { ApiVersion } from '$lib/enums';

export async function load(event) {
	// fetch data from the API endpoint
	const res = await event.fetch(`/api/${ApiVersion}/character`, {
		method: 'POST',
        body: JSON.stringify({ slug: event.params.slug }),
		headers: {
			'Content-Type': 'application/json'
		}
	});

    const res1 = await event.fetch(`/api/${ApiVersion}/character/${event.params.slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});


	return {
		props: {
			slug: event.params.slug,
			characterPost: await res.json(),
            characterGet: await res1.json()
		}
	};
}
