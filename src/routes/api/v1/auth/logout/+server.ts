import { signOut } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async () => {
	try {
		await signOut();

		return new Response(JSON.stringify({ message: 'You have been logged out' }));
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), {
			status: 500,
			headers: { 'content-type': 'application/json' }
		});
	}
};
