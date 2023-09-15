// import {uri} from "$lib/config.js";

import {error} from "@sveltejs/kit";
// import {MongoClient} from "mongodb";

export async function load({cookies}) {

  // connect to local MongoDB instance
  // const client = new MongoClient(uri);

  // check current cookies
  const username = cookies.get('username');
  const token = cookies.get('token');

  // need to login if no cookies exist
  if (!username || !token) {
    throw error(403, "Not logged in.");
  }

  // 
  
}