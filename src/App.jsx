import Chatbot from "./components/ChatBot";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
 const [darkMode, setDarkMode] = useState(true);

  return(
    <>
    <div className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Chatbot />
    </div>
    </>
  ) 
}

export default App;