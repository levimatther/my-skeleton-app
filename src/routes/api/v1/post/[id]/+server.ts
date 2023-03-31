import { getPost, updatePost, deletePost } from '$lib/server/supabase';

export const GET = async ({ params }) => {
	const res = await getPost(params.id);
	const post = res?.data;
	if (post === undefined) {
		return new Response(
			JSON.stringify({
				title: 'Post not found',
				description: 'The post you are looking for does not exist.'
			})
		);
	} else {
		return new Response(JSON.stringify(post));
	}
};

GET.satisfies = 'RequestHandler';

export const PUT = async ({ params }) => {
	const res = await updatePost(params.id);
	const post = res?.data;
	if (post === undefined) {
		return new Response(
			JSON.stringify({
				title: 'Post not found',
				description: 'The post you are looking for does not exist.'
			})
		);
	} else {
		return new Response(JSON.stringify(post));
	}
};

PUT.satisfies = 'RequestHandler';

export const DELETE = async ({ params }) => {
	const res = await deletePost(params.id);
	const post = res?.data;
	if (post === undefined) {
		return new Response(
			JSON.stringify({
				title: 'Post not found',
				description: 'The post you are looking for does not exist.'
			})
		);
	} else {
		return new Response(JSON.stringify({}));
	}
};

DELETE.satisfies = 'RequestHandler';
