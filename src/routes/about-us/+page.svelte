<script>
    import { goto } from '$app/navigation';
</script>
<div class="relative min-h-screen flex flex-col items-center text-white bg-cover bg-center"
style="background-image: url('/travel-bg.jpg');">
   <!-- Overlay with blur effect -->
<div class="absolute inset-0 bg-opacity-50 backdrop-blur-xs flex flex-col items-center justify-center px-6 text-center">
        <h1 class="text-5xl font-bold mb-4">About ExploreTravelia</h1>
        <p class="text-lg max-w-2xl">
            Connecting travel influencers and brands to create unforgettable journeys. 
            ExploreTravelia is the bridge between creators and businesses in the travel industry.
        </p>
    </div>
</div>

<!-- Our Mission -->
<section class="py-16 bg-white text-gray-800 text-center">
    <h2 class="text-4xl font-bold">Our Mission</h2>
    <p class="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
        We empower travel influencers to turn their passion into opportunities while helping brands amplify their reach through authentic collaborations.
    </p>
</section>

<!-- What Sets Us Apart -->
<section class="py-16 bg-gray-100 text-gray-800 text-center">
    <h2 class="text-4xl font-bold">What Sets Us Apart?</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        <div class="p-6 shadow-lg rounded-lg bg-white">
            <img src="/connect.svg" class="mx-auto w-16 mb-4" />
            <h3 class="text-2xl font-semibold">Seamless Connections</h3>
            <p class="text-gray-600 mt-2">Find the perfect match for influencer collaborations effortlessly.</p>
        </div>
        <div class="p-6 shadow-lg rounded-lg bg-white">
            <img src="/monetize.svg" class="mx-auto w-16 mb-4" />
            <h3 class="text-2xl font-semibold">Monetize Your Travel</h3>
            <p class="text-gray-600 mt-2">Get paid to create and share amazing travel content.</p>
        </div>
        <div class="p-6 shadow-lg rounded-lg bg-white">
            <img src="/network.svg" class="mx-auto w-16 mb-4" />
            <h3 class="text-2xl font-semibold">Global Network</h3>
            <p class="text-gray-600 mt-2">Join a thriving community of travel influencers and brands.</p>
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="bg-blue-600 text-white py-12 text-center">
    <h2 class="text-3xl font-bold">Join Our Journey</h2>
    <p class="text-lg mt-2">Be part of a growing community that is shaping the future of travel collaborations.</p>
    <button class="mt-4 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition" on:click={() => goto('/signup')}>
        Get Started
    </button>
</section>
