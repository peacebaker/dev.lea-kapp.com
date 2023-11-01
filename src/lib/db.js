import {uri, dbname} from "$lib/config.js";

import {error} from "@sveltejs/kit";
import {MongoClient} from "mongodb";


export async function checkSession(cookies) {

  // check current cookies
  const username = cookies.get('username');
  const token = cookies.get('token');

  // need to login if no cookies exist
  if (!username || !token) {
    throw error(403, "Not logged in.");
  }

  // connect to local MongoDB instance
  const client = new MongoClient(uri);
  
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
    }
    
  } finally {
    await client.close();
  }
}