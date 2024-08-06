import React, { useState } from 'react';
import Navbar from './components/navbar';
import Form from './components/form';
import Alert from './components/alert';
import DarkMode from './components/Darkmode'; 

function App() { 
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Lightmode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(4 1 28)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Darkmode";
    }
  };

  const renderPage = () => {
    if (currentPage === "home") {
      return <Form showAlert={showAlert} heading="Enter the text to convert to uppercase" mode={mode} />;
    } else if (currentPage === "about") {
      return <DarkMode />;
    }
  };

  return ( 
    <>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        {renderPage()}
      </div>
    </>
  ); 
} 

export default App;
