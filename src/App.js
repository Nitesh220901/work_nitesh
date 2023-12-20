import { createContext, useEffect, useState } from 'react';
import './App.css';
import Item from './components/Item'
import axios from 'axios'


export const AppContext = createContext();

function App() {
  const [data,setData] = useState(null)
  
  const [input,setInput] = useState("jewelery")
const [name ,setName] =  useState("jewelery")
 
  useEffect(()=>{
    const url = `https://fakestoreapi.com/products/category/${name}`
  axios.get(url)
  .then((res)=>{console.log(res.data[0]) 

  
    setData(res.data)
  })
  .catch(err=>console.log(err)) 

},[name,input])
  


  return (
    <div className="App">

    <div className="search">
      <label htmlFor="">search here</label>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/>
      <button className='btn' onClick={()=>setName(input)}>search</button>
      <button className='btn' onClick={()=>setName("jewelery") }>jewelery</button>
      <button className='btn' onClick={()=>setName("electronics")}>electronics</button>
      <button className='btn' onClick={()=>setName("men's clothing")}>men's clothing</button>
      <button className='btn' onClick={()=>setName("women's clothing")}>women's clothing</button>
    </div>
      <h1>{name}</h1>

      <AppContext.Provider value={{data,setData}}>       
            {data ? <Item  /> : <h2>Loading...</h2>}
      </AppContext.Provider>
   
    </div>
  );
}

export default App;
