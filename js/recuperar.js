// recuperacion.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.firebasestorage.app",
  messagingSenderId: "XXXXXXXX",
  appId: "XXXXXXXX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Botón de recuperación
const btnRecuperar = document.getElementById("btnRecuperar");

btnRecuperar.addEventListener("click", () => {
  const correo = document.getElementById("correo").value.trim();

  if (correo === "") {
    alert("Ingresa tu correo electrónico.");
    return;
  }

  sendPasswordResetEmail(auth, correo)
    .then(() => {
      alert("Se envió un correo para restablecer tu contraseña.");
    })
    .catch((error) => {
      console.error(error);

      switch (error.code) {
        case "auth/user-not-found":
          alert("No existe una cuenta con ese correo.");
          break;

        case "auth/invalid-email":
          alert("El correo electrónico no es válido.");
          break;

        default:
          alert("Ocurrió un error: " + error.message);
      }
    });
});
