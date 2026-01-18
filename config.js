// config.js
const firebaseConfig = {
  apiKey: "AIzaSyD-U5wOhyMDsiFf7NB4-twMFNnoWCXVXpE",
  authDomain: "login-52331.firebaseapp.com",
  databaseURL: "https://login-52331-default-rtdb.firebaseio.com", // আমি এটি যোগ করেছি
  projectId: "login-52331",
  storageBucket: "login-52331.firebasestorage.app",
  messagingSenderId: "199346485569",
  appId: "1:199346485569:web:69014a90e2031e147609c0"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}