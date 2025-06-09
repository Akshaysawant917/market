<script>
    import { enhance } from '$app/forms';

    let email = '';
    let password = '';
    let message = '';


</script>

<div class="flex justify-center items-center min-h-screen bg-cover bg-center  mt-10" 
    style="background-image: url('/travel-bg.jpg');">
    <div class="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-3xl font-bold text-center text-blue-700 mb-4">Welcome Back, Traveler!</h2>
        <p class="text-gray-600 text-center mb-6">Sign in to explore new adventures ✈️</p>

        <form method="POST" action="?/login" class="space-y-4">
            <input type="email" name="email" placeholder="Email" bind:value={email} required 
                class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
            <input type="password" name="password" placeholder="Password" bind:value={password} required 
                class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
            
            <button type="submit" 
                class="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-md hover:from-blue-600 hover:to-blue-800 transition">
                Login
            </button>
        </form>

        <p class="text-red-500 text-center mt-2">{message}</p>
        <p class="text-center text-gray-600 mt-4">
            New here? <a href="/signup" class="text-blue-500 hover:underline">Create an account</a>
        </p>
    </div>
</div>
