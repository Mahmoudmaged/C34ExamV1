const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const mongoose = require('mongoose');
const session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var flash = require('connect-flash');
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");
const  store = new MongoDBStore({
  uri: 'mongodb+srv://MahmoudElwan:01015776658@mahmoudelwan-nodejs.jfspq.mongodb.net/my_databaseC34',
  collection: 'mySessions'
});
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store
}))
const appRouter = require("./routers/app.router");
app.use(flash());
app.use(appRouter);

mongoose.connect('mongodb+srv://MahmoudElwan:01015776658@mahmoudelwan-nodejs.jfspq.mongodb.net/my_databaseC34', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
app.listen(process.env.PORT ||port, () => console.log(`Example app listening on port port!`))