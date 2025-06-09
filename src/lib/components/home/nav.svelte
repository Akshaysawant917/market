<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    let mobileMenuOpen = false;
  
    // Optional: close menu on navigation
    function navigateTo(path) {
      mobileMenuOpen = false;
      goto(path);
    }
  </script>
  
  <nav class="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <h1
        class="text-2xl font-extrabold text-blue-600 cursor-pointer select-none"
        on:click={() => navigateTo('/')}
      >
        ExploreTravelia
      </h1>
  
      <!-- Desktop Nav Links -->
      <div class="hidden md:flex space-x-8 text-gray-700 font-semibold">
        <a
          class="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          on:click={() => navigateTo('/')}
          >Home</a
        >
        <a
          class="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          on:click={() => navigateTo('/about-us')}
          >About</a
        >
        <a
          class="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          on:click={() => navigateTo('/contact')}
          >Contact</a
        >
           <a
          class="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          on:click={() => navigateTo('/pricing')}
          >Pricing</a
        >
        <a
        class="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
        on:click={() => navigateTo('/campaigns')}>Campaigns</a
      >
      <a
        class="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
        on:click={() => navigateTo('/post-campaign')}>Create Camp</a>
      </div>
  
      <!-- Auth Buttons (desktop) -->
      <div class="hidden md:flex space-x-4">
        <button
          class="px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
          on:click={() => navigateTo('/signin')}
        >
          Sign In
        </button>
        <button
          class="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          on:click={() => navigateTo('/signup')}
        >
          Sign Up
        </button>
      </div>
  
      <!-- Mobile menu button -->
      <button
        class="md:hidden text-blue-600 focus:outline-none"
        aria-label="Toggle menu"
        on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
      >
        <svg
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          {#if !mobileMenuOpen}
            <path d="M4 6h16M4 12h16M4 18h16" />
          {:else}
            <path d="M6 18L18 6M6 6l12 12" />
          {/if}
        </svg>
      </button>
    </div>
  
    <!-- Mobile menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden bg-white shadow-lg border-t border-gray-200">
        <div class="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-semibold">
          <a class="cursor-pointer hover:text-blue-600" on:click={() => navigateTo('/')}>Home</a>
          <a class="cursor-pointer hover:text-blue-600" on:click={() => navigateTo('/about-us')}>About</a>
          <a class="cursor-pointer hover:text-blue-600" on:click={() => navigateTo('/contact')}>Contact</a>
          <a class="cursor-pointer hover:text-blue-600" on:click={() => navigateTo('/feed')}>Feed</a>
            <a class="cursor-pointer hover:text-blue-600" on:click={() => navigateTo('/pricing')}>Pricing</a>
          <a class="cursor-pointer hover:text-blue-600" on:click={() => navigateTo('/post-campaign')}>Create Camp</a>
  
          <div class="flex flex-col space-y-3 mt-4">
            <button
              class="w-full px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
              on:click={() => navigateTo('/signin')}
            >
              Sign In
            </button>
            <button
              class="w-full px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              on:click={() => navigateTo('/signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    {/if}
  </nav>
  