import {loadStories, loadTags} from '$lib/db.js';

export async function load() {
  let stories = await loadStories();
  let tags = await loadTags();
  return {stories, tags};
}