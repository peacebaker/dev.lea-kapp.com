import {uri, dbname} from "$lib/config.js";

import {error} from "@sveltejs/kit";
import {MongoClient} from "mongodb";

export async function load({cookies}) {

  // connect to local MongoDB instance
  const client = new MongoClient(uri);

  // check current cookies
  const username = cookies.get('username');
  const token = cookies.get('token');

  // need to login if no cookies exist
  if (!username || !token) {
    throw error(403, "Not logged in.");
  }

  try {

    // try to find the session in Mongo
    const db = client.db(dbname);
    const sessions = db.collection('sessions');
    const query = { user: username, token: token };
    const session = await sessions.findOne(query);

    // TODO: implement some kinda session timeout
    

    // if no session is found, display error page.
    if (!session) {
      throw error(403, "Not logged in.");

    // if the user is already logged in, load the stories
    // for now, we can load all of them w/o causing too much strain
    } else {
      const collection = db.collection("stories");
      const stories = await collection.find().toArray();
      return {stories};
    }

  } finally {
    await client.close();
  }
}