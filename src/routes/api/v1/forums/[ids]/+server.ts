export const GET = async ({ params }) => {
	const forumIds = params.ids.split(',').map((id) => parseInt(id, 10));

	// Use the forumIds array to query the database and retrieve the forums data
	// ...

	const forumsData = /* some code that retrieves the forum data based on the IDs */ {};

	return {
		body: forumsData
	};
};

GET.satisfies = 'RequestHandler';

// Example GET request:
// http://localhost:3000/api/v1/characters/1,2,3

export const DELETE = async ({ params }) => {
	const forumIds = params.ids.split(',').map((id) => parseInt(id, 10));

	// Use the forumIds array to query the database and delete the forums
	// ...

	return {
		body: {}
	};
};

DELETE.satisfies = 'RequestHandler';
