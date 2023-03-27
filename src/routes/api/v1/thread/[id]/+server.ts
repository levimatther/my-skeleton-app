import { error } from '@sveltejs/kit';
import type { Thread } from '$lib/types';

export const GET = async ({ url }) => {
	let id = url.toString().split('/').pop();
	const body = `The Thread ID is: ${id}`;
	return new Response(JSON.stringify({ body }));
};

GET.satisfies = 'RequestHandler';

export const PUT = async ({ url }) => {
	let id = url.toString().split('/').pop();
	const body = `The Thread ID is: ${id}`;
	return new Response(JSON.stringify({ body }));
};

PUT.satisfies = 'RequestHandler';

export const DELETE = async ({ url }) => {
	let id = url.toString().split('/').pop();
	const body = `The Thread ID is: ${id}`;
	return new Response(JSON.stringify({ body }));
};

DELETE.satisfies = 'RequestHandler';

