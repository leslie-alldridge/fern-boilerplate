import firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref("t2");
export const featuresRef = databaseRef;
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
