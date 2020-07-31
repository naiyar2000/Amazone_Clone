import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZmJqSaJbWmAVJFdvGMdgkiNJtfjOmHfI",
    authDomain: "amzoneclone.firebaseapp.com",
    databaseURL: "https://amzoneclone.firebaseio.com",
    projectId: "amzoneclone",
    storageBucket: "amzoneclone.appspot.com",
    messagingSenderId: "568837059380",
    appId: "1:568837059380:web:349d00f59e345683292b61",
    measurementId: "G-3512HG1PPZ"
});

// const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };