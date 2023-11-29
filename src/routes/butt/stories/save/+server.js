import { json } from '@sveltejs/kit';
import {checkSession, saveStory} from "$lib/db.js";


export async function POST({cookies, request}) {
  
  // check that the session cookies are still valid
  const username = cookies.get('username');
  const token = cookies.get('token');
  await checkSession(username, token);

  // save the story to the db
  const story = await request.json();
  await saveStory(story);

  // return successful status code
  return json({}, {status: 201})
}
