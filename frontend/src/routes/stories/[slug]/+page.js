import { API_URL } from "$lib/globals.js"

export async function load({ fetch, params }) {
  const res = await fetch(`${API_URL}/stories/${params.slug}`);
  const story = await res.json();
  return { story };
}