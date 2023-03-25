import type { PageServerLoadEvent } from './$types';

export async function load(event: PageServerLoadEvent) {
    return {
        props: {
            slug: event.params.slug
        }
    }
}