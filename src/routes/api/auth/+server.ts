import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (() => {
	const test = "Test"

	return new Response(JSON.stringify({ test }));
}) satisfies RequestHandler;
