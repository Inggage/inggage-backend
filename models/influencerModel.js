import mongoose from "mongoose";

const InfluencerSchema = new mongoose.Schema(
  {
    displayname: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    usertype: { type: String, required: true, unique: true },
    niche: { type: String, required: true, unique: false },
    platform: { type: String, required: true, unique: false },
    profilelink : { type: String, required: true, unique: true },
    collab: { type: Number, required: true, unique: false },
    password: { type: String, required: false },
   
  },
  { timestamps: true }
);

const influencerModel = mongoose.model("Influencer", InfluencerSchema);

export { influencerModel as Influencer };
