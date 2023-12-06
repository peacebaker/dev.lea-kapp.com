import {loadStory, loadTags} from "$lib/db.js";


export async function load({params}) {
  const story = await loadStory(params.slug);
  const allTags = await loadTags();
  return {story, allTags};
}
