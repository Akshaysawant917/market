Brand<script>
    // Dummy brand data
    let brandName = "Awesome Brand";
  
    let campaigns = [
      { id: 1, title: "Summer Promo", status: "Active", applications: 15 },
      { id: 2, title: "Winter Sale", status: "Completed", applications: 30 },
      { id: 3, title: "New Product Launch", status: "Draft", applications: 0 }
    ];
  
    let recentApplications = [
      { id: 101, influencer: "Jane Doe", campaign: "Summer Promo", date: "2025-05-20" },
      { id: 102, influencer: "John Smith", campaign: "Summer Promo", date: "2025-05-18" },
      { id: 103, influencer: "Alice Johnson", campaign: "Winter Sale", date: "2025-05-15" }
    ];
  
    function acceptApplication(id) {
      alert(`Accepted application ${id}`);
    }
    function rejectApplication(id) {
      alert(`Rejected application ${id}`);
    }
  </script>
  
  <section class="max-w-7xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-8">Welcome, {brandName}</h1>
  
    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div class="bg-indigo-600 text-white rounded-lg p-6 text-center shadow">
        <p class="text-4xl font-bold">{campaigns.length}</p>
        <p class="mt-2">Campaigns Posted</p>
      </div>
      <div class="bg-indigo-500 text-white rounded-lg p-6 text-center shadow">
        <p class="text-4xl font-bold">{recentApplications.length}</p>
        <p class="mt-2">Applications Received</p>
      </div>
      <div class="bg-indigo-400 text-white rounded-lg p-6 text-center shadow">
        <p class="text-4xl font-bold">{campaigns.filter(c => c.status === "Active").length}</p>
        <p class="mt-2">Active Campaigns</p>
      </div>
    </div>
  
    <!-- Posted Campaigns -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Your Campaigns</h2>
      <table class="w-full table-auto border-collapse border border-gray-300 rounded-md">
        <thead class="bg-indigo-100">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left">Title</th>
            <th class="border border-gray-300 px-4 py-2">Status</th>
            <th class="border border-gray-300 px-4 py-2">Applications</th>
            <th class="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each campaigns as campaign}
            <tr class="hover:bg-indigo-50">
              <td class="border border-gray-300 px-4 py-2">{campaign.title}</td>
              <td class="border border-gray-300 px-4 py-2 text-center">{campaign.status}</td>
              <td class="border border-gray-300 px-4 py-2 text-center">{campaign.applications}</td>
              <td class="border border-gray-300 px-4 py-2 text-center space-x-2">
                <button class="text-indigo-600 hover:underline">View</button>
                <button class="text-yellow-600 hover:underline">Edit</button>
                <button class="text-red-600 hover:underline">Close</button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </section>
  
    <!-- Recent Applications -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Recent Influencer Applications</h2>
      <div class="space-y-4">
        {#each recentApplications as app}
          <div class="bg-white rounded-lg shadow p-4 flex justify-between items-center">
            <div>
              <p><span class="font-semibold">{app.influencer}</span> applied for <span class="font-semibold">{app.campaign}</span></p>
              <p class="text-sm text-gray-500">Applied on {app.date}</p>
            </div>
            <div class="space-x-2">
              <button
                class="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                on:click={() => acceptApplication(app.id)}
              >
                Accept
              </button>
              <button
                class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                on:click={() => rejectApplication(app.id)}
              >
                Reject
              </button>
            </div>
          </div>
        {/each}
      </div>
    </section>
  </section>
  