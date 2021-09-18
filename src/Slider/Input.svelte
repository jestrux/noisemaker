<script>
	import { getEventsAction } from "./utils.js";
	import { current_component } from "svelte/internal";
	const events = getEventsAction(current_component);
	export let value;
</script>

<div class="relative">
	<input class="w-full" type="range" 
		min="0" max="1"
		use:events {value}
		style="pointer-events: none;"
	/>

	<div class="absolute bg-black12 opacity-65 inset-0"></div>
</div>