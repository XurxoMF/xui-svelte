<script lang="ts">
	let { children } = $props();
</script>

<div class="h-full w-full bg-image-light bg-cover bg-center dark:bg-image-dark">
	<div class="h-full w-full bg-zinc-300/60 backdrop-blur-sm dark:bg-zinc-950/80">
		{@render children()}
	</div>
</div>
