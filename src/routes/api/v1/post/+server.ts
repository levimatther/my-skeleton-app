import { createPost } from '$lib/server/supabase';

export const POST = async (newPost) => {
	const res = await createPost(newPost);
	const post = res?.data;
	if (post === undefined) {
		return new Response(
			JSON.stringify({
				title: 'Post was not created',
				description: 'The post was not created. Please try again.'
			})
		);
	} else {
		return new Response(JSON.stringify(post));
	}
};
