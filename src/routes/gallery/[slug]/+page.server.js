import {gallery} from "$lib/gallery.js";

export async function load({params}) {

  let prevPic = null;
  let curPic = null;
  let nextPic = null;

  // loop through gallery looking for a matching slug
  for (let i = 0; i < gallery.length; i++) {
    if (gallery[i].slug == params.slug) {

      // only set previous pic if one exists
      if (i !== 0) {
        prevPic = gallery[i-1];
      }

      // always set current pic
      curPic = gallery[i];

      // only set next pic if one exists
      if (i !== params.length) {
        nextPic = gallery[i+1];
      }
    }
  }
  return {prevPic, curPic, nextPic}
}