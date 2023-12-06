import {uri, dbname} from "$lib/config.js";

import {error} from "@sveltejs/kit";
import {MongoClient} from "mongodb";

const skipID = {projection: { _id: 0 }};

export async function checkSession(username, token) {

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
    const session = await sessions.findOne(query, skipID);

    // TODO: implement some kinda session timeout
    

    // if no session is found, display error page.
    if (!session) {
      throw error(403, "Not logged in.");
    }
    
  } finally {
    await client.close();
  }
}

export async function loadStories() {

  // connect to local MongoDB instance
  const client = new MongoClient(uri);

  try {

    // 
    const db = client.db(dbname);
    const collection = db.collection("stories");
    const stories = await collection.find({}, skipID).toArray();
    return stories;

    } finally {
    await client.close();
  }
}

export async function loadStory(slug) {

  // connect to local MongoDB instance
  const client = new MongoClient(uri);

  try {

    // try to find the story 
    const db = client.db(dbname);
    const collection = db.collection("stories");
    const story = await collection.findOne({slug: slug}, skipID);

    // if the story is found, return it
    if (story !== null) {
      return story;

    // if not, return an empty story object
    } else {
      return {
        slug: "new",
        title: "New",
        pages: [""],
        tags: [],
      }
    }

  } finally {
    await client.close();
  }
}

export async function saveStory(story) {

  const client = new MongoClient(uri);

  try {

    // connect to the db and collection
    const db = client.db(dbname);
    const collection = db.collection("stories");

    // check and see if the story already exists
    const filter = {slug: story.slug};
    const oldStory = await collection.findOne(filter, skipID);

    // insert or update the document
    if (oldStory === null) {
      await collection.insertOne(story);
    } else {
      await collection.replaceOne(filter, story)
    }

    // TODO: Add some error checking. 

  }
  finally {
    await client.close();
  }
}

export async function loadTags() {

  const client = new MongoClient(uri);

  try {

    // connect to the db and collection
    const db = client.db(dbname);
    const collection = db.collection("storyTags");
    const dbTags = await collection.find({}, skipID).toArray();

    // since these documents only have one value, return an array of their values
    const tags = dbTags.map(tag => tag.name);
    return tags;

  } finally {
    await client.close();
  }
}

export async function saveTag(tag) {
  
  const client = new MongoClient(uri);

  try {
    
    // connect to the db and collection 
    const db = client.db(dbname);
    const collection = db.collection("storyTags");

    // check and see if the tag already exists
    const filter = {name: tag};
    const oldTag = await collection.findOne(filter, skipID);

    // TODO: throw an error if it exists
    if (oldTag === null) {
      await collection.insertOne(filter);
    }
  } finally {
    await client.close();
  }
}

export async function deleteTag(tag) {

  const client = new MongoClient(uri);

  try {
    
    // connect to the db and collection 
    const db = client.db(dbname);
    const tagCollection = db.collection("storyTags");
    const storyCollection = db.collection("stories");

    // delete the tag from any stories it's assigned to
    const operation = {$pull: {tags: tag}}
    await storyCollection.updateMany({}, operation);

    // delete the tag from the tags collection
    const filter = {name: tag};
    await tagCollection.deleteOne(filter);

  } finally {
    await client.close();
  }
}