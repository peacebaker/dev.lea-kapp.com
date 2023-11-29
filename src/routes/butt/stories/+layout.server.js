import {checkSession} from "$lib/db.js";

export async function load({cookies}) {

  // load the username and token from cookies
  const username = cookies.get('username');
  const token = cookies.get('token');

  // check that the session is still valid
  await checkSession(username, token);
}