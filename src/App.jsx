
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import Form from './Components/Form';
import Signup from './Components/Signup'

function App() {
  return (

 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={< Signup />} />
      <Route path="/form" element={<Form />} />
      
    </Routes>
  
  
  );
}

export default App;
