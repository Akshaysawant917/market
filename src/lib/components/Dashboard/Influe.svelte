<script>
    let influencerName = "Alex Influencer";
  
    let appliedCampaigns = [
      { id: 1, title: "Summer Promo", status: "Pending", appliedDate: "2025-05-20" },
      { id: 2, title: "Winter Sale", status: "Accepted", appliedDate: "2025-05-15" },
      { id: 3, title: "New Product Launch", status: "Rejected", appliedDate: "2025-05-10" }
    ];
  
    function withdrawApplication(id) {
      alert(`Withdrawn application ${id}`);
    }
  </script>
  
  <section class="max-w-7xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-8">Welcome, {influencerName}</h1>
  
    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div class="bg-pink-600 text-white rounded-lg p-6 text-center shadow">
        <p class="text-4xl font-bold">{appliedCampaigns.length}</p>
        <p class="mt-2">Campaigns Applied</p>
      </div>
      <div class="bg-pink-500 text-white rounded-lg p-6 text-center shadow">
        <p class="text-4xl font-bold">{appliedCampaigns.filter(c => c.status === "Accepted").length}</p>
        <p class="mt-2">Active Campaigns</p>
      </div>
      <div class="bg-pink-400 text-white rounded-lg p-6 text-center shadow">
        <p class="text-4xl font-bold">₹12,000</p>
        <p class="mt-2">Earnings</p>
      </div>
    </div>
  
    <!-- Applied Campaigns -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Your Applications</h2>
      <table class="w-full table-auto border-collapse border border-gray-300 rounded-md">
        <thead class="bg-pink-100">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left">Campaign</th>
            <th class="border border-gray-300 px-4 py-2">Status</th>
            <th class="border border-gray-300 px-4 py-2">Applied On</th>
            <th class="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each appliedCampaigns as campaign}
            <tr class="hover:bg-pink-50">
              <td class="border border-gray-300 px-4 py-2">{campaign.title}</td>
              <td class="border border-gray-300 px-4 py-2 text-center">{campaign.status}</td>
              <td class="border border-gray-300 px-4 py-2 text-center">{campaign.appliedDate}</td>
              <td class="border border-gray-300 px-4 py-2 text-center">
                {#if campaign.status === "Pending"}
                  <button
                    class="text-pink-600 hover:underline"
                    on:click={() => withdrawApplication(campaign.id)}
                  >
                    Withdraw
                  </button>
                {:else}
                  <button class="text-gray-400 cursor-not-allowed" disabled>Withdraw</button>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </section>
  </section>
  