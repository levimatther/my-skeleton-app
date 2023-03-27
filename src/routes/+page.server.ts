import { ApiVersion } from '$lib/enums';

export async function load(event) {

    let a = 1;
    let b = 2;
	const randomNumberResponse = await event.fetch(`/api/${ApiVersion}/random-number`, {
		method: 'POST',
		body: JSON.stringify({ a, b }),
		headers: {
			'content-type': 'application/json'
		}
	});

	return {
		randomNumber: await randomNumberResponse.json(),
	};
}
