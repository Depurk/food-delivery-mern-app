import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJEm6rqFICV-1cvR8p64n8XZ3O3x3It8o",
  authDomain: "food-delivery-mern-app.firebaseapp.com",
  databaseURL: "https://food-delivery-mern-app-default-rtdb.firebaseio.com",
  projectId: "food-delivery-mern-app",
  storageBucket: "food-delivery-mern-app.appspot.com",
  messagingSenderId: "262247639540",
  appId: "1:262247639540:web:29a8aec23cc125013bb1a1",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
