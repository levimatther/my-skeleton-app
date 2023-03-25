export async function load(event) {
    return {
        props: {
            slug: event.params.slug
        }
    }
}