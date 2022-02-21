import { posts } from '../data.js'

export async function getPosts() {
  posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  return posts
}