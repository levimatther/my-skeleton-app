import { createPost } from '$lib/supabase';
export const POST = async (newThread) => {
	const res = await createPost(newThread);
	const thread = res?.data;
	if (thread === undefined) {
		return new Response(
			JSON.stringify({
				title: 'Thread was not created',
				description: 'The thread was not created. Please try again.'
			})
		);
	} else {
		return new Response(JSON.stringify(thread));
	}
};