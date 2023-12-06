import {loadStory} from "$lib/db.js";


export async function load({params}) {
  const story = await loadStory(params.slug);
  return {story};
}
