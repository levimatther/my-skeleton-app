import { ApiVersion } from '$lib/enums';

export async function load(event) {
    const res = await event.fetch(`/api/${ApiVersion}/forums`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

    const forums = await res.json();

    const futureProp = "test"
        
    return {
        props: { forums, futureProp },
    };
}