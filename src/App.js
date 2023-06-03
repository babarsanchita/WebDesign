
import './App.css';
// import React from 'react';

import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
// import Alert from'./Components/Alert';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);//whether dark mode is enabled or not

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }
  const toggleMode = ()=>{

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled","success");
      // for shining of app rendering one by one ttile
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 1500);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");

    }

  }
  return (
    //in react router the Switch replaced by Routes and the declaration of the components will be change
    <>
 {/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
  {/* <Routes> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* // ✅ correct */}
{/* <Route exact path="/about" element={<About />} /> */}

         
          {/* <Route exact path="/" element={<TextForm heading="Enter the text Analyze below" mode={mode}>" </TextForm>}> */}
          
         
          {/* </Route> */}
        {/* </Routes> */}




{/* //to complete matching url you have to use exact keyword
ex====/user=--> componentor url 1
/user/home -->--> componentor url 2 then router will et confused so then we have to use exact keyword  */}
<TextForm/>
        </div>
        {/* </Router> */}



    </>
  

   
   
  );
}

export default App;

