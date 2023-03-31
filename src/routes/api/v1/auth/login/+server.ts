import { json } from '@sveltejs/kit';
import { signIn } from '$lib/server/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email } = await request.json()
		await signIn(email);
		return json({ message: 'Check your email for the login link' })
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), {
			status: 500,
			headers: { 'content-type': 'application/json' }
		});
	}
};

