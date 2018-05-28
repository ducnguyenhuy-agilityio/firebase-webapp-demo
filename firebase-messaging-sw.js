importScripts('https://www.gstatic.com/firebasejs/5.0.3/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.3/firebase-messaging.js');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAKfUMyi45BTThTX5OX8UzIRRDWSANUEZA",
  authDomain: "my-project-test-1054.firebaseapp.com",
  databaseURL: "https://my-project-test-1054.firebaseio.com",
  projectId: "my-project-test-1054",
  storageBucket: "",
  messagingSenderId: "44856201718"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
