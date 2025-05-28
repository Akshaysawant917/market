<script>
    import { onMount } from 'svelte';
  
    // Mock campaigns data (replace with API call in real use)
    let allCampaigns = [
      {
        id: 1,
        title: 'Fitness Boost Campaign',
        description: 'Promote the latest fitness gear.',
        budget: 1500,
        platforms: ['Instagram', 'TikTok'],
        startDate: '2025-06-01',
        endDate: '2025-06-30',
      },
      {
        id: 2,
        title: 'Tech Gadget Launch',
        description: 'Showcase our new smart watch.',
        budget: 3000,
        platforms: ['YouTube', 'Facebook'],
        startDate: '2025-05-15',
        endDate: '2025-06-15',
      },
      // Add more sample campaigns here...
    ];
  
    // Pagination
    let currentPage = 1;
    const itemsPerPage = 6;
  
    // Filters
    let searchQuery = '';
    let selectedPlatform = '';
    let minBudget = '';
    let maxBudget = '';
  
    const platforms = ['Instagram', 'YouTube', 'TikTok', 'Facebook', 'Twitter'];
  
    // Filter & search logic
    $: filteredCampaigns = allCampaigns.filter(c => {
      const matchesSearch =
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase());
  
      const matchesPlatform =
        selectedPlatform === '' || c.platforms.includes(selectedPlatform);
  
      const matchesMinBudget = minBudget === '' || c.budget >= +minBudget;
      const matchesMaxBudget = maxBudget === '' || c.budget <= +maxBudget;
  
      return matchesSearch && matchesPlatform && matchesMinBudget && matchesMaxBudget;
    });
  
    $: totalPages = Math.ceil(filteredCampaigns.length / itemsPerPage);
  
    $: paginatedCampaigns = filteredCampaigns.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    function goToPage(page) {
      if (page >= 1 && page <= totalPages) {
        currentPage = page;
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
      }
    }
  </script>
  
  <section class="max-w-7xl mx-auto px-6 py-12 mt-10">
    <h1 class="text-3xl font-bold mb-8 text-center">Available Campaigns</h1>
  
    <!-- Filters -->
    <div class="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <input
        type="search"
        placeholder="Search campaigns..."
        class="w-full md:w-1/3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        bind:value={searchQuery}
      />
  
      <select
        class="w-full md:w-1/4 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        bind:value={selectedPlatform}
      >
        <option value="">All Platforms</option>
        {#each platforms as platform}
          <option value={platform}>{platform}</option>
        {/each}
      </select>
  
      <div class="flex gap-2 w-full md:w-auto">
        <input
          type="number"
          min="0"
          placeholder="Min Budget"
          class="border border-gray-300 rounded-md px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          bind:value={minBudget}
        />
        <input
          type="number"
          min="0"
          placeholder="Max Budget"
          class="border border-gray-300 rounded-md px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          bind:value={maxBudget}
        />
      </div>
    </div>
  
    <!-- Campaign Grid -->
    {#if paginatedCampaigns.length > 0}
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each paginatedCampaigns as campaign}
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
            <h2 class="text-xl font-bold mb-2">{campaign.title}</h2>
            <p class="text-gray-600 text-sm mb-4">{campaign.description}</p>
            <p class="font-semibold">Budget: ${campaign.budget}</p>
            <p class="text-gray-500 text-sm mt-1">
              Platforms: {campaign.platforms.join(', ')}
            </p>
            <p class="text-gray-500 text-sm mt-1">
              Duration: {campaign.startDate} to {campaign.endDate}
            </p>
            <a
              href={`/campaigns/${campaign.id}`}
              class="inline-block mt-4 text-indigo-600 font-semibold hover:underline"
              >View Details</a
            >
          </div>
        {/each}
      </div>
    {:else}
      <p class="text-center text-gray-500 mt-10">No campaigns match your filters.</p>
    {/if}
  
    <!-- Pagination Controls -->
    {#if totalPages > 1}
      <div class="flex justify-center mt-12 space-x-3">
        <button
          class="px-3 py-1 rounded-md border border-gray-300 hover:bg-indigo-100"
          on:click={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
  
        {#each Array(totalPages) as _, i}
          <button
            class="px-3 py-1 rounded-md border hover:bg-indigo-500 hover:text-white transition
            {currentPage === i + 1 ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-300 text-gray-700'}"
            on:click={() => goToPage(i + 1)}
          >
            {i + 1}
          </button>
        {/each}
  
        <button
          class="px-3 py-1 rounded-md border border-gray-300 hover:bg-indigo-100"
          on:click={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    {/if}
  </section>
  