import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Character } from '$lib/types';

export const POST = (({ url }) => {
	const body = `The URL is: ${url}`;

	return new Response(JSON.stringify({ body }));
}) satisfies RequestHandler;
