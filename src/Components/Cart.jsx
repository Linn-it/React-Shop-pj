import React from 'react'

const Cart = ({cart,setShowCart,qtyBtn,delCart}) => {
    const total = cart.reduce((pv,cv)=> pv + cv.cost,0)
  return (
    <div className='fixed-top w-100 vh-100 bg-dark-05'>
      <div className='row p-3 vh-100 justify-content-end'>
        <div className="col-9 col-md-6 col-lg-4">
            <div className='bg-white w-100 h-100 p-3 rounded-3 position-relative'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className='mb-0'><i className='bi bi-cart4'></i> Shop Cart : <span className='badge bg-info py-2 px-3'>{cart.length}</span></h4>
                    <span onClick={_=> setShowCart(false)}><i className='bi bi-x-lg cross-sign fs-4'></i></span>
                </div>
                <hr />
                {cart.map(ItemCart => <div key={ItemCart.id} className='border mb-3 border-dark p-3 rounded-3 position-relative'>
                    <img src={ItemCart.product.image} className='cart-img' height={50} alt="" />
                    <div className='d-flex d-none d-md-block'>
                        <span onClick={_=>delCart(ItemCart.product.id)} className='cross-sign-cart ms-auto badge bg-danger p-1 rounded-circle text-white'><i className='bi bi-x-lg'></i></span>
                    </div>
                    <div className='d-flex d-block d-md-none'>
                        <span onClick={_=>delCart(ItemCart.product.id)} className='cross-sign-cart-phone ms-auto badge bg-danger p-1 rounded-circle text-white'><i className='bi bi-x-lg'></i></span>
                    </div>
                    <p className='text-truncate my-2'>{ItemCart.product.title}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='small fw-bold'>$ {ItemCart.product.price * ItemCart.quantity}</span>
                        <div className='input-group' style={{width : '100px'}}>
                            <button onClick={_=>qtyBtn(ItemCart.product.id,'decrease')} className='btn btn-sm btn-info'><i className='bi bi-dash'></i></button>
                            <input onChange={_=> x} value={ItemCart.quantity} type="text" className='form-control border border-info text-center form-control-sm bg-info'/>
                            <button onClick={_=>qtyBtn(ItemCart.product.id,'increase')} className='btn btn-sm btn-info'><i className='bi bi-plus'></i></button>
                        </div>
                    </div>
                </div>)}
                {cart.length > 0 && <div className='d-flex justify-content-between border-top w-100 p-3 position-absolute start-0 bottom-0'>
                    <h4 className='mb-0'>Total :</h4>
                    <h4 className='mb-0'>$ {total}</h4>
                </div>}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
