import React, { useState } from 'react'
import productList from '../product'
import Navbar from './Navbar'
import ProductCard from './ProductCard'

const Shop = () => {

    const [lists,setList] = useState(productList);

    const [cart,setCart] = useState([]);

    const addCart = (id,quantity) =>{
        const currentItem = lists.find(list => list.id === id)
        const newCart = {
            id : Date.now(),
            product : currentItem,
            quantity,
            cost : currentItem.price * quantity,
        }
        setCart([...cart,newCart])
    }
    // console.log(cart);

    const qtyBtn = (id,value) =>{
        if(value === 'increase'){
            setCart(cart.map(ItemCard => {
                if(ItemCard.product.id === id){
                    ItemCard.quantity += 1;
                    ItemCard.cost = ItemCard.quantity * ItemCard.product.price;
                }
                return ItemCard;
            }))
        }else if(value === 'decrease'){
            setCart(cart.map(ItemCard => {
                if(ItemCard.product.id === id && ItemCard.quantity > 1){
                    ItemCard.quantity -= 1;
                    ItemCard.cost = ItemCard.quantity * ItemCard.product.price;
                }
                return ItemCard;
            }))
        }
    }

    const delCart = id =>{
        setCart(cart.filter(ItemCard => ItemCard.product.id !== id))
    }

  return (
    <>
        <div className="container">
            <div className="row my-4 g-3">
                <div className="col-12">
                    <Navbar cart={cart} qtyBtn={qtyBtn} delCart={delCart}/>
                </div>
                {
                    lists.map(list => <div key={list.id} className="col-12 col-md-4">
                    <ProductCard addCart={addCart} cart={cart} list={list}/>
                    </div>)
                }
            </div>
        </div>
    </>
  )
}

export default Shop