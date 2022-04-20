var admin = require("firebase-admin");

var serviceAccount = require("./kanaswap-notify-demo-firebase-adminsdk-xgi6b-60c8f93ea8.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kanaswap-notify-demo-default-rtdb.firebaseio.com"
})

module.exports.admin = admin