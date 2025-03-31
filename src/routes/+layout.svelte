<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">

<script lang="ts">
	import Home from '../components/Home.svelte'
	import '../app.css'
	let { children } = $props();
</script>

<!-- <body>
	<Home />
</body> -->

{@render children()}

<!-- it says -->
<!-- Welcome to your library project
Create your package using @sveltejs/package and preview/showcase your work with SvelteKit

Visit svelte.dev/docs/kit to read the documentation -->