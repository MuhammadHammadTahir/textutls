import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import React, { useState } from 'react';
import About from './components/About';

import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [dark, setdark] = useState('Enable Blue Dark Monpmde');
  const [greendark, setgreendark] = useState('Enable Green Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({ 
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode('dark');
      setdark('Disable Blue Dark Mode');
      document.body.style.background = "rgb(8 49 90)";
      showAlert("Dark Mode is ON!","success");
      document.title='Texutels - Blue Dark Mode ';
    }
    else
    {
      setMode('light');
      setdark('Enable Blue Dark Mode');
      document.body.style.background = "white";
      showAlert("Dark Mode is OFF!","success");
      document.title='Texutels - Light Mode ';
    }
  }
  const toggleGreenMode=()=>{
    if(mode==="light")
    {
      setMode('dark');
      setgreendark('Disable Green Dark Mode');
      document.body.style.background = "rgb(0 90 90)";
      showAlert("Green Dark Mode is ON!","success");
      document.title='Texutels - Green Dark Mode ';

    }
    else
    {
      setMode('light');
      setgreendark('Enable green Dark Mode');
      document.body.style.background = "white";
      showAlert("Green Dark Mode is OFF!","success");
      document.title='Texutels - Light Mode ';
    }
  }

  return (
  <>
    <Main>
      <Navbar title="Texutels" about="about" mode={mode} toggleTheme={toggleMode} write={dark} writegreen={greendark} toggleGreenMode={toggleGreenMode} />
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route exact path='/home' element={<Textform mode={mode} showAlert={showAlert}/>}/>
          <Route exact path='/about' element={<About />} />
        
        </Routes>
            

          
      </div>
    </Main>
  </>
  );
}

export default App;
