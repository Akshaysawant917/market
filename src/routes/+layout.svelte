<script>
	import '../app.css';
	import Navbar from '$lib/components/home/nav.svelte';
	import Footer from '$lib/components/home/Footer.svelte';
	let { children ,data} = $props();
	// let {  } = $props();
	import { user } from '$lib/stores/mainStore.js';
	$user = data.user; 
</script>
<Navbar />	
<slot></slot>
<!-- {@render children()} -->
<Footer />	
