import React from 'react'
import './index.scss'
import 'macro-css'
import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  const arr = [
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede',
     price: '12999',
     imageUrl: '/src/img/sneakers/card1.jpg'
    },
    {title: 'Мужские Кроссовки Nike Air Max 270',
    price: '15999',
    imageUrl: '/src/img/sneakers/card2.jpg'
   }
  ]
  return ( <div className='wrapper clear'>
      <Drawer />
      <Header />
    <div className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>Всі кросівки</h1>
        <div className='search-block'>
          <img src='/src/img/search.svg' />
          <input placeholder='Пошук...' />
      </div>
      </div>
    <div className='d-flex'>
      {arr.map((obj) => (
        <Card 
        title={obj.title} 
        price={obj.price} 
        imageUrl={obj.imageUrl}
        onClick={() => console.log(obj)}
        />
  ))}
    </div>

  </div>
  </div>
  )
}

export default App;
