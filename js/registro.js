import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    try{

        const usuario = await createUserWithEmailAndPassword(auth, correo, password);

        await setDoc(doc(db,"usuarios",usuario.user.uid),{

            nombre: nombre,
            correo: correo,
            fechaRegistro: new Date()

        });

        alert("Cuenta creada correctamente");

        window.location.href="login.html";

    }catch(error){

        alert(error.message);

    }

});
