
import express from "express"
import dotenv from "dotenv"

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());


// Step 1: Redirect to Instagram OAuth
app.get("/auth/instagram", (req, res) => {
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_APP_ID}&redirect_uri=${process.env.INSTAGRAM_REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
    res.redirect(authUrl);
  });
  
  // Step 2: Handle OAuth redirect and exchange code for access token
  app.get("/auth/instagram/callback", async (req, res) => {
    const { code } = req.query;
  
    try {
      const response = await axios.post(
        `https://api.instagram.com/oauth/access_token`,
        {
          client_id: process.env.INSTAGRAM_APP_ID,
          client_secret: process.env.INSTAGRAM_APP_SECRET,
          grant_type: "authorization_code",
          redirect_uri: process.env.INSTAGRAM_REDIRECT_URI,
          code,
        }
      );
  
      const { access_token, user_id } = response.data;
  
      // Fetch user profile data
      const userProfileResponse = await axios.get(
        `https://graph.instagram.com/me`,
        {
          params: {
            fields: "id,username,account_type",
            access_token,
          },
        }
      );
  
      res.json(userProfileResponse.data);
    } catch (error) {
      console.error("Error fetching access token:", error);
      res.status(500).json({ error: "Failed to fetch access token" });
    }
  });
  
  // Step 3: Fetch Instagram user media
  app.get("/instagram/media", async (req, res) => {
    const { access_token } = req.query;
  
    try {
      const response = await axios.get("https://graph.instagram.com/me/media", {
        params: {
          fields:
            "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username",
          access_token,
        },
      });
  
      res.json(response.data);
    } catch (error) {
      console.error("Error fetching media:", error);
      res.status(500).json({ error: "Failed to fetch media" });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  