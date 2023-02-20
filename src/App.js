import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [bmode, setbMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleBlue = ()=>{
    if(bmode==='light'){
      setbMode('dark')
      document.body.style.backgroundColor='#433f69'
    }else{
      setbMode('light')
      document.body.style.backgroundColor='white'
    }
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= 'gray'
      showAlert("Dark mode has been Enabled", "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      showAlert("light mode has been enabled", "success")
    }
  }
  return (
     <>
 <Router>
    <Navbar title="Text Utiles" mode={mode} toggleMode={toggleMode} bmode={bmode} toggleBlue={toggleBlue}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route path="/" element={<TextForm heading= "Enter text to analyse" mode={mode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
        {/* <TextForm heading= "Enter text to analyse" mode={mode} showAlert={showAlert}/> */}
    </div>
     </Router>
    </>
  );
}

export default App;
