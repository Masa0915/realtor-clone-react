// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBBm4F1LmN7JDahs2Cyf8JdEReUoAcBRo4",
//   authDomain: "realtor-clone-react-6942a.firebaseapp.com",
//   projectId: "realtor-clone-react-6942a",
//   storageBucket: "realtor-clone-react-6942a.appspot.com",
//   messagingSenderId: "506287465692",
//   appId: "1:506287465692:web:cfa56890f53ebebb874019",
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// export const db = getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAopFfSX7edRBpn-4wpoOypWhTYGiT-cB8",
  authDomain: "realtor-clone-react-fb593.firebaseapp.com",
  projectId: "realtor-clone-react-fb593",
  storageBucket: "realtor-clone-react-fb593.appspot.com",
  messagingSenderId: "410491241676",
  appId: "1:410491241676:web:3f0f9aa7de322f78d0ae69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
