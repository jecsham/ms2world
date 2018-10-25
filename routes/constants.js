const express = require("express");
const router = express.Router();
const gstatic = {};
gstatic.public = {
    css: '/css/bootstrap.css',
    mdi: 'https://cdn.materialdesignicons.com/2.8.94/css/materialdesignicons.min.css',
    js: '/js/bootstrap.js'
};

module.exports = {
    gstatic: gstatic,
    router: router
};