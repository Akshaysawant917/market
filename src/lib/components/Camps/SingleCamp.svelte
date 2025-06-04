
<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
  
    let campaign;
    let loading = true;
  
    // Reuse the same mock data
    const allCampaigns = [
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
    ];
  
    $: campaignId = $page.params.camp;
  
    onMount(() => {
      campaign = allCampaigns.find(c => c.id == campaignId);
      loading = false;
    });
  
    function handleApply() {
      alert(`You applied for: ${campaign.title}`);
    }
  </script>
  
  <div class="mt-30">
  {#if loading}
    <p class="text-center py-10 mt-32">Loading...</p>
  {:else if campaign}
    <section class="max-w-3xl mx-auto p-6 ">
      <h1 class="text-3xl font-bold mb-2">{campaign.title}</h1>
      <p class="text-gray-500 text-sm mb-4">Platforms: {campaign.platforms.join(', ')}</p>
      <p class="text-gray-700 mb-6">{campaign.description}</p>
  
      <div class="mb-4">
        <p class="font-semibold">Budget: ₹{campaign.budget}</p>
        <p class="text-gray-600 text-sm">Duration: {campaign.startDate} to {campaign.endDate}</p>
      </div>
  
      <button
        on:click={handleApply}
        class="bg-green-600 text-white px-5 py-2 rounded hover:bg-indigo-700"
      >
        Apply Now
      </button>
    </section>
  {:else}
    <p class="text-center text-red-500 py-20">Campaign not found.</p>
  {/if}
</div>