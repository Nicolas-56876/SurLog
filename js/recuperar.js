import { auth } from "./firebase.js";

import {
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const formulario = document.getElementById("formRecuperacion");

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const correo = document.getElementById("correo").value.trim();

    try {

        await sendPasswordResetEmail(auth, correo);

        alert("✅ Se envió un enlace para restablecer tu contraseña. Revisa tu correo.");

        formulario.reset();

    } catch (error) {

        console.error(error);

        switch (error.code) {

            case "auth/user-not-found":
                alert("No existe una cuenta con ese correo.");
                break;

            case "auth/invalid-email":
                alert("El correo electrónico no es válido.");
                break;

            case "auth/too-many-requests":
                alert("Demasiados intentos. Inténtalo más tarde.");
                break;

            default:
                alert("Ocurrió un error: " + error.message);

        }

    }

});
