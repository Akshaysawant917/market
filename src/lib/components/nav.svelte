<script>
    import { goto } from '$app/navigation';
</script>

<nav class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo -->
        <h1 class="text-2xl font-bold text-blue-600 cursor-pointer" on:click={() => goto('/')}>
            ExploreTravelia
        </h1>

        <!-- Nav Links -->
        <div class="hidden md:flex space-x-6">
            <a class="text-gray-700 hover:text-blue-600 transition" on:click={() => goto('/')}>Home</a>
            <a class="text-gray-700 hover:text-blue-600 transition" on:click={() => goto('/about-us')}>About</a>
            <a class="text-gray-700 hover:text-blue-600 transition" on:click={() => goto('/contact')}>Contact</a>
        </div>

        <!-- Auth Buttons -->
        <div class="space-x-4">
            <button class="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition" on:click={() => goto('/signin')}>
                Sign In
            </button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" on:click={() => goto('/signup')}>
                Sign Up
            </button>
        </div>
    </div>
</nav>
