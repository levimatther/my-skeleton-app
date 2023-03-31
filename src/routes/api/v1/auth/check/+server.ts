import { getAuth } from '$lib/server/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	try {
		const { user } = await getAuth();

		if (!user) {
			return new Response(JSON.stringify({ message: "You're not logged in!" }), {
				status: 200,
				headers: { 'content-type': 'application/json' }
			});
		}

		return new Response(JSON.stringify({ user }));
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), {
			status: 500,
			headers: { 'content-type': 'application/json' }
		});
	}
};
