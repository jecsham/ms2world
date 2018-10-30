const mongoose = require('mongoose');
const chalk = require('chalk');
const sanitize = require('mongo-sanitize');
const mSteamAPI = require('steamapi');
const steamapi = new mSteamAPI(process.env.STEAM_KEY);


mongoose.connect(process.env.MDB, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(chalk.green('MongoDB connected'));
});

//Global statics
var gstatics = {}
gstatics.description = 'MS2World.net is the best MapleStory2 fan site to find Guides, Builds, Beats, News and More! Join now our community!';


// MDB Models
const User_account =  mongoose.model('User_account', {
    name: String,
    sid: String,
    date_create: Date,
    date_last_login: Date
});

const Post_guide =  mongoose.model('Post_guide ', {
    sid: String,
    title: String,
    content: String,
    description: String,
    tags: [Object],
    date_create: Date,
    last_edit_date: Date
});

const Post_build =  mongoose.model('Post_build', {
    sid: String,
    title: String,
    content: String,
    date_create: Date,
    class_id: Number,
    last_edit_date: Date
});

const Ms2_new =  mongoose.model('Ms2_new', {
    title: String,
    tag:  String,
    url: String,
    img: String,
    date_create: Date
});

const Ms2_class =  mongoose.model('Ms2_class', {
    name: String,
    img: String
});

module.exports = {
    gstatics: gstatics,
    User_account: User_account,
    Post_guide: Post_guide,
    Post_build: Post_build,
    Ms2_new: Ms2_new,
    Ms2_class: Ms2_class,
    sanitize: sanitize,
    steamapi: steamapi

};