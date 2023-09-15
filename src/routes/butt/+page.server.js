import {uri} from "$lib/config.js";

import {redirect} from "@sveltejs/kit";
import {MongoClient} from "mongodb";
import {verify} from "argon2";

export async function load({cookies}) {

  // connect to local MongoDB instance
  const client = new MongoClient(uri);

  // check current cookies
  const username = cookies.get('username');
  const token = cookies.get('token');

  // need to login if no cookies exist
  if (!username || !token) {
    return;
  }

  try {

    // try to find the session in Mongo
    const db = client.db("leaKapp");
    const sessions = db.collection('sessions');
    const query = { user: username, token: token };
    const session = await sessions.findOne(query);

    // if no session is found, display the login page
    // TODO: implement some kinda session timeout
    if (!session) {
      return;

    // if the user is already logged in, take them to stories
    } else {
      throw redirect(307, "/butt/stories");
    }

  } finally {
    await client.close();
  }
}

export const actions = {
  default: async ({cookies, request}) => {

    // connect to local MongoDB instance
    const client = new MongoClient(uri);

    // wait for form submission
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    try {

      // find our user
      const db = client.db("leaKapp");
      const users = db.collection('users');
      const query = { user: username };
      const user = await users.findOne(query);

      // verify the password
      const result = await verify(user.hash, password);
      if (result) {

        // generate the session id and stash it in our db
        const token = crypto.randomUUID();
        const sessions = db.collection('sessions');
        await sessions.insertOne({ user: username, token: token});

        // set cookies and redirect
        cookies.set('username', username, {path: '/', sameSite: true});
        cookies.set('token', token, {path: '/', sameSite: true});
        throw redirect(303, '/butt/stories');

      } else {
        // TODO: I'd like to just display a message saying the login failed
        // but we've gotta block an IP after a certain amount of failed logins... fail2ban?
        console.log("login failed");
      }

    // close the db connection
    } finally {
      await client.close();
    }
  }
}