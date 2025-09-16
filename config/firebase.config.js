const Firebase = require('firebase-admin');
const serviceAccount = require('../drive-3cdfa-firebase-adminsdk-fbsvc-0d80b03fee.json');
const firebase = Firebase.initializeApp({
  credential: Firebase.credential.cert(serviceAccount),
  storageBucket: "drive-3cdfa.appspot.com"
});

module.exports = Firebase;