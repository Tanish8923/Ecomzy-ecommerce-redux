import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink , Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { logOut } from '../redux/slice/authSlice';
import { reset } from '../redux/slice/CartSlice';
const Navbar = () => {

  const cartItems = useSelector((state) => state.cart)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className='w-full'>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to={"/"} >
          <img src={logo} alt='logo' className="h-14 ml-5"/>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
        </div>
        <div className="flex items-center gap-x-4 text-white">
        {
          isLoggedIn &&
          <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cartItems.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cartItems.length}</span>
                  }
                  
              </div>
          </NavLink>
        }
         {
          isLoggedIn && <Link to={"/"}>
          <button onClick={() => 
          {
              dispatch(reset());
              dispatch(logOut());
              
          }} className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-slate-700">Log out</button>
        </Link>
        }
        {
          !isLoggedIn && <NavLink to="/LogIn">
          <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-slate-700">Log in</button>
          </NavLink>
        }

        {
          !isLoggedIn && <NavLink to="/SignUp">
          <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-slate-700">Sign up</button>
        </NavLink>
        }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
