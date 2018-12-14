/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// Some details about the site
exports.siteName = `Portal Ortodox`;
exports.alternateName = `Portal Ortodox | Calendar Ortodox, Psalirea, Ceaslovul, Acatiste și alte Rugăciuni`;
exports.siteShortName = `Portal Ortodox`;
exports.siteDescription = `Calendar ortodox, Când se fac nunți în anii 2018, 2019, Rugăciuni, Paraclisul Maicii Domnului, Psaltirea, Ceaslovul și alte Rugăciuni`;
exports.siteBgColor = `#ffeebb`;
exports.twitter = ``;

exports.siteSocialMediaGooglePlus = ``;
exports.siteSocialMediaFacebook = ``;
exports.siteSocialMediaInstagram = ``;
exports.siteSocialMediaTwitter = ``;


exports.copyrightMailAddress = `copyright@deepmma.com`;
exports.infoMailAddress = `info@deepmma.com`;
exports.siteUrl = `https://calendar-ortodox.herokuapp.com` // make sure you change to https://
exports.siteCanonical = `https://calendar-ortodox.herokuapp.com` // make sure you change to https://
exports.siteLogo = `https://calendar-ortodox.herokuapp.com/img/brand/logo.svg` // make sure you change to https://


// exports.siteUrl = `http://localhost:3333` // make sure you change to https://
// exports.siteCanonical = `http://localhost:3333` // make sure you change to https://
// exports.siteLogo = `http://localhost:3333/img/brand/logo.svg` // make sure you change to https://


exports.siteTitle = `Portalul Ortodox`;


exports.googleVerification = 'RtYyRAs5mDDbwbloX7kCW-uZgnSjYLJbmL-81IejrO8'