export async function load({ fetch, params }) {
  const res = await fetch(`http://127.0.0.1:8000/api/stories`);
  const stories = await res.json();
  return { stories };
}