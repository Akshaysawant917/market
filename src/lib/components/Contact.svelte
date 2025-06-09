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

	function clearError() {
		errorMessage = '';
	}
</script>

<section class="mx-auto mt-12 flex flex-col md:flex-row w-full px-6 py-20 max-w-7xl">
	<!-- Form Section -->
	<div class="w-full md:w-6/12 md:pr-12">
		<h1 class="mb-6 text-center text-4xl font-extrabold text-indigo-700 ">
			Get In Touch
		</h1>

		<p class="mx-auto mb-14 max-w-xl text-center text-lg text-gray-600">
			Questions? Collaborations? We’re here to help — just send us a message.
		</p>

		<form
			class="mx-auto max-w-2xl rounded-3xl bg-white p-10 "
			on:submit|preventDefault={handleSubmit}
			aria-label="Contact form"
		>
			{#if errorMessage}
				<div
					class="animate-shake mb-6 rounded-lg border border-red-300 bg-red-100 p-4 font-semibold text-red-700"
					role="alert"
				>
					{errorMessage}
				</div>
			{/if}
			{#if successMessage}
				<div
					class="animate-fade-in mb-6 rounded-lg border border-green-300 bg-green-100 p-4 font-semibold text-green-700"
					role="status"
				>
					{successMessage}
				</div>
			{/if}

			<div class="mb-6">
				<label for="name" class="mb-2 block font-semibold text-gray-800">Name</label>
				<input
					type="text"
					id="name"
					placeholder="Your full name"
					bind:value={name}
					on:input={clearError}
					class="w-full rounded-lg border border-gray-300 px-5 py-3 placeholder-gray-400 transition focus:ring-4 focus:ring-indigo-300 focus:outline-none"
					required
					autocomplete="name"
				/>
			</div>

			<div class="mb-6">
				<label for="email" class="mb-2 block font-semibold text-gray-800">Email</label>
				<input
					type="email"
					id="email"
					placeholder="you@example.com"
					bind:value={email}
					on:input={clearError}
					class="w-full rounded-lg border border-gray-300 px-5 py-3 placeholder-gray-400 transition focus:ring-4 focus:ring-indigo-300 focus:outline-none"
					required
					autocomplete="email"
				/>
			</div>

			<div class="mb-6">
				<label for="subject" class="mb-2 block font-semibold text-gray-800">Subject</label>
				<input
					type="text"
					id="subject"
					placeholder="Subject of your message"
					bind:value={subject}
					on:input={clearError}
					class="w-full rounded-lg border border-gray-300 px-5 py-3 placeholder-gray-400 transition focus:ring-4 focus:ring-indigo-300 focus:outline-none"
					required
				/>
			</div>

			<div class="mb-8">
				<label for="message" class="mb-2 block font-semibold text-gray-800">Message</label>
				<textarea
					id="message"
					rows="6"
					placeholder="Write your message here..."
					bind:value={message}
					on:input={clearError}
					class="w-full resize-y rounded-lg border border-gray-300 px-5 py-3 placeholder-gray-400 transition focus:ring-4 focus:ring-indigo-300 focus:outline-none"
					required
				></textarea>
			</div>

			<button
				type="submit"
				class="w-full rounded-2xl bg-indigo-600 py-4 font-bold text-white shadow-md transition-shadow hover:bg-indigo-700 hover:shadow-lg focus:ring-4 focus:ring-indigo-400 focus:outline-none"
			>
				Send Message
			</button>
		</form>
	</div>

	<!-- Image Section -->
	<div
		class="w-full md:w-6/12 mt-10 md:mt-0 rounded-3xl bg-cover bg-center shadow-xl"
		style="background-image: url('/contact.jpg'); min-height: 480px;"
		aria-hidden="true"
	></div>
</section>

<style>
	@keyframes shake {
		10%,
		90% {
			transform: translateX(-1px);
		}
		20%,
		80% {
			transform: translateX(2px);
		}
		30%,
		50%,
		70% {
			transform: translateX(-4px);
		}
		40%,
		60% {
			transform: translateX(4px);
		}
	}
	.animate-shake {
		animation: shake 0.5s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fade-in {
		animation: fadeIn 0.4s ease forwards;
	}
</style>
