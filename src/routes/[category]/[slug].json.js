import { posts } from '../../data.js'

export async function get({ params }) {
  const post = posts.find((g) => g.slug == params.slug)
  if (post) {
    return {
      status: 200,
      body: { post } 
    }
  }
  return {
    status: 404
  }
}