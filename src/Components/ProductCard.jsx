import React from 'react'

const ProductCard = ({list,addCart,cart}) => {
    const toggleAddCart = cart.find(ItemCart => ItemCart.product.id === list.id);
  return (
    <div className='card border-dark box-shadow'>
        <div className="card-body">
            <img src={list.image} height={90} alt="" />
            <p className='my-3 text-truncate'>{list.title}</p>
            <div className='d-flex justify-content-between align-items-center'>
                <span className='small fw-bold'>$ {list.price}</span>
                {
                    toggleAddCart ? <button onClick={_=> addCart(list.id,1)} disabled={toggleAddCart} className='btn btn-dark btn-sm'><i className='bi bi-cart-check me-2'></i>Added</button> :
                    <button onClick={_=> addCart(list.id,1)} className='btn btn-dark btn-sm'><i className='bi bi-cart-plus me-2'></i>Add Cart</button>
                }
            </div>
        </div>
    </div>
  )
}

export default ProductCard
