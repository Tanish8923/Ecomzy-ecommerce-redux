
import {Route , Routes} from 'react-router-dom'

//components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home'
import Cart from './pages/Cart'
import LogIn from './pages/Login';
import SignUp from './pages/Signup';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App bg-slate-900">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
