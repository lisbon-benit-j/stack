const admin = require("firebase-admin");

// TEMPORARY INIT (no service account)
if (!admin.apps.length) {
  admin.initializeApp();
}

module.exports = admin;
