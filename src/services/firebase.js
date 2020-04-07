import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA7VTiQnx69V3DFLsMNaePuUfzSG8qWaNE",
    authDomain: "stay-connected-66c46.firebaseapp.com",
    databaseURL: "https://stay-connected-66c46.firebaseio.com",
    projectId: "stay-connected-66c46",
    storageBucket: "stay-connected-66c46.appspot.com",
    messagingSenderId: "775796168715",
    appId: "1:775796168715:web:04decb50c7634491c30f0e",
    measurementId: "G-PHET1HX1ZM"
  };
 
firebase.initializeApp(config);

export const auth = firebase.auth
export const db = firebase.database()
