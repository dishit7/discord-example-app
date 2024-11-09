import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Add this import

 const firebaseConfig = {
   apiKey: "AIzaSyAI8noR04uZpwR2u7VblWvyHySWn3juG_o",
   authDomain: "temp-9204f.firebaseapp.com",
   databaseURL: "https://temp-9204f-default-rtdb.firebaseio.com", // This URL should be correctly formatted.
   projectId: "temp-9204f",
   storageBucket: "temp-9204f.firebasestorage.app",
   messagingSenderId: "304270759351",
   appId: "1:304270759351:web:fdb7ecce1bb0f9fe7bc432",
   measurementId: "G-X9H0D0FQN5",
 };

// Add the URL mapping for Discord Activities
if (typeof window !== "undefined") {
  firebaseConfig.databaseURL =
    window.location.protocol + "//" + window.location.host;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }; // Export database for use in other components
