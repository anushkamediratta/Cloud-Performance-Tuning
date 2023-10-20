import 'bootstrap/dist/css/bootstrap.min.css';
import BookRide from "./components/BookRide";
import OfferRide from "./components/OfferRide";
import Home from "./components/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from './components/Signup';
const App=()=>{
return <>
<Routes>
    <Route exact path="/" element={<Login/>}></Route>
    <Route exact path="/Home" element={<Home/>}></Route>
    <Route path="/Bookride" element={<BookRide/>}></Route>
    <Route  path='/Signup' element={<Signup/>}></Route>
    <Route path="/OfferRide" element={<OfferRide/>}></Route>
    
</Routes>

</>
}
export default App;