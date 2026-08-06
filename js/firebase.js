// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAim5VOH2DcI_LfhaXFFSJUjIjecRYHhZk",
  authDomain: "surlog-logistics.firebaseapp.com",
  projectId: "surlog-logistics",
  storageBucket: "surlog-logistics.firebasestorage.app",
  messagingSenderId: "1029553505961",
  appId: "1:1029553505961:web:8a5cf9af9313aabc958bb8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

// Firestore
const db = getFirestore(app);

// Exportar
export { auth, db };
