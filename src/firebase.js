import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBB0UQ2zesShZEsEM689L1T14uR9Ydndrg",
  authDomain: "clone-5cf51.firebaseapp.com",
  projectId: "clone-5cf51",
  storageBucket: "clone-5cf51.appspot.com",
  messagingSenderId: "219528357656",
  appId: "1:219528357656:web:c54c8b75744dd90c14606d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // firestore:- (realtime database in firebase)

const auth = firebase.auth();

export { db, auth };
