import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0IqVdcqxgMPKiK8GxpbokhqChDLZVi9M",
  authDomain: "socialapp-4c60f.firebaseapp.com",
  projectId: "socialapp-4c60f",
  storageBucket: "socialapp-4c60f.appspot.com",
  messagingSenderId: "259608151417",
  appId: "1:259608151417:web:89280c8188cbf7fe2fdba8",
  measurementId: "G-FK9XJCS6Y9"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;