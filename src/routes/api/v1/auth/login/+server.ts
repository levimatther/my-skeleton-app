import type { RequestHandler } from '@sveltejs/kit';


export const POST: RequestHandler = async ({ locals: { supabase, getSession }, request }) => {
	try {
		const { email } = await request.json()
		console.log('email', email)
		const session = await getSession();
		console.log('session', session)

		if (!session) {
			throw error(401, { message: 'Unauthorized' });
		}

		let { data, error } = await supabase.auth.signInWithOtp(email);

		return new Response(JSON.stringify(data));
	}
	catch (error) {
		return new Response(JSON.stringify({ error: error }), {
			status: 500,
			headers: { 'content-type': 'application/json' }
		});
	}
};