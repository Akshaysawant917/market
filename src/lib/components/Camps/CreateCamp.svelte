<script>
    let campaign = {
      title: '',
      description: '',
      budget: '',
      startDate: '',
      endDate: '',
      platforms: [],
      targetAudience: '',
      media: null
    };
  
    const platforms = ['Instagram', 'YouTube', 'TikTok', 'Facebook', 'Twitter'];
  
    function handleFileChange(event) {
      campaign.media = event.target.files;
    }
  
    function submitCampaign() {
      // Add form validation & submission logic here
      alert('Campaign submitted! (Implement your logic)');
    }
  </script>
  
  <section class="max-w-7xl mx-auto p-8 bg-white  my-12">
    <h1 class="text-3xl font-bold mb-8 text-center">Create New Campaign</h1>
  
    <form
      class="space-y-8"
      on:submit|preventDefault={submitCampaign}
      autocomplete="off"
    >
      <!-- Campaign Title -->
      <div>
        <label for="title" class="block font-semibold mb-2">Campaign Title</label>
        <input
          id="title"
          type="text"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          bind:value={campaign.title}
          placeholder="Enter campaign title"
          required
        />
      </div>
  
      <!-- Campaign Description -->
      <div>
        <label for="description" class="block font-semibold mb-2">Campaign Description</label>
        <textarea
          id="description"
          rows="5"
          class="w-full border border-gray-300 rounded-md px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
          bind:value={campaign.description}
          placeholder="Describe your campaign objectives, expectations, etc."
          required
        ></textarea>
      </div>
  
      <!-- Budget & Duration -->
      <div class="grid md:grid-cols-3 gap-6">
        <div>
          <label for="budget" class="block font-semibold mb-2">Budget (USD)</label>
          <input
            id="budget"
            type="number"
            min="0"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            bind:value={campaign.budget}
            placeholder="e.g. 1000"
            required
          />
        </div>
  
        <div>
          <label for="startDate" class="block font-semibold mb-2">Start Date</label>
          <input
            id="startDate"
            type="date"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            bind:value={campaign.startDate}
            required
          />
        </div>
  
        <div>
          <label for="endDate" class="block font-semibold mb-2">End Date</label>
          <input
            id="endDate"
            type="date"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            bind:value={campaign.endDate}
            required
          />
        </div>
      </div>
  
      <!-- Target Audience -->
      <div>
        <label for="audience" class="block font-semibold mb-2">Target Audience</label>
        <input
          id="audience"
          type="text"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          bind:value={campaign.targetAudience}
          placeholder="E.g., Age 18-30, US, interested in fitness"
          required
        />
      </div>
  
      <!-- Platforms -->
      <div>
        <label class="block font-semibold mb-2">Select Platforms</label>
        <div class="flex flex-wrap gap-4">
          {#each platforms as platform}
            <label class="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={platform}
                on:change="{e => {
                  if (e.target.checked) {
                    campaign.platforms = [...campaign.platforms, platform];
                  } else {
                    campaign.platforms = campaign.platforms.filter(p => p !== platform);
                  }
                }}"
                class="form-checkbox text-indigo-600"
              />
              <span class="ml-2">{platform}</span>
            </label>
          {/each}
        </div>
      </div>
  
      <!-- Media Upload -->
      <div>
        <label for="media" class="block font-semibold mb-2">Upload Media (Images/Videos)</label>
        <input
          id="media"
          type="file"
          multiple
          accept="image/*,video/*"
          on:change={handleFileChange}
          class="block w-full text-gray-600"
        />
        <p class="text-sm text-gray-500 mt-1">You can upload multiple files.</p>
      </div>
  
      <!-- Submit -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-3 rounded-lg transition"
        >
          Create Campaign
        </button>
      </div>
    </form>
  </section>
  