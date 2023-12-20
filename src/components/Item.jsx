import React, { useContext } from 'react'
import { useState } from 'react';
import { AppContext } from '../App'


const Item = () => {
  const { data } = useContext(AppContext)
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [wish, setWish] = useState(null)

  const setItem = (id) => {
    console.log(id)
    setWish(id)

  }
  const handleClick = () => {
    console.log("Hlo")

  }

  return (
    <div className="item">

        {data.map((product => (
      <div key={product.id} className="item-list">
          <li  onMouseEnter={()=>setHoveredProduct(product)} onMouseLeave={()=>setHoveredProduct(null)}>
            <img className="img" src={product.image} alt="image" />
            <h1 className="title">{product.title}</h1>
            <h2 className="price">pay ${product.price}</h2>


            <div className='btn-wrap'>
              <button className={wish===product.id ? "btn-redwish" : "btn-wish"} onClick={()=>{
                wish !== product.id ?
                setItem(product.id) : setItem(null)}} >wishlist</button>
            </div>
            {hoveredProduct && hoveredProduct.id === product.id && (
            <button className='btn-click' onClick={handleClick} >view Product</button>
            )}

            {hoveredProduct && hoveredProduct.id === product.id && (
              <p>{product.description}</p>

            )}


           
          </li>
          </div>

        )))}
    </div>
  )
}

export default Item

