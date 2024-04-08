import React from 'react'
import './index.scss'
import 'macro-css'

function App() {
  return <div className='wrapper clear'>
    <div className='overlay'>
      <div className='drawer'>
        <h2 className='d-flex justify-between mb-30 '>Корзина
        <img className='removeBtn cu-p' src='/src/img/btn-remove.svg'/></h2>
<div className='items'>
<div className='cartItem d-flex align-center mb-20'>
            <img src='/src/img/sneakers/card1.jpg' className="cartItemImg"/>
        <div className='mr-20 flex'>
          <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 грн.</b>
        </div>
        <img className='removeBtn' src='/src/img/btn-remove.svg'/>
        </div>
        <div className='cartItem d-flex align-center mb-20'>
            <img src='/src/img/sneakers/card1.jpg' className="cartItemImg"/>
        <div className='mr-20 flex'>
          <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 грн.</b>
        </div>
        <img className='removeBtn' src='/src/img/btn-remove.svg'/>
        </div>
</div>
<div className='cartTotalBlock'>
<ul c>
  <li >
    <span>Всього:</span>
    <div></div>
    <b>21 456 грн.</b>
  </li>
  <li className='d-flex'>
    <span>Податок 5%:</span>
    <div></div>
    <b>1045 грн.</b>
  </li>
</ul>
<button className='greenButton'>Оформити замовлення
  <img src="/src/img/arrow.svg" />
</button>
</div>
      </div>
    </div>
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
            <span>Профіль</span>
        </li>
      </ul>
    </header>
    <div className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>Всі кросівки</h1>
        <div className='search-block'>
          <img src='/src/img/search.svg' />
          <input placeholder='Пошук...' />
      </div>
      </div>
    <div className='d-flex'>
    <div className='card'>
      <div>
        <img src='/src/img/heart-liked.svg'/>
      </div>
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
      <div className='favorite'>
        <img src='/src/img/heart-unliked.svg'/>
        </div>  
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
