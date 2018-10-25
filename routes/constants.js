const express = require("express");
const router = express.Router();
const gstatic = {};
gstatic.public = {
    css: '/css/bootstrap.css',
    js: '/js/bootstrap.js'
};

module.exports = {
    gstatic: gstatic,
    router: router
};