import React from 'react'
import './index.scss'
import 'macro-css'
import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://661b95e465444945d04fd073.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    })
  })
const onAddToCart = (obj) => {
  setCartItems(prev => [...prev, obj]);
}
  return (
    <div className='wrapper clear'>
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)}/> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Всі кросівки</h1>
          <div className='search-block'>
            <img src='/src/img/search.svg' />
            <input placeholder='Пошук...' />
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {items.map((item, index) => (
            <Card
              key={index} 
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

