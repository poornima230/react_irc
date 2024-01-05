import React ,{ useContext } from 'react' 
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../asset/cart_cross_icon.png'
const CardItems = ( ) => {
    const {al_product,cartItems,removeFromCart} = useContext(ShopContext);
    return(
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                <div className="cartitems-format">
                    <img src="" alt="" className='carticon-product-icon'/>
                    <p></p>
                    <p></p>
                    <button className='cartitems-quantity'></button>
                    <p></p>
                    <img src={remove_icon} alt=""/>
                </div>
            </div>
        </div>
    )
}