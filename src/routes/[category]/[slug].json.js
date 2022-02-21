import { posts } from '../../data.js'

export async function get({ params }) {
  const post = posts.find(p => p.slug == params.slug)
  if (post) {
    return {
      status: 200,
      body: { post } 
    }
  }
  return {
    status: 404,
    body: { message: 'This page is not currently archived.' }
  }
}