import React from 'react'
import './index.scss'
import 'macro-css'

function App() {
  return <div className='wrapper clear'>
    <header className='d-flex justify-between align-center p-40'>
      <div className='d-flex align-center'>
        <img width={40} height={40} src='/src/img/logo.png' />
        <div>
          <h3 className='text-uppercase'>React Sneakers</h3>
          <p>Магазин найкращих кросівок</p>
        </div>
      </div>
      <ul className='d-flex'>
        <li className='mr-30'>
        <img width={18} height={18} src='/src/img/cart.svg' />
            <span>1205 грн.</span>
        </li>
        <li>
        <img width={18} height={18} src='/src/img/user.svg' />
            <span>1Профіль</span>
        </li>
      </ul>
    </header>
    <div className='content p-40'>
      <h1 className='mb-40'>Всі кросівки</h1>
    <div className='d-flex'>
    <div className='card'>
      <img width={133} height={112} src='/src/img/sneakers/card1.jpg'/>
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
        <span>Ціна:</span>
        <b>12 999 грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src='/src/img/plus.svg' alt='plus'/>
        </button>
      </div>
    </div>
    <div className='card'>
      <img width={133} height={112} src='/src/img/sneakers/card2.jpg'/>
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className='d-flex justify-between align-items'>
        <div className='d-flex flex-column'>
        <span>Ціна:</span>
        <b>12 999 грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src='/src/img/plus.svg' alt='plus'/>
        </button>
      </div>
    </div>
    <div className='card'>
      <img width={133} height={112} src='/src/img/sneakers/card3.jpg'/>
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
        <span>Ціна:</span>
        <b>12 999 грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src='/src/img/plus.svg' alt='plus'/>
        </button>
      </div>
    </div>
    <div className='card'>
      <img width={133} height={112} src='/src/img/sneakers/card4.jpg'/>
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
        <span>Ціна:</span>
        <b>12 999 грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src='/src/img/plus.svg' alt='plus'/>
        </button>
      </div>
    </div>
    </div>

  </div>
  </div>
}

export default App
