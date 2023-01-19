import './App.css';
import NavBar from './Components/NavBar';
import ContainerCardItems from "../src/Components/Cards/ContainerCardItems";  
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ContainerCardItems/>}/>
    <Route path='/item/:id' element={<ContainerCardItems/>}/>
    <Route path='/category/:idCategory' element={<ContainerCardItems/>}/>
    </Routes>
    </BrowserRouter>
    
    )}

export default App;
