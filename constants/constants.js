const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
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

// Error strings
var es = {
    internal: "An internal server error has occurred. Please contact an administrator or try later.",
    login: "You must be login.",
    steam_id_match: "User Steam ID don't match. You aren't the post owner.",
    big_content: "The content is too big. Please verify that you are within the limit of allowed characters (800,000 max)"
}

// Global statics
var gstatics = {}
gstatics.description = 'MS2World.net is the best MapleStory2 fan site to find Guides, Builds, Beats, News and More! Join now our community!';

// Schemas
var userSchema = new mongoose.Schema({
    name: String,
    sid: String,
    date_create: Date,
    date_last_login: Date
});

var guideSchema = new mongoose.Schema({
    sid: String,
    title: String,
    content: String,
    description: String,
    tags: [Object],
    date_create: Date,
    last_edit_date: Date
});

var buildSchema = new mongoose.Schema({
    sid: String,
    title: String,
    type: String,
    description: String,
    data_object: Object,
    class_name: String,
    date_create: Date,
    last_edit_date: Date
});

var newSchema = new mongoose.Schema({
    title: String,
    tag: String,
    url: String,
    img: String,
    date_create: Date
});

var classSchema = new mongoose.Schema({
    name: String,
    img: String
});

var buildTemplateSchema = new mongoose.Schema({
    class_name: String,
    data_object: Object
});

guideSchema.plugin(mongoosePaginate);

// Models
var User_account = mongoose.model('User_account', userSchema);

var Post_guide = mongoose.model('Post_guide ', guideSchema);

var Post_build = mongoose.model('Post_build', buildSchema);

var Ms2_new = mongoose.model('Ms2_new', newSchema);

var Ms2_class = mongoose.model('Ms2_class', classSchema);

var Build_template = mongoose.model('Build_template', buildTemplateSchema);

module.exports = {
    gstatics: gstatics,
    User_account: User_account,
    Post_guide: Post_guide,
    Post_build: Post_build,
    Ms2_new: Ms2_new,
    Ms2_class: Ms2_class,
    Build_template: Build_template,
    sanitize: sanitize,
    steamapi: steamapi,
    es: es
};