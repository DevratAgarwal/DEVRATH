require('dotenv').config({ path: '.env' });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const Pusher = require('pusher');

const app = express();
const passport = require("passport");
const users = require("./routes/api/users");

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

app.use(cors())
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://gk24015:gulshankumar@cluster0-syi4f.mongodb.net/code?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
  }).then(() =>{
    console.log('Connected to db');
  }).catch(err=>{
    console.log("error",err.message);   
  });
  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.post('/update-editor', (req, res) => {
  pusher.trigger('editor', 'text-update', {
   ...req.body,
  });

  res.status(200).send('OK');
});

// Routes
app.use("/api/users", users);
  const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
  app.listen(port, () => console.log(`Server up and running on port ${port} !`));