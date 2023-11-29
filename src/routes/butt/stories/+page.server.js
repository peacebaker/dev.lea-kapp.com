import { loadStories } from "$lib/db";

export async function load() {
  let stories = await loadStories();
  return {stories};
}