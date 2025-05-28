import { Campaign } from "$lib/server/models/Campaign";
import { Application } from "$lib/server/models/Application";
import { json, redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    const user = locals.user; // Assuming user is stored in `locals`

    if (!user) {
        throw redirect(302, "/signin");
    }

    let campaigns = [];

    try {
        if (user.role === "Brand") {
            campaigns = await Campaign.find({ brandId: user.id });
        } else {
            campaigns = await Campaign.find({});
        }
    } catch (error) {
        console.error("Error fetching campaigns:", error);
    }
    
    const responseData = JSON.stringify({ user, campaigns });
    return (JSON.parse(responseData));
}

export const actions = {
    postCampaign: async ({ request, locals }) => {
        const user = locals.user;
        if (!user || user.role !== "brand") return json({ error: "Unauthorized" }, { status: 401 });

        const formData = await request.formData();
        const newCampaign = new Campaign({
            title: formData.get("title"),
            description: formData.get("description"),
            budget: formData.get("budget"),
            brandId: user.id
        });
        console.log("newCampaign",newCampaign);
        
        try {
            await newCampaign.save();
            return { success: true };
        } catch (error) {
            return { error: "Failed to create campaign" }, { status: 500 };
        }
    },

    applyForCampaign: async ({ request, locals }) => {
        const user = locals.user;
        if (!user || user.role !== "influencer") return { error: "Unauthorized" }, { status: 401 };

        const formData = await request.formData();
        const campaignId = formData.get("campaignId");
        console.log(campaignId);
        
        try {
            await new Application({
                campaignId,
                influencerId: user.id
            }).save();
            
            return { success: true };
        } catch (error) {
            return { error: "Failed to apply" }, { status: 500 };
        }
    }
};
