// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Signin from './Signin';
import Signup from './Signup';

function App() {
  return (
    <div>
      

      <BrowserRouter>
          <Header/>
        <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signin" element = {<Signin/>}/>
        <Route path="/signup" element ={<Signup/>}/>

        </Routes>
            <Footer/>
      </BrowserRouter>



      
    </div>
  );
}

export default App;
