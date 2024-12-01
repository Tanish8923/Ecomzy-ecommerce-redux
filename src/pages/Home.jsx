/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

  const API_URL =  process.env.REACT_APP_API_URL;

  const [loader , setLoader] = useState();
  const [products , setproducts] = useState([]);

  async function fetchdata(){
    setLoader(true);
    try {
      
      const res = await fetch(API_URL);
      const data = await res.json();
      setproducts(data);

    } catch (error) {
        toast.error("API Not found");
        setproducts([]);
    }
    setLoader(false)
  }

  useEffect(()=>{
    fetchdata();
  },[])

  return (
    <div className='bg-slate-700 '>
      
      {
        loader ? <Spinner/> : (
          products.length === 0 ?
           (<div className="flex justify-center items-center h-screen text-3xl"> Data Not Found </div>) :
           (<div 
              className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2  space-y-10 space-x-5 min-h-[80vh] mx-auto">
              {products.map((product) =>(<Product key={product.id} product={product}/>))}
            </div>)
        )
      }
      
    </div>
  )
}

export default Home
