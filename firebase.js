import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8kvbIiQrSoHJrv5al6ui9yeClgWDv4Is",
  authDomain: "bootit-1726c.firebaseapp.com",
  projectId: "bootit-1726c",
  storageBucket: "bootit-1726c.firebasestorage.app",
  messagingSenderId: "471918188955",
  appId: "1:471918188955:web:2711c44ac20733917a293e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export { app };
