import { ApiVersion } from '$lib/enums';

export async function load(event) {
    const res = await event.fetch(`/api/${ApiVersion}/forum/${event.params.slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
    return {
        props: {
            slug: event.params.slug,
            forum: await res.json()
        }
    };
}