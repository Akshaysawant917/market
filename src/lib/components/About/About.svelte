<script>
    import { goto } from '$app/navigation';
</script>

<!-- Hero with enhanced overlay -->
<div class="relative h-72 md:h-96 mt-16 flex flex-col items-center justify-center text-white bg-cover bg-center" style="background-image: url('/travel-bg.jpg');">
  <!-- Dark gradient + blur overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-sm flex flex-col items-center justify-center px-6 text-center">
    <h1 class="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">About ExploreTravelia</h1>
    <p class="text-md md:text-lg max-w-3xl drop-shadow-md">
      Connecting travel influencers and brands to create unforgettable journeys. ExploreTravelia is the bridge between creators and businesses in the travel industry.
    </p>
  </div>
</div>

<!-- Our Mission -->
<section class="py-16 bg-white text-gray-900 text-center max-w-5xl mx-auto px-6 md:px-0" 
  in:fade={{ duration: 600 }} 
>
  <h2 class="text-4xl font-bold mb-6">Our Mission</h2>
  <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
    We empower travel influencers to turn their passion into opportunities while helping brands amplify their reach through authentic collaborations.
  </p>
</section>

<!-- What Sets Us Apart -->
<section class="py-16 bg-gray-50 text-gray-900 text-center max-w-7xl mx-auto px-6 md:px-0" in:fade={{ duration: 700, delay: 100 }}>
  <h2 class="text-4xl font-bold mb-12">What Sets Us Apart?</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
    <div class="p-8 shadow-xl rounded-3xl bg-white hover:scale-[1.03] transition-transform duration-300 cursor-default">
      <img src="/connect.svg" alt="Seamless Connections Icon" class="mx-auto w-20 mb-6 drop-shadow-md" />
      <h3 class="text-2xl font-semibold mb-2">Seamless Connections</h3>
      <p class="text-gray-600 leading-relaxed">
        Find the perfect match for influencer collaborations effortlessly.
      </p>
    </div>
    <div class="p-8 shadow-xl rounded-3xl bg-white hover:scale-[1.03] transition-transform duration-300 cursor-default">
      <img src="/monetize.svg" alt="Monetize Your Travel Icon" class="mx-auto w-20 mb-6 drop-shadow-md" />
      <h3 class="text-2xl font-semibold mb-2">Monetize Your Travel</h3>
      <p class="text-gray-600 leading-relaxed">
        Get paid to create and share amazing travel content.
      </p>
    </div>
    <div class="p-8 shadow-xl rounded-3xl bg-white hover:scale-[1.03] transition-transform duration-300 cursor-default">
      <img src="/network.svg" alt="Global Network Icon" class="mx-auto w-20 mb-6 drop-shadow-md" />
      <h3 class="text-2xl font-semibold mb-2">Global Network</h3>
      <p class="text-gray-600 leading-relaxed">
        Join a thriving community of travel influencers and brands.
      </p>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="bg-blue-600 text-white py-16 text-center" in:fade={{ duration: 600, delay: 200 }}>
  <h2 class="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md">Join Our Journey</h2>
  <p class="text-lg max-w-xl mx-auto mb-8 leading-relaxed drop-shadow-sm">
    Be part of a growing community that is shaping the future of travel collaborations.
  </p>
  <button
    class="mt-4 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-105"
    on:click={() => goto('/signup')}
  >
    Get Started
  </button>
</section>
