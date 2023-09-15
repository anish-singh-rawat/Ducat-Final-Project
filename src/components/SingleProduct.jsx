import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { currentUser } from '../helpers/UserHelper';
import { addTocardHelper } from '../helpers/CardHelper';
import { addCartStart } from '../redux/action/cart.action';

export default function SingleProduct({product}) {

    const cart = useSelector(state => state.cart.currentCart)

    const users = useSelector(state => state.user.users);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const addToCart =()=>{

        const user =   currentUser(users)
        if (! user) {
            navigate('/login')
        }

        let newCart =    addTocardHelper(product, cart, user);
        dispatch(addCartStart(newCart))
    }

    return (
        <div className="single-product">
            <div className="product-img">

                <img  className="card-img"
                 src={product.image} 
                 alt={product.name} 
                 style={{ height : "250px", width : "250px"}} />

                <div className="p_icon">
                    <Link to={`/product-detail/${product.id}`}>
                        <i className="ti-eye"></i>
                    </Link>
                    <Link to=''>
                        <i className="ti-heart"></i>
                    </Link>
                    <Link to="">
                        <i className="ti-shopping-cart" onClick={addToCart}></i>
                    </Link>
                </div>
            </div>
            <div className="product-btm">
                <a href="#" className="d-block">
                    <h4> {product.name} </h4>
                </a>
                <div className="mt-3">
                    <span className="mr-4">{ product.final_price} ₹ </span>
                    <del style={{fontWeight : "bold"}}> {product.market_price} ₹ </del>
                </div>
            </div>
        </div>
    )
}
