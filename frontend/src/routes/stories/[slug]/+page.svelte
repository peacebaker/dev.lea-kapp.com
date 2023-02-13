<script>
	import FullStory from "$lib/FullStory.svelte";

  export let data;
  let story = data.story;

</script>

<FullStory {story} />