import React from "react"
import Login from './Login';
import {Routes,Route} from 'react-router-dom';
import SignIn from "./SignIn";

const App=()=>{
  return(
    <>
    <div className="contain">
      <div className="img"></div>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/sign" element={<SignIn/>} />
    </Routes>

    </div>

    </>
  )
}
export default App;