import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
    influencerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const Application = mongoose.models.Application || mongoose.model("Application", applicationSchema);
