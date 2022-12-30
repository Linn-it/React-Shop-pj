import React, { useState } from 'react'
import Cart from './Cart'

const Navbar = ({cart,qtyBtn,delCart}) => {
    const [showCart,setShowCart] = useState(false);
  return (
    <>
        <nav className='d-flex justify-content-between align-items-center border border-dark p-3 rounded-3'>
            <h3 className='mb-0 logo'>SHOP</h3>
            <div>
                <button className='btn btn-outline-dark me-2'><i className='bi bi-search'></i></button>
                <button onClick={_=>setShowCart(true)} className='btn btn-outline-dark position-relative'><i className='bi bi-bag'></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cart.length}</span>
                </button>
            </div>
        </nav>
        {showCart && <Cart cart={cart} qtyBtn={qtyBtn} delCart={delCart} setShowCart={setShowCart}/>}
    </>
  )
}

export default Navbar
