import * as React from 'react';
import { getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "app.js";

function accessUserPermissions(id) {
    const docRef = doc(getFirestore(app), "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap;

}

function authenticate(auth, email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);

        const docSnap = accessUserPermissions(user.uid);
        if (docSnap.exists()) {
           
          } else {
            // doc.data() will be undefined in this case
            alert("No such document!");
          }

          window.location.reload();
        
    })
    .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        const message = document.querySelector<HTMLElement>('#login > .message');
        if(message != null){
            if(errorCode === 'auth/invalid-email'
                || errorCode === 'auth/user-disabled'
                || errorCode === 'auth/user-not-found'
                || errorCode === 'auth/wrong-password'){
                message.textContent = "Invalid email or password";
            }
        }
    });
}

function submit(e){
    e.preventDefault();
    const login = document.getElementById('login');
    if(login != null){
        const inputs = login.getElementsByTagName('input');
        const email = inputs[0].value;
        const password = inputs[1].value;
        const auth = getAuth(app);
        authenticate(auth, email, password);
    }
}

export default function Login() {
    return (
        <form id="login" onSubmit={(e) => submit(e)}>
             <input type='email' name='email' placeholder='Email' id='email' required/>
             <input type='password' name='password' placeholder='Password' id='password' required/>
             <p className='message'>&nbsp;</p>
             <button type="submit" className='submit'>Login</button>
         </form>
    );
}