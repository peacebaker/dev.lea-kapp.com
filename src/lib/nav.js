export function search(items, searchText) {
  let showItems = [];
  for (const item of items) {
    if (item.title.toLowerCase().includes(searchText.toLowerCase())) {
      showItems = [...showItems, item];
    }
  }
  return showItems;
}

//
export function tagSearch(items, searchTags, tag) {

  // add the tag to the list if it's not there already
  if (!searchTags.includes(tag)) {
    searchTags = [...searchTags, tag]

  // remove the tag from the list if it's already there
  } else {
    searchTags = [...searchTags.slice(0, searchTags.indexOf(tag)), ...searchTags.slice(searchTags.indexOf(tag)+1)]
  }

  // display all pictures matching the tags
  let showItems = [];
  if (searchTags.length > 0) {
    for (const item of items) {
      for (const searchTag of searchTags)
        if (item.tags.includes(searchTag)) {
          showItems = [...showItems, item];
        }
    } 
  } else {
    showItems = items;
  }
  return {showItems, searchTags};
}