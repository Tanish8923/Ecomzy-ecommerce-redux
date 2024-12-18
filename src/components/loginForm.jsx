import {React , useState} from 'react';
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import {Link , useNavigate} from 'react-router-dom'
import { logIn } from '../redux/slice/authSlice';

const LogInForm = ({setIsLoggedIn}) => {

    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword , setShowPassword] = useState(false);

    const [formData , setFormData] = useState({
        email:"" , 
        password:""
    })

    function changeHandler(event){
        setFormData((prevState) => {
            return {
                ...prevState , 
                [event.target.name] : event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        dispatch(logIn(formData));
        navigate("/");
    }

  return (
    <div className='h-screen w-screen bg-slate-700 flex justify-center items-center'>
      <form onSubmit={submitHandler} className="flex flex-col gap-y-4 mt-6 h-auto w-auto outline p-10 rounded-md bg-white opacity-80">
      <label className="w-full">
        <p className="text-[0.875rem] font-medium text-slate-900 mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-600 ">*</sup></p>
        <input
            required
            type='email'
            name='email'
            placeholder='Enter email address'
            onChange={changeHandler}
            value={formData.email}
            className="bg-slate-700 text-white rounded-[0.75rem] w-full p-[12px] text-richblack-5"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] font-medium text-slate-900 mb-1 leading-[1.375rem]">Password <sup className="text-pink-600">*</sup></p>
        <input
            required
            type={ showPassword ? "text" : "password"}
            name='password'
            placeholder='Enter password'
            onChange={changeHandler}
            value={formData.password}
            className="bg-slate-700 text-white rounded-[0.75rem] w-full p-[12px] text-richblack-5"
        />
        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer ">
            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
        </span>
      </label>
      <Link to="#">
            <p className="text-xs mt-[-10px] text-blue-700 max-w-max ml-auto">Forgot Password</p>
      </Link>
      <button className="bg-yellow-400 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">Sign In</button>
      <div className="flex w-full items-center mt-2 gap-x-2">
                <div className="h-[1px] w-full bg-slate-700"></div>
                <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                <div className="h-[1px] w-full bg-slate-700"></div>
      </div>
      <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-1 ">
           <FcGoogle /> Sign up with Google
      </button>
    </form>
    </div>
  )
}

export default LogInForm