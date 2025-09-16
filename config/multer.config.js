const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require("./firebase.config");
const serviceAccount = require("../drive-3cdfa-firebase-adminsdk-fbsvc-0d80b03fee.json")
const storage = firebaseStorage({
    credentials:firebase.credential.cert(serviceAccount),
    bucketName: "drive-3cdfa.appspot.com"
})

const upload = multer({
    storage: storage,
})

module.exports = upload;