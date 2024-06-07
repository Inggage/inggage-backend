import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema(
  {
    displayname: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    usertype: { type: String, required: true, unique: true },
    weblink: { type: String, required: true, unique: true },
    companytype: { type: String, required: true, unique: true },
    aov: { type: String, required: true, unique: true },
    isInfluencerMarketing: { type: String, required: true, unique: true },
    industry: { type: String, required: false, unique: false },
    password: { type: String, required: true },
    profilePicture: String,
  },
  { timestamps: true }
);

const brandModel = mongoose.model("Brand", BrandSchema);

export { brandModel as Brand };
