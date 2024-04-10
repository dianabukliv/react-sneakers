function Header() {
    return (
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
    )
}

export default Header;
