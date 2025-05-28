<!-- Featured Campaigns -->
<section class="py-20 px-6 bg-gray-50">
    <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">Featured Campaigns</h2>
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {#each Array(3) as _, i}
        <div class="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
          <h4 class="text-2xl font-semibold mb-3 text-indigo-700">Campaign #{i + 1}</h4>
          <p class="text-gray-600 mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula luctus nulla, nec dapibus lacus.</p>
          <a href="/campaigns" class="inline-block text-indigo-600 font-semibold hover:underline hover:text-indigo-800 transition-colors duration-200">View Details &rarr;</a>
        </div>
      {/each}
    </div>
  </section>
  