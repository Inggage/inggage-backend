const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  profile_photo: { type: String, required: false },
  profile_banner: { type: String, required: false },
  about: { type: String, required: false },
  total_earnings: { type: String, required: false },
  monthly_earnings: { type: String, required: false },
  monthly_increase: { type: String, required: false },
  collabs_this_month: { type: String, required: false },
  social_statistics: {
    Total_Followers_on_Instagram: { type: Number, required: false },
    Total_Collab_Views: { type: Number, required: false },
    Total_Collab_Likes: { type: Number, required: false },
    Total_Subscribers_on_YouTube: { type: Number, required: false },
    Total_Collab_Views_YouTube: { type: Number, required: false },
    Total_Collab_Likes_YouTube: { type: Number, required: false },
  },
  earning_statistics: { type: String, required: false },
  view_statistics: { type: String, required: false },
  collab_statistics: { type: String, required: false },
  collab_schedule: { type: String, required: false },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
