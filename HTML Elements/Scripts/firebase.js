// firebase.js
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDDPSSEaa_FfYE0l_5Tx9OTg0Kt6XUfZ9I",
  authDomain: "zioladookola-6e34c.firebaseapp.com",
  databaseURL: "https://zioladookola-6e34c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zioladookola-6e34c",
  storageBucket: "zioladookola-6e34c.appspot.com",
  messagingSenderId: "597086045944",
  appId: "1:597086045944:web:30b746b0c70da21f0ddd0d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get };
