const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const chalk = require('chalk');
mongoose.connect(process.env.MDB, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(chalk.green('MongoDB connected'));
});

// MDB Models
const User_account =  mongoose.model('User_account', {
    name: String,
    sid: String,
    date_create: Date
});
const Post_guide =  mongoose.model('Post_guide ', {
    sid: String,
    content: String,
    date_create: Date,
    last_edit_date: Date
});
const Post_build =  mongoose.model('Post_build', {
    sid: String,
    content: String,
    date_create: Date,
    class_id: Number,
    last_edit_date: Date
});
const Ms2_new =  mongoose.model('Ms2_new', {
    title: String,
    tag: String,
    url: String,
    img: String,
    date_create: Date
});
module.exports = {
    router: router,
    User_account: User_account,
    Post_guide: Post_guide,
    Post_build: Post_build,
    Ms2_new: Ms2_new

};