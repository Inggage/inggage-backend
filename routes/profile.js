const express = require("express");
const router = express.Router();

// Load Profile model
const Profile = require("../models/profile");

// @route   POST api/profile
// @desc    Create a profile
// @access  Public
router.post("/", (req, res) => {
  const newProfile = new Profile({
    profile_photo: req.body.profile_photo,
    profile_banner: req.body.profile_banner,
    about: req.body.about,
    total_earnings: req.body.total_earnings,
    monthly_earnings: req.body.monthly_earnings,
    monthly_increase: req.body.monthly_increase,
    collabs_this_month: req.body.collabs_this_month,
    social_statistics: {
      Total_Followers_on_Instagram: req.body.Total_Followers_on_Instagram,
      Total_Collab_Views: req.body.Total_Collab_Views,
      Total_Collab_Likes: req.body.Total_Collab_Likes,
      Total_Subscribers_on_YouTube: req.body.Total_Subscribers_on_YouTube,
      Total_Collab_Views_YouTube: req.body.Total_Collab_Views_YouTube,
      Total_Collab_Likes_YouTube: req.body.Total_Collab_Likes_YouTube,
    },
    earning_statistics: req.body.earning_statistics,
    view_statistics: req.body.view_statistics,
    collab_statistics: req.body.collab_statistics,
    collab_schedule: req.body.collab_schedule,
  });

  newProfile
    .save()
    .then((profile) => res.json(profile))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this profile" })
    );
});

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public
router.get("/", (req, res) => {
  Profile.find()
    .then((profiles) => res.json(profiles))
    .catch((err) =>
      res.status(404).json({ noprofilerfound: "No Profiles found" })
    );
});

// @route   GET api/profile/:id
// @desc    Get a profile by id
// @access  Public
router.get("/:id", (req, res) => {
  Profile.findById(req.params.id)
    .then((profile) => res.json(profile))
    .catch((err) =>
      res.status(404).json({ noprofilerfound: "No Profile found" })
    );
});

module.exports = router;
