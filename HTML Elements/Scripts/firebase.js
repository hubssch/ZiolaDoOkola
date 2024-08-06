// Importowanie modułów Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import { getDatabase, ref, get } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js';

// Konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDDPSSEaa_FfYE0l_5Tx9OTg0Kt6XUfZ9I",
  authDomain: "zioladookola-6e34c.firebaseapp.com",
  databaseURL: "https://zioladookola-6e34c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zioladookola-6e34c",
  storageBucket: "zioladookola-6e34c.appspot.com",
  messagingSenderId: "597086045944",
  appId: "1:597086045944:web:30b746b0c70da21f0ddd0d"
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get };
