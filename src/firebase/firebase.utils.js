import firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD6wejoa_lQ3jQECUaVtd1UK4gRHLh0lpI",
    authDomain: "omnia-residence.firebaseapp.com",
    databaseURL: "https://omnia-residence.firebaseio.com",
    projectId: "omnia-residence",
    storageBucket: "omnia-residence.appspot.com",
    messagingSenderId: "1093582287080",
    appId: "1:1093582287080:web:4e940fe646cf2166ed995d",
    measurementId: "G-R1NVP4V5RR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;