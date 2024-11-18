// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth"; // Ensure getAuth is imported
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-eSslzKVuTJFXEVno-MF08LtcBrd8gTY",
  authDomain: "trip-connect-75a01.firebaseapp.com",
  projectId: "trip-connect-75a01",
  storageBucket: "trip-connect-75a01.firebasestorage.app",
  messagingSenderId: "1026028098158",
  appId: "1:1026028098158:web:9fec8aa911ec450807cc7f",
  measurementId: "G-876C1JEWH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// Функция для входа пользователя
export const loginUser  = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user; // Возвращает объект пользователя
    } catch (error) {
        throw new Error(error.message); // Обработка ошибок
    }
};

export const registerUser  = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user; // Возвращает объект пользователя
    } catch (error) {
        throw new Error(error.message); // Обработка ошибок
    }
};

export { auth };