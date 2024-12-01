const express = require("express");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require("./routes/auth/auth-routes")

mongoose
  .connect(
'mongodb+srv://eity2021akter:eity2021akter@ecommerce.qgmlx.mongodb.net/'
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;
app. use(
    cors({
        origin: 'https://mern-project-client-pi.vercel.app',
        methods:['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        Credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter )

app.listen(PORT , ()=> console.log(`Server is now running on port ${PORT}`));

