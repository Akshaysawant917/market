<script>
    import { enhance } from '$app/forms';

    let message = '';

    // async function handleSubmit({ result }) {
    //     if (result.type === 'success') {
    //         message = '✅ Signup successful! You can now log in.';
    //     } else {
    //         message = result.data?.message || '❌ Signup failed. Try again.';
    //     }
    // }
</script>

<div class="flex justify-center items-center min-h-screen bg-cover bg-center" 
    style="background-image: url('/travel-bg.jpg');">
    
    <div class="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg w-full mt-10 max-w-md">
        <h2 class="text-3xl font-bold text-blue-800 text-center mb-6">Join ExploreTravelia</h2>
        <p class="text-gray-600 text-center mb-4">Connect with travelers & brands worldwide! ✈️🌍</p>

        <form method="POST" action="?/signup"  class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" placeholder="Your Name" required 
                    class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 bg-gray-50" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" placeholder="Your Email" required 
                    class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 bg-gray-50" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" placeholder="Enter Password" required 
                    class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 bg-gray-50" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">Role</label>
                <select name="role" class="w-full px-4 py-2 mt-1 border rounded-lg bg-white focus:ring focus:ring-blue-300">
                    <option value="influencer">🌍 Travel Influencer</option>
                    <option value="brand">🏢 Travel Brand</option>
                </select>
            </div>

            <button type="submit" 
                class="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:opacity-90 text-white font-semibold py-2 rounded-lg transition">
                ✈️ Sign Up & Start Exploring
            </button>
        </form>

        <p class="text-center text-sm mt-4 text-gray-700 font-medium">{message}</p>
    </div>
</div>
