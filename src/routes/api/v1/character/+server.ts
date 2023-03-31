import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Character } from '$lib/types';

export const POST = (({ url }) => {
	const body = `The URL is: ${url}`;

	return new Response(JSON.stringify({ body }));
}) satisfies RequestHandler;


// Example POST method implementation:
// const res = await event.fetch(`/api/${ApiVersion}/character`, {
// 	method: 'POST',
// 	body: JSON.stringify({ slug: event.params.slug }),
// 	headers: {
// 		'Content-Type': 'application/json'
// 	}
// });

