import {checkSession} from "$lib/db.js";


export async function load({cookies}) {
  checkSession(cookies);
}