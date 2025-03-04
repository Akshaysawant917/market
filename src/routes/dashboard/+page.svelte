<script>
import { onMount } from "svelte";
import { goto } from "$app/navigation";
import { page } from "$app/stores";
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

import PocketBase from 'pocketbase';

let pb = new PocketBase(PUBLIC_POCKETBASE_URL);
let user, campaigns = [];


onMount(async() => {
    console.log("User from layout:", $page.data.user);

    if (!$page.data.user) {
        console.log("No user found, redirecting...");
        goto("/signin");
    } else {
        user = $page.data.user;
        if (user.role === "Brand") {
                await fetchCampaigns();
            } else {
                await fetchAvailableCampaigns();
            }

    }
});
async function fetchCampaigns() {
        try {
            campaigns = await pb.collection("campaigns").getFullList();
            console.log("Fetched campaigns:", campaigns);
        } catch (error) {
            console.error("Error fetching campaigns:", error);
        }
    }

    async function fetchAvailableCampaigns() {
        try {
            campaigns = await pb.collection("campaigns").getFullList();
            console.log("Fetched available campaigns:", campaigns);
        } catch (error) {
            console.error("Error fetching campaigns:", error);
        }
    }

    async function postCampaign() {
        let title = prompt("Enter campaign title:");
        let description = prompt("Enter campaign description:");
        let budget = prompt("Enter campaign budget:");

        if (title && description && budget) {
            try {
                let newCampaign = await pb.collection("campaigns").create({
                    title,
                    description,
                    budget,
                    brandId: user.id
                });
                console.log("Campaign posted:", newCampaign);
                await fetchCampaigns();
            } catch (error) {
                console.error("Error posting campaign:", error);
            }
        }
    }

    async function applyForCampaign(campaignId) {
        try {
            await pb.collection("applications").create({
                campaignId,
                influencerId: user.id
            });
            alert("Applied successfully!");
        } catch (error) {
            console.error("Error applying for campaign:", error);
        }
    }

    function logout() {
        pb.authStore.clear();
        document.cookie = "pb_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        console.log("User logged out");
        goto('/signin');
    }
</script>


<div class="min-h-screen bg-gray-100 flex flex-col items-center p-6">
    <h1 class="text-3xl font-bold mb-4">Dashboard</h1>

    {#if user}
        <div class="bg-white p-6 shadow-lg rounded-lg w-full max-w-4xl">
            <h2 class="text-xl font-semibold">Welcome, {user.name}!</h2>
            <p class="text-gray-600 mt-2">Your role: <strong>{user.role}</strong></p>

            {#if user.role === "Brand"}
                <div class="mt-4">
                    <h3 class="text-lg font-semibold">Brand Dashboard</h3>
                    <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md" on:click={postCampaign}>
                        Post a Campaign
                    </button>

                    <h4 class="mt-4 text-lg font-semibold">Your Campaigns</h4>
                    {#each campaigns as campaign}
                        <div class="mt-2 p-4 border rounded bg-gray-50">
                            <h5 class="text-md font-semibold">{campaign.title}</h5>
                            <p class="text-gray-600">{campaign.description}</p>
                            <p class="text-gray-800 font-bold">Budget: ₹{campaign.budget}</p>
                        </div>
                    {/each}
                </div>
            {:else if user.role === "Influencer"}
                <div class="mt-4">
                    <h3 class="text-lg font-semibold">Influencer Dashboard</h3>

                    <h4 class="mt-4 text-lg font-semibold">Available Campaigns</h4>
                    {#each campaigns as campaign}
                        <div class="mt-2 p-4 border rounded bg-gray-50">
                            <h5 class="text-md font-semibold">{campaign.title}</h5>
                            <p class="text-gray-600">{campaign.description}</p>
                            <p class="text-gray-800 font-bold">Budget: ₹{campaign.budget}</p>
                            <button class="mt-2 px-4 py-2 bg-green-500 text-white rounded-md" on:click={() => applyForCampaign(campaign.id)}>
                                Apply
                            </button>
                        </div>
                    {/each}
                </div>
            {/if}

            <button class="mt-6 px-6 py-2 bg-red-500 text-white rounded-md" >
                Logout
            </button>
        </div>
    {:else}
        <p>Loading...</p>
    {/if}
</div>