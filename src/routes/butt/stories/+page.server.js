import { loadStories } from "$lib/db";

export async function load() {
  let stories = loadStories()
  return {stories};
}