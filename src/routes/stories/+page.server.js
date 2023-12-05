import {loadStories} from '$lib/db.js';

export async function load() {
  let stories = await loadStories();
  return {stories};
}