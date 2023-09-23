import {uri, dbname} from "$lib/config.js";

import {MongoClient} from "mongodb";

export async function load() {

  // connect to local MongoDB instance
  const client = new MongoClient(uri);

  try {

    // try to find the session in Mongo
    const db = client.db(dbname);
    const collection = db.collection("stories");
    const stories = await collection.find().toArray();
    return {stories};

    } finally {
    await client.close();
  }
}