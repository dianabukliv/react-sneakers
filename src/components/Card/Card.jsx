import React from 'react';
import styles from '/src/components/Card/Card.module.scss'

function Card({ onFavorite, title, imageUrl, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price });
    setIsAdded(!isAdded)
  }

    return (
        <div className={styles.card}>
        <div className={styles.favorite}>
          <img src='/src/img/heart-liked.svg' onClick={onFavorite}/>
        </div>
        <img width={133} height={112} src={imageUrl}/>
        <h5>{title}</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
          <span>Ціна:</span>
          <b>{price} грн.</b>
          </div>
            <img 
            className={styles.plus} 
            onClick={onClickPlus} 
            src={ isAdded ? '/src/img/cheked.svg' : '/src/img/plus.svg' }
            alt='plus'/>
        </div>
      </div>
    )
}

export default Card;