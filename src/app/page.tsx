'use client'

import { useEffect, useState } from 'react';


const SavedCounter = () => {
  const [count, setCount] = useState<number>(0);
  const [load, setLoad] = useState<number>(0);
  

  useEffect(() => {   
    const savedCount = localStorage.getItem("savedCount");
    if(savedCount){
            setCount(parseInt(savedCount));
    }
  }, [])
    
  
  useEffect(() => {    
    localStorage.setItem('savedCount', count.toString());      
}, [count]);


  useEffect(() => {
    const calculoWidth = ((count + 10) * 5);
    setLoad(calculoWidth)
  }, [count])

const handleIncrement = () => setCount(prev => prev < 10 ? prev + 1 : prev);    
const handleDecrement = () => setCount(prev => prev > -10 ? prev - 1 : prev);
const handleReset = () => setCount(0);



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Contador com Persistência
        </h1>
        
        <div className="text-center">
          <p className="text-lg mb-2 text-gray-600">Contagem Atual:</p>
          <p className="text-4xl font-bold text-gray-600" style={{color: count < 0 ? 'red' : count > 0 ? 'blue' : 'gray'}}>{count}</p>
        <p ></p>
        </div>



        <div className= "w-full h-2 bg-gray-200 rounded">
          <div style={{width: `${load}%`}} className= "h-2 bg-blue-500 rounded"></div>
          
        </div>
        
        <div className="flex gap-2 justify-center">
          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -1
          </button>
          
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedCounter;
