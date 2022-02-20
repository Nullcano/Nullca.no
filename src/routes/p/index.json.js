import { posts } from '../../data.js'

export async function get() {
  return {
    status: 200,
    body: { posts } 
  }
}