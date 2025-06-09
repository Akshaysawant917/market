<script>
	// Pricing plans dat
	const plans = [
		{
			name: 'Basic',
			price: '$9',
			duration: 'month',
			features: [
				'Access to basic features',
				'Email support',
				'Single user license',
			],
			popular: false,
		},
		{
			name: 'Pro',
			price: '$29',
			duration: 'month',
			features: [
				'Everything in Basic',
				'Priority email support',
				'Multi-user license',
				'Advanced analytics',
			],
			popular: true,
		},
		{
			name: 'Enterprise',
			price: '$99',
			duration: 'month',
			features: [
				'All Pro features',
				'Dedicated account manager',
				'Custom integrations',
				'24/7 phone support',
			],
			popular: false,
		},
	];
</script>

<section class="max-w-7xl mx-auto px-6 py-20 mt-10">
	<h2 class="text-4xl font-extrabold text-center mb-8 text-indigo-700">
		Pricing Plans
	</h2>
	<p class="text-center max-w-xl mx-auto text-gray-600 mb-14">
		Choose the plan that works best for you and scale as you grow.
	</p>

	<div class="grid gap-8 md:grid-cols-3">
		{#each plans as plan}
			<div
				class="rounded-3xl border border-gray-200 p-8 shadow-md flex flex-col"
				class:shadow-xl={plan.popular}
				class:border-indigo-500={plan.popular}
			>
				{#if plan.popular}
					<div class="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-indigo-700 font-semibold text-sm self-start">
						Most Popular
					</div>
				{/if}
				<h3 class="text-2xl font-bold mb-4">{plan.name}</h3>
				<div class="mb-6">
					<span class="text-5xl font-extrabold text-indigo-600">{plan.price}</span>
					<span class="text-gray-500 text-lg">/{plan.duration}</span>
				</div>
				<ul class="mb-8 flex-grow space-y-3 text-gray-700">
					{#each plan.features as feature}
						<li class="flex items-center">
							
							{feature}
						</li>
					{/each}
				</ul>
				<button
					class="mt-auto rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-indigo-700 transition focus:outline-none focus:ring-4 focus:ring-indigo-400"
					aria-label={`Select ${plan.name} plan`}
				>
					Choose {plan.name}
				</button>
			</div>
		{/each}
	</div>
</section>
