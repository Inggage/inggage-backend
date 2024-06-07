const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//env config
dotenv.config();

//router import
const influencersRoute = require('./routes/influencersRoute')
const brandsRoute = require('./routes/brandsRoute')
//const campaignRoute = require('./routes/campaignRoute')

//MongoDB connection
//connectDB();

//Rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/influencer", influencersRoute);
app.use("/api/v1/brand", brandsRoute)
//app.use("/api/v1/campaign",campaignRoute)

//Port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, () => {
    console.log(`server Running ${process.env.DEV_MODE} MODE port no ${PORT}`.bgCyan.white);
});

