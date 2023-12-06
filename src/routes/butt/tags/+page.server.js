import {checkSession, loadTags, saveTag, deleteTag} from "$lib/db.js";

export async function load({cookies}) {

  // load the username and token from cookies
  const username = cookies.get('username');
  const token = cookies.get('token');

  // check that the session is still valid
  await checkSession(username, token);

  // load the tags from the database and just return the 
  const tags = await loadTags();
  return {tags};
}

export const actions = {

  add: async({request}) => {
    const data = await request.formData();
    await saveTag(data.get("tag"));
  },

  delete: async({request}) => {
    const data = await request.formData();
    await deleteTag(data.get("tag"));
  }
}