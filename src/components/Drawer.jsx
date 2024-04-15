function Drawer({ onClose, items = [] }) {
  return (
    <div  className='overlay'>
    <div className='drawer'>
      <h2 className='d-flex justify-between mb-30 '>Корзина{' '}
      <img onClick={onClose} className='removeBtn cu-p' src='/src/img/btn-remove.svg'/>
      </h2>

        <div className='items'>
          {items.map((obj) => (
          <div className='cartItem d-flex align-center mb-20'>
            <div style={{ backgroundImage: `url(${obj.imageUrl})`}}
            className="cartItemImg"></div>
      <div className='mr-20 flex'>
        <p className='mb-5'>{obj.title}</p>
        <b>{obj.price} грн.</b>
      </div>
      <img className='removeBtn' src='/src/img/btn-remove.svg'/>
          </div>
          ))}
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
  )
}

export default Drawer;