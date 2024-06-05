import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDyeG789elIotE9FbDdfhFnxevpJV6pU8Q",
//   authDomain: "lythinh-wedding.firebaseapp.com",
//   databaseURL:
//     "https://lythinh-wedding-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "lythinh-wedding",
//   storageBucket: "lythinh-wedding.appspot.com",
//   messagingSenderId: "973231423097",
//   appId: "1:973231423097:web:7d8dd9320ee0a6ba2f1ea8",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDXF14xRFRk3rXAyzxz3HJ2G5e9a0Llf7o",
  authDomain: "phongminh-a3fb1.firebaseapp.com",
  databaseURL: "https://phongminh-a3fb1-default-rtdb.firebaseio.com",
  projectId: "phongminh-a3fb1",
  storageBucket: "phongminh-a3fb1.appspot.com",
  messagingSenderId: "678681688865",
  appId: "1:678681688865:web:838773c3ded3deb6c19c60"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
