<script>
    import { goto } from '$app/navigation';
    import Hero from "$lib/components//home/Hero.svelte"
	import FeaturedCamps from '$lib/components/home/FeaturedCamps.svelte';
	import GetStarted from '$lib/components/home/GetStarted.svelte';
	import HowItWorks from '$lib/components/home/HowItWorks.svelte';
	import Stats from '$lib/components/home/Stats.svelte';
    
</script>

<Hero />
<HowItWorks/>
<Stats/>
<GetStarted/>
<FeaturedCamps/>