import { error } from '@sveltejs/kit';
import type { Thread } from '$lib/types';

export const GET = async ({ params }) => {
	const body = `The Thread ID is: ${params.id}`;
	return new Response(JSON.stringify({ body }));
};

GET.satisfies = 'RequestHandler';

export const PUT = async ({ params }) => {
	const body = `The Thread ID is: ${params.id}`;
	return new Response(JSON.stringify({ body }));
};

PUT.satisfies = 'RequestHandler';

export const DELETE = async ({ params }) => {
	const body = `The Thread ID is: ${params.id}`;
	return new Response(JSON.stringify({ body }));
};

DELETE.satisfies = 'RequestHandler';

