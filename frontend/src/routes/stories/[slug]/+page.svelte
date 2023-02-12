<script>
	import FullStory from "$lib/FullStory.svelte";
  export let data;
</script>

<!-- markup goes here -->
<FullStory title={data.story.title} pages={data.story.pages} />