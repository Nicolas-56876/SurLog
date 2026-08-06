import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAim5VOH2DcI_LfhaXFFSJUjIjecRYHhZk",
  authDomain: "surlog-logistics.firebaseapp.com",
  databaseURL: "https://surlog-logistics-default-rtdb.firebaseio.com",
  projectId: "surlog-logistics",
  storageBucket: "surlog-logistics.firebasestorage.app",
  messagingSenderId: "1029553505961",
  appId: "1:1029553505961:web:8a5cf9af9313aabc958bb8",
  measurementId: "G-FCY3Y8YKY9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
