import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
    title: String,
    description: String,
    budget: Number,
    brandId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const Campaign = mongoose.models.Campaign || mongoose.model("Campaign", campaignSchema);
