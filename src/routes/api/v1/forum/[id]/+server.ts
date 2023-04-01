import { getForum, updateForum, deleteForum } from '$lib/supabase';

export const GET = async ({ params }) => {

	const res = await getForum(params.id);
	const forum = res?.data;
	if (forum === undefined) {
		return new Response(JSON.stringify({ title: 'Forum not found', description: 'The forum you are looking for does not exist.' }));
	} else {
		return new Response(JSON.stringify(forum));
	}
};

GET.satisfies = 'RequestHandler';

export const PUT = async ({ params }) => {
	const res = await updateForum(params.id);
	const forum = res?.data;
	if (forum === undefined) {
		return new Response(JSON.stringify({ title: 'Forum not found', description: 'The forum you are looking for does not exist.' }));
	} else {
		return new Response(JSON.stringify(forum));
	}
};

PUT.satisfies = 'RequestHandler';

export const DELETE = async ({ params }) => {
	const res = await deleteForum(params.id);
	const forum = res?.data;
	if (forum === undefined) {
		return new Response(JSON.stringify({ title: 'Forum not found', description: 'The forum you are looking for does not exist.' }));
	} else {
		return new Response(JSON.stringify({}));
	}
};

DELETE.satisfies = 'RequestHandler';
