
import { getPlayer } from '$lib/supabase';


export const GET = async ({ params }) => {
	try {
		const { data, error } = await getPlayer(params.id);
		if (error) {
			throw error;
		}
		if (!data) {
			throw new Error('Not found');
		}
		return new Response(JSON.stringify({ data }));
	} catch (err) {
		return new Response(JSON.stringify({ error: err.message }), {
			status: 500
		});
	}
};

GET.satisfies = 'RequestHandler';

export const PUT = async ({ params }) => {
	const body = `The Player ID is: ${params.id}`;
	return new Response(JSON.stringify({ body }));
};

PUT.satisfies = 'RequestHandler';

export const DELETE = async ({ params }) => {
	const body = `The Player ID is: ${params.id}`;
	return new Response(JSON.stringify({ body }));
};

DELETE.satisfies = 'RequestHandler';

