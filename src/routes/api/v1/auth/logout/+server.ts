import type { RequestHandler } from '@sveltejs/kit';
import { goto } from '$app/navigation';

export const POST: RequestHandler = async ({ locals: { supabase, getSession } }) => {
	try {
		const session = await getSession();

		if (!session) {
			throw error(401, { message: 'Unauthorized' });
		}

		await supabase.auth.signOut();

		goto('/');

	} catch (error) {
		return new Response(JSON.stringify({ error: error }), {
			status: 500,
			headers: { 'content-type': 'application/json' }
		});
	}
};