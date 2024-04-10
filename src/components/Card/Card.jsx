import styles from '/src/components/Card/Card.module.scss'

function Card(props) {
    return (
        <div className={styles.card}>
        <div className={styles.favorite}>
          <img src='/src/img/heart-liked.svg'/>
        </div>
        <img width={133} height={112} src={props.imageUrl}/>
        <h5>{props.title}</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
          <span>Ціна:</span>
          <b>{props.price} грн.</b>
          </div>
          <button className="button" onClick={props.onClick}>
            <img width={11} height={11} src='/src/img/plus.svg' alt='plus'/>
          </button>
        </div>
      </div>
    )
}

export default Card;