var profile = require("./profile.js"); //.js is not necessary


var users = process.argv.slice(2);

users.forEach(profile.get);
