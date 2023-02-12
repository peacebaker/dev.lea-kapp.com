/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(`http://127.0.0.1:8000/api/stories/${params.slug}`);
  const story = await res.json();
  return { story };
}