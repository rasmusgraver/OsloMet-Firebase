// Import the functions you need from the SDKs you need
import { initializeApp } from  "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js"  // "firebase/app"
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    setDoc,
} from  "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"  //  "firebase/firestore/lite"

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJfEIvjmKG1do_YOr8HaaLpOwcFR7LNwo",
    authDomain: "oslometdemo.firebaseapp.com",
    projectId: "oslometdemo",
    storageBucket: "oslometdemo.appspot.com",
    messagingSenderId: "305455665366",
    appId: "1:305455665366:web:9a0858ffd497dc55173977",
    measurementId: "G-HTRJR06S6E",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
const db = getFirestore(app)

const bokerCol = collection(db, "boker")
getDocs(bokerCol).then(function (bokerSnapshot) {
    // console.log(bokerSnapshot)
    bokerSnapshot.docs.forEach((bok) => {
        console.log("Bok.id: " + bok.id + " Bok.data(): ", bok.data())
        addToHtml(bok)
    })
})

// const docSnap = await getDoc(doc(db, "boker", "en"));

const bokID = "en"
getDoc(doc(db, "boker", bokID)).then(function (docSnap) {
    if (docSnap.exists()) {
        console.log('Bok med id "' + bokID + '" data: ', docSnap.data())
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!")
    }
})

const bokListeHtml = document.getElementById("bokliste")
function addToHtml(bok) {
    if (bokListeHtml && bok) {
        const li = document.createElement("li")
        li.innerHTML =
            "Bok.id: " + bok.id + " Bok.data(): " + JSON.stringify(bok.data())
        bokListeHtml.appendChild(li)
    }
}
