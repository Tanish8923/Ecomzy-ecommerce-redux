import {React , useState} from 'react';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/slice/authSlice';


const SignUpForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword , setShowConfirmPassword] = useState(false);
    const dispatch = useDispatch();

    const [formData , setFormdata] = useState({
        firstName:"" ,
        lastName:"" ,
        email:"" , 
        password:"" ,
        confirmPassword:""
    })

    function changeHandler(event){
        setFormdata((prevstate) => {
            return{
                ...prevstate , 
                [event.target.name] : event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        dispatch(signUp(formData));        
        navigate("/");
    }

  return (
    <div className='bg-slate-700 h-screen w-screen flex items-center justify-center'>
      <form onSubmit={submitHandler} className='h-auto w-auto outline p-10 rounded-md bg-white opacity-80 mt-16 '>
        
        <div className="flex gap-x-4 mt-4 mb-4 ">
            <label className="w-full">
                <p className="text-[0.875rem] font-medium text-slate-900 mb-1 leading-[1.375rem]">first Name <sup className="text-pink-600">*</sup></p>
                <input
                    required
                    type='text'
                    name='firstName'
                    placeholder='Enter first Name'
                    value={formData.firstName}
                    autoComplete="off"
                    onChange={changeHandler}
                    className="bg-slate-700 text-white rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
            </label>
    
            <label className="w-full">
                <p className="text-[0.875rem] font-medium text-slate-900 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-600">*</sup></p>
                <input
                    required
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    autoComplete="off"
                    value={formData.lastName}
                    onChange={changeHandler}
                    className="bg-slate-700 text-white rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
            </label>
        </div>

        <label className="w-full mt-4 ">
            <p className="text-[0.875rem] font-medium text-slate-900 mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-600">*</sup></p>
            <input
                required
                type='email'
                name='email'
                autoComplete="off"
                placeholder='Enter Email Address'
                value={formData.email}
                onChange={changeHandler}
                className="bg-slate-700 text-white rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
        </label>

        <div className="flex gap-x-4 mt-4 ">
            <label className="w-full relative">
                <p className="text-[0.875rem] font-medium text-slate-900 mb-1 leading-[1.375rem]">Create Password <sup className="text-pink-600">*</sup></p>
                <input
                    required
                    type={ showPassword ? "text" : "password"}
                    name='password'
                    placeholder='Enter Password'
                    autoComplete="off"
                    value={formData.password}
                    onChange={changeHandler}
                    className="bg-slate-700 text-white rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
                <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                </span>
            </label>
    
            <label className="w-full relative">
                <p className="text-[0.875rem] font-medium text-slate-900 mb-1 leading-[1.375rem]">Confirm Password <sup className="text-pink-600">*</sup></p>
                <input
                    required
                    type={ showConfirmPassword ? "text" : "password"}
                    name='confirmPassword'
                    placeholder='Re-Enter Password'
                    autoComplete="off"
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    className="bg-slate-700 text-white rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
                <span onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                </span>
            </label>
        </div>
        <button className="bg-yellow-400 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">Create Accout</button>
        <div className="flex w-full items-center mt-8 gap-x-2">
                <div className="h-[1px] w-full bg-slate-700"></div>
                <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                <div className="h-[1px] w-full bg-slate-700"></div>
        </div>
        <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-4 ">
             <FcGoogle /> Sign up with Google
        </button>
      </form>
    </div>
  )
}

export default SignUpForm