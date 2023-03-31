import { signIn } from '$lib/server/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (email) => {
	try {
        console.log("email: ", email);
		
		return new Response(JSON.stringify(email));
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), {
			status: 500,
			headers: { 'content-type': 'application/json' }
		});
	}
};
