function Drawer() {
    <div style={{display: 'none'}} className='overlay'>
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
}

export default Drawer;