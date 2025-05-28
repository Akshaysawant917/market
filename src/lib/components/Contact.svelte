<script>
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
  
    let successMessage = '';
    let errorMessage = '';
  
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      errorMessage = '';
      successMessage = '';
  
      if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
        errorMessage = 'Please fill in all the fields.';
        return;
      }
  
      if (!validateEmail(email)) {
        errorMessage = 'Please enter a valid email address.';
        return;
      }
  
      // Simulate API call
      setTimeout(() => {
        successMessage = 'Thank you for reaching out! We will get back to you soon.';
        name = '';
        email = '';
        subject = '';
        message = '';
      }, 600);
    }
  </script>
  
  <section class="max-w-4xl mx-auto px-6 py-20 mt-12">
    <h1 class="text-4xl font-extrabold mb-6 text-center text-indigo-700 drop-shadow-md">Get In Touch</h1>
  
    <p class="text-center text-gray-600 mb-14 max-w-xl mx-auto text-lg">
      Questions? Collaborations? We’re here to help — just send us a message.
    </p>
  
    <form
      class="bg-white p-10 rounded-3xl shadow-xl max-w-2xl mx-auto"
      on:submit|preventDefault={handleSubmit}
      aria-label="Contact form"
    >
      {#if errorMessage}
        <div
          class="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-300 font-semibold animate-shake"
          role="alert"
        >
          {errorMessage}
        </div>
      {/if}
      {#if successMessage}
        <div
          class="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-300 font-semibold animate-fade-in"
          role="status"
        >
          {successMessage}
        </div>
      {/if}
  
      <div class="mb-6">
        <label for="name" class="block mb-2 font-semibold text-gray-800">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your full name"
          bind:value={name}
          class="w-full border border-gray-300 rounded-lg px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          required
          autocomplete="name"
        />
      </div>
  
      <div class="mb-6">
        <label for="email" class="block mb-2 font-semibold text-gray-800">Email</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          bind:value={email}
          class="w-full border border-gray-300 rounded-lg px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          required
          autocomplete="email"
        />
      </div>
  
      <div class="mb-6">
        <label for="subject" class="block mb-2 font-semibold text-gray-800">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="Subject of your message"
          bind:value={subject}
          class="w-full border border-gray-300 rounded-lg px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          required
        />
      </div>
  
      <div class="mb-8">
        <label for="message" class="block mb-2 font-semibold text-gray-800">Message</label>
        <textarea
          id="message"
          rows="6"
          placeholder="Write your message here..."
          bind:value={message}
          class="w-full border border-gray-300 rounded-lg px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition resize-y"
          required
        ></textarea>
      </div>
  
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-shadow shadow-md hover:shadow-lg focus:ring-4 focus:ring-indigo-400 focus:outline-none"
      >
        Send Message
      </button>
    </form>
  </section>
  
  <style>
    @keyframes shake {
      10%, 90% { transform: translateX(-1px); }
      20%, 80% { transform: translateX(2px); }
      30%, 50%, 70% { transform: translateX(-4px); }
      40%, 60% { transform: translateX(4px); }
    }
    .animate-shake {
      animation: shake 0.5s ease-in-out;
    }
  
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.4s ease forwards;
    }
  </style>
  