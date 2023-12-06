import { loadStories, loadTags } from "$lib/db";

export async function load() {
  let stories = await loadStories();
  let tags = await loadTags();
  return {stories, tags};
}