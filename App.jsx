import React, { useState } from 'react';
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const handleAddProduct = (productName) => {
    const existingProduct = cart.find(product => product.name === productName);
    if (existingProduct) {
      existingProduct.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, {
        name: productName,
        quantity: 1
      }]);
    }
  }


  const handleNext = () => {
    console.log(cart);
  }

  return (
    <div>
      <header>
        <h1>Catalogo</h1>
      </header>
      <div className='container'>
        <div className='catalog'>
          <div className='catalog-Header'>
            Catalogo
          </div>
          <div className='Catalogo-Contant'>
            <div className='produts'>
              <div className='produt'>
                produt1
                <button onClick={()=> handleAddProduct('product1')}>+</button>
              </div>
              <div className='produt'>
                produt2
                <button onClick={()=> handleAddProduct('product2')}>+</button>
              </div>
              <div className='produt'>
                produt3
                <button onClick={()=> handleAddProduct('product3')}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className='car'>
          <div className='catalog-Header'>
            carrinho
          </div>
          <ul>
            {cart.map(product => <li key={product.name}>{product.name} x{product.quantity}</li>)}
          </ul>
          <button onClick={handleNext}>NEXT</button>
        </div>
      </div>
    </div>
  )
}

export default App;
