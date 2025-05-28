<script>
    let name = "Alex Influencer";
    let bio = "";
    let email = "";
    let phone = "";
    let instagram = "";
    let youtube = "";
    let category = "";
    let followers = "";
    let engagementRate = "";
    let portfolio = "";
    let profilePic = "";
  
    let message = "";
  
    function handleSave() {
      if (!name || !email || !category) {
        message = "Please fill in all required fields.";
        return;
      }
      message = "Profile updated successfully!";
    }
  
    function handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        profilePic = URL.createObjectURL(file);
      }
    }
  </script>
  
  <section class="max-w-5xl mx-auto px-6 py-16 mt-10 bg-white shadow-xl rounded-xl">
    <h1 class="text-4xl font-extrabold mb-10 text-center text-indigo-700">Edit Your Profile</h1>
  
    {#if message}
      <div class="mb-6 p-4 bg-green-100 text-green-800 rounded shadow-sm text-center">{message}</div>
    {/if}
  
    <div class="grid gap-8 md:grid-cols-2">
      <div class="col-span-2 flex flex-col items-center mb-8">
        <label class="font-semibold text-lg mb-2">Profile Picture</label>
        <input type="file" accept="image/*" on:change={handleImageUpload} class="file:py-2 file:px-4 file:border file:rounded file:text-sm file:bg-indigo-100 file:text-indigo-800" />
        {#if profilePic}
          <img src={profilePic} alt="Profile Preview" class="mt-4 w-32 h-32 rounded-full object-cover border-4 border-indigo-300 shadow-md" />
        {/if}
      </div>
  
      <div>
        <label class="block mb-2 font-semibold">Full Name *</label>
        <input type="text" bind:value={name} class="w-full border px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
  
      <div>
        <label class="block mb-2 font-semibold">Email *</label>
        <input type="email" bind:value={email} class="w-full border px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
  
      <div>
        <label class="block mb-2 font-semibold">Phone</label>
        <input type="text" bind:value={phone} class="w-full border px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
  
      <div>
        <label class="block mb-2 font-semibold">Category *</label>
        <select bind:value={category} class="w-full border px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option disabled selected value="">Select category</option>
          <option>Fashion</option>
          <option>Technology</option>
          <option>Travel</option>
          <option>Beauty</option>
          <option>Fitness</option>
          <option>Finance</option>
        </select>
      </div>
  
      <div>
        <label class="block mb-2 font-semibold">Instagram URL</label>
        <input type="url" bind:value={instagram} class="w-full border px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
  
      <div>
        <label class="block mb-2 font-semibold">YouTube URL</label>
        <input type="url" bind:value={youtube} class="w-full border px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
  
      <div>
        <label class="block mb-2 font-semibold">Followers</label>
        <input type="number" bind:value={followers} class="w-full border px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
  
      <div>
        <label class="block mb-2 font-semibold">Engagement Rate (%)</label>
        <input type="number" step="0.01" bind:value={engagementRate} class="w-full border px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
  
      <div class="col-span-2">
        <label class="block mb-2 font-semibold">Portfolio URL</label>
        <input type="url" bind:value={portfolio} class="w-full border px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
  
      <div class="col-span-2">
        <label class="block mb-2 font-semibold">Short Bio</label>
        <textarea rows="4" bind:value={bio} class="w-full border px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
      </div>
  
      <div class="col-span-2">
        <button class="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md" on:click={handleSave}>
          Save Profile
        </button>
      </div>
    </div>
  </section>
  