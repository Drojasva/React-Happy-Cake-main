import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Contact} from "./views/Contact.jsx";
import cakeLogo from "./assets/android-chrome-192x192.png"
import {Footer} from "./components/Footer";
import {Home} from "./views/Home";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home logo={cakeLogo}/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
