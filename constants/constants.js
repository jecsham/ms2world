const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const chalk = require('chalk');
const sanitize = require('mongo-sanitize');
const mSteamAPI = require('steamapi');
const https = require('https');
const steamapi = new mSteamAPI(process.env.STEAM_KEY);

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
        console.log(chalk.green('MongoDB connected'));
});

// helper functions
const getMessages = async function () {
        let docs;
        let promise = Message.find({}).sort({ ':id': -1 }).limit(3).exec()
        await promise.then(function (elements) {
                docs = elements
        }).catch(function (error) {
                return false;
        });
        return docs
}

const incView = (id, postType) => {
        if (postType === 'guide')
                Post_guide.findOneAndUpdate({ _id: id }, { $inc: { viewCount: 1 } }, () => { });
        else if (postType === 'build')
                Post_build.findOneAndUpdate({ _id: id }, { $inc: { viewCount: 1 } }, () => { });
}

const verifyRecaptcha = (key, callback) => {
        https.get("https://www.google.com/recaptcha/api/siteverify?secret=" + process.env.RECAPTCHA_SECRET + "&response=" + key, function (res) {
                var data = "";
                res.on('data', function (chunk) {
                        data += chunk.toString();
                });
                res.on('end', function () {
                        try {
                                var parsedData = JSON.parse(data);
                                callback(parsedData.success);
                        } catch (e) {
                                callback(false);
                        }
                });
        });
}

// Error strings
const es = {
        internal: "An internal server error has occurred. Please contact an administrator or try later.",
        login: "You must be login.",
        steam_id_match: "User Steam ID don't match. You aren't the post owner.",
        big_content: "The content is too long. Please verify that you are within the limit of allowed characters (800,000 max)",
        short_content: "The content is too short. Please check inputs.",
        recaptcha: "An error with reCAPTCHA has ocurred. Please try again."
}

// title
const title = 'MS2World.net'

// Global
const gstatic = {}
gstatic.description = 'MS2World.net is the best MapleStory2 fan site to find Guides, Builds, News and More!';

// Schemas
const userSchema = new mongoose.Schema({
        name: String,
        sid: String,
        img: String,
        date_create: Date,
        votes: Array,
        reports: Array,
        date_last_login: Date
});

const guideSchema = new mongoose.Schema({
        sid: String,
        title: String,
        author: String,
        content: String,
        description: String,
        tags: String,
        voteCount: { type: Number, default: 0 },
        viewCount: { type: Number, default: 0 },
        votes: Array,
        posts: Array,
        date_create: Date,
        date_last_edit: Date
});

const buildSchema = new mongoose.Schema({
        sid: String,
        title: String,
        author: String,
        type: String,
        description: String,
        data_object: Object,
        class_name: String,
        voteCount: { type: Number, default: 0 },
        viewCount: { type: Number, default: 0 },
        votes: Array,
        posts: Array,
        date_create: Date,
        date_last_edit: Date
});

const newSchema = new mongoose.Schema({
        title: String,
        tag: String,
        url: String,
        img: String,
        date_create: Date
});

const classSchema = new mongoose.Schema({
        name: String,
        img: String
});

const messageSchema = new mongoose.Schema({
        message: String,
        link: String
});

const classTypeSchema = new mongoose.Schema({
        name: String,
});

const buildTemplateSchema = new mongoose.Schema({
        class_name: String,
        data_object: Object
});

const reportReasonSchema = new mongoose.Schema({
        name: String,
})

const reportPostSchema = new mongoose.Schema({
        reason_id: String,
        post_title: String,
        post_type: String,
        post_id: String,
        reporter_sid: String
})

// Indexes
guideSchema.index({ sid: 'text', title: 'text', author: 'text', description: 'text', tags: 'text' })
buildSchema.index({ sid: 'text', title: 'text', author: 'text', description: 'text', type: 'text', class_name: 'text' })

// paginations
guideSchema.plugin(mongoosePaginate);
buildSchema.plugin(mongoosePaginate);
messageSchema.plugin(mongoosePaginate);

// Models
const User_account = mongoose.model('User_account', userSchema);
const Post_guide = mongoose.model('Post_guide ', guideSchema);
const Post_build = mongoose.model('Post_build', buildSchema);
const Ms2_new = mongoose.model('Ms2_new', newSchema);
const Ms2_class = mongoose.model('Ms2_class', classSchema);
const Ms2_classType = mongoose.model('Ms2_classType ', classTypeSchema);
const Build_template = mongoose.model('Build_template', buildTemplateSchema);
const Report_reason = mongoose.model('Report_reason', reportReasonSchema);
const Report_post = mongoose.model('Report_post', reportPostSchema);
const Message = mongoose.model('Message', messageSchema);

module.exports = {
        gstatic: gstatic,
        User_account: User_account,
        Post_guide: Post_guide,
        Post_build: Post_build,
        Ms2_new: Ms2_new,
        Ms2_class: Ms2_class,
        Ms2_classType: Ms2_classType,
        Build_template: Build_template,
        Report_reason: Report_reason,
        Report_post: Report_post,
        sanitize: sanitize,
        steamapi: steamapi,
        incView: incView,
        messages: getMessages,
        title: title,
        verifyRecaptcha: verifyRecaptcha,
        es: es
};