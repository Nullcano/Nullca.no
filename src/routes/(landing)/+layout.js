export async function load({ url, params }) {
	return {
		url: url.pathname,
		slug: params.slug
	}
}