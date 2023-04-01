import { getForums } from '$lib/supabase';

export const GET = async () => {
	const res = await getForums();
	const body = res?.data;

	if (!body) {
		return {
			status: 404,
			body: {
				message: 'Not found'
			}
		};
	}
	return new Response(JSON.stringify(body));
};
GET.satisfies = 'RequestHandler';
