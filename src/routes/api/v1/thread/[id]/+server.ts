import { getThread, updateThread, deleteThread } from '$lib/server/supabase';

export const GET = async ({ params }) => {
	const res = await getThread(params.id);
	const thread = res?.data;
	if (thread === undefined) {
		return new Response(
			JSON.stringify({
				title: 'Thread not found',
				description: 'The thread you are looking for does not exist.'
			})
		);
	} else {
		return new Response(JSON.stringify(thread));
	}
};

GET.satisfies = 'RequestHandler';

export const PUT = async ({ params }) => {
	const res = await updateThread(params.id);
	const thread = res?.data;
	if (thread === undefined) {
		return new Response(
			JSON.stringify({
				title: 'Thread not found',
				description: 'The thread you are looking for does not exist.'
			})
		);
	} else {
		return new Response(JSON.stringify(thread));
	}
};

PUT.satisfies = 'RequestHandler';

export const DELETE = async ({ params }) => {
	const res = await deleteThread(params.id);
	const thread = res?.data;
	if (thread === undefined) {
		return new Response(
			JSON.stringify({
				title: 'Thread not found',
				description: 'The Thread you are looking for does not exist.'
			})
		);
	} else {
		return new Response(JSON.stringify({}));
	}
};

DELETE.satisfies = 'RequestHandler';