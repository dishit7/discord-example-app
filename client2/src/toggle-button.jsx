import { useState, useEffect } from "react";
import { database } from "./firebase-config";
import { ref, set, onValue } from "firebase/database";

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  // Set up the listener for changes in Firebase Realtime Database
  useEffect(() => {
    const toggleRef = ref(database, "toggleState");
    console.log("Setting up database listener");

    // Listen for changes in the toggleState from Firebase
    onValue(toggleRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Received data from Firebase:", data);
      setIsToggled(!!data); // Convert the data to a boolean (true or false)
    });

    // Clean up the listener when the component is unmounted
    return () => {
      console.log("Cleaning up database listener");
    };
  }, []);

  // Handle the button click to toggle the state in Firebase
  const handleToggle = async () => {
    try {
      console.log("Current toggle state:", isToggled);
      const toggleRef = ref(database, "toggleState");
      const newValue = !isToggled;
      console.log("Attempting to set new value:", newValue);

      // Update Firebase with the new value
      await set(toggleRef, newValue);
      console.log("Successfully updated value in Firebase");
    } catch (error) {
      console.error("Detailed error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>
        Toggle State: {isToggled ? "ON" : "OFF"}
      </button>
    </div>
  );
}
