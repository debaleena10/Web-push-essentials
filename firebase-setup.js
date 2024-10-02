import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";

window.firebaseUtils = {
  getMessaging,
  getToken,
  onMessage,
  initializeApp,
};

window.firebaseUtils.initializeFirebase = function(config) {
  return initializeApp(config);
};

console.log("FirebaseUtils is available on window:", window.firebaseUtils);
