import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Thread } from '$lib/types';

export const GET = (({ url }) => {
	console.log('url', url);
	const body = `The URL is: ${url}`;

	return new Response(JSON.stringify({ body }));
}) satisfies RequestHandler;
