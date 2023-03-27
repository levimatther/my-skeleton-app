import { forums } from '$lib/stores/forums';

export const GET = async () => {
	const body = await forums.fetchForums();
	console.log('body', body);
	console.log(body.length)

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
