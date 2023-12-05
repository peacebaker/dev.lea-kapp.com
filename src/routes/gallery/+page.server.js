export async function load({url}) {
  const tag = url.searchParams.get('tag');
  return {tag}
}