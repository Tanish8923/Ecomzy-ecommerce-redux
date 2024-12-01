import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slice/CartSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {

  const cartItems = useSelector((state) => state.cart); 
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();
  

  const dispatch = useDispatch();

  // Check if the product is already in the cart by id
  const isInCart = cartItems.some((cartItem) => cartItem.id === product.id);

  function itemAddHandler(product){
      if(isLoggedIn){
        dispatch(add(product));
        toast.success("Item added to cart");
      }else{
        toast.error("Please log in or sign up to add items to your cart")
        navigate("/signup");
      }
  }

  function itemRemoveHandler(productId){
      dispatch(remove(productId));
      toast.error("Item removed from cart")
  }

  return (
    <div className="flex flex-col items-center justify-between shadow-md shadow-black hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline bg-white">
      <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{product.title}</p>
      
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{product.description.split(' ').slice(0,10).join(" ") + "..."}</p>
      
      <div className="h-[180px]">
        <img src={product.image} alt='product-img' className="h-full w-full"/>
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <p className="text-green-600 font-semibold">{product.price} $</p>
        {
          
         isInCart ? 
            <button 
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in"
              onClick={() => itemRemoveHandler(product.id)}>Remove from cart</button> : 
            <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in"
              onClick={() => itemAddHandler(product)}>Add to cart</button>
        }
      </div>
    </div>
  )
}

export default Product
