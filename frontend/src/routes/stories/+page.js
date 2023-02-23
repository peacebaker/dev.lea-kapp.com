import { API_URL } from "$lib/globals.js"

export async function load({ fetch }) {
  const res = await fetch(`${API_URL}/stories`);
  const stories = await res.json();
  return { stories };
}