<script>
    import { goto } from '$app/navigation';
    
</script>

<!-- Hero Section -->
<div class="relative min-h-screen flex flex-col items-center text-white bg-cover bg-center"
style="background-image: url('/travel-bg.jpg');">
   <!-- Overlay with blur effect -->
<div class="absolute inset-0 bg-opacity-50 backdrop-blur-xs flex flex-col items-center justify-center px-6 text-center">

        <h1 class="text-5xl font-bold mb-4">Connect. Collaborate. Explore.</h1>
        <p class="text-lg max-w-2xl">
            Welcome to <span class="font-semibold">ExploreTravelia</span> – the ultimate hub for travel influencers and brands to connect and create inspiring content.
        </p>
        <div class="mt-6 flex space-x-4">
            <button class="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-lg transition" on:click={() => goto('/signup')}>
                Join as Influencer
            </button>
            <button class="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition" on:click={() => goto('/signup')}>
                Join as Brand
            </button>
        </div>
    </div>
</div>



<!-- Features Section -->
<section class="py-16 bg-white text-gray-800 text-center">
    <h2 class="text-4xl font-bold">Why Join ExploreTravelia?</h2>
    <p class="text-lg text-gray-600 mt-2">Discover the best collaborations, monetize your travels, and grow your network.</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        <div class="p-6 shadow-lg rounded-lg">
            <!-- <img src="/connect.svg" class="mx-auto w-16 mb-4" /> -->
            <h3 class="text-2xl font-semibold">Seamless Connections</h3>
            <p class="text-gray-600 mt-2">Influencers and brands can easily find perfect matches for collaborations.</p>
        </div>
        <div class="p-6 shadow-lg rounded-lg">
            <!-- <img src="/monetize.svg" class="mx-auto w-16 mb-4" /> -->
            <h3 class="text-2xl font-semibold">Monetize Your Travel</h3>
            <p class="text-gray-600 mt-2">Get paid for your passion—create and share stunning travel content.</p>
        </div>
        <div class="p-6 shadow-lg rounded-lg">
            <!-- <img src="/network.svg" class="mx-auto w-16 mb-4" /> -->
            <h3 class="text-2xl font-semibold">Expand Your Network</h3>
            <p class="text-gray-600 mt-2">Build long-term partnerships with leading travel brands and agencies.</p>
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="bg-blue-600 text-white py-12 text-center">
    <h2 class="text-3xl font-bold">Start Your Journey Today</h2>
    <p class="text-lg mt-2">Join thousands of influencers & brands making an impact in the travel industry.</p>
    <button class="mt-4 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition" on:click={() => goto('/signup')}>
        Get Started
    </button>
</section>
