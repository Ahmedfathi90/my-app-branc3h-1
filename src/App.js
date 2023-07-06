import {Route ,Routes } from "react-router-dom";
import Callus from './comp/callus';
import Home from './comp/Home';
const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/callus' element={<Callus/>} />
      </Routes>
      </div>
  );
}

export default App;

