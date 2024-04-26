import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

// The App functional component is the main component of the React application.
function App() {
  // The useState hook is used to manage the state of the application.
  // In this case, we are using it to track whether the app is in dark mode.
  const [isDarkMode, setIsDarkMode] = useState(false);

  // We create a variable called appClass that will be used to set the class name of the App div.
  // If isDarkMode is true, the class name will be "App dark", otherwise it will be "App light".
  const appClass = isDarkMode ? "App dark" : "App light";

  // The toggleDarkMode function is used to toggle the dark mode state.
  const toggleDarkMode = () => {
    // We use the setIsDarkMode function to set the isDarkMode state to the opposite of its current value.
    setIsDarkMode(!isDarkMode);
  };

  // The App component returns the JSX for the application.
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      {/* We pass the itemData prop to the ShoppingList component. */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
