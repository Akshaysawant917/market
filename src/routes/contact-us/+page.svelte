<script>
    import { goto } from '$app/navigation';

    let name = "";
    let email = "";
    let message = "";

    const submitForm = () => {
        alert(`Thank you, ${name}! We'll get back to you soon.`);
        name = "";
        email = "";
        message = "";
    };
</script>

<!-- Background Section -->
<div class="relative min-h-screen flex items-center justify-center bg-cover bg-center"
    style="background-image: url('/travel-bg.jpg');">
    
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>

    <!-- Contact Form -->
    <div class="relative z-10 w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-8 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p class="text-lg text-gray-600 mb-6">
            We'd love to hear from you! Whether you have questions or partnership inquiries, feel free to reach out.
        </p>

        <!-- Form -->
        <form class="space-y-4" on:submit|preventDefault={submitForm}>
            <div>
                <input type="text" bind:value={name} 
                    class="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your Name" required />
            </div>
            <div>
                <input type="email" bind:value={email} 
                    class="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your Email" required />
            </div>
            <div>
                <textarea bind:value={message} 
                    class="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" 
                class="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition">
                Send Message
            </button>
        </form>
    </div>
</div>
