import React from 'react'
import { useState } from 'react'
import { addTocardHelper } from '../helpers/CardHelper';
import { useDispatch } from 'react-redux';
import { addCartStart } from '../redux/action/cart.action';

export default function CartItem({ item, cart, user }) {
    let [quantity, setQuantity] = useState(item.quantity);
    const dispatch = useDispatch();

    const increaseQuantity = () => {

        setQuantity(quantity + 1)

        item.quantity = quantity + 1;

        const response =  addTocardHelper(item, cart, user , true)

        dispatch(addCartStart(response))

    }

    const decreaseQuantity = () => {

        setQuantity(quantity - 1)

        item.quantity = quantity - 1;

        const response =  addTocardHelper(item, cart, user , true)

        dispatch(addCartStart(response))
    }

    return (
        <tr>
            <td>
                <div className="media">
                    <div className="d-flex">
                        <img src={item.image} />
                    </div>

                    <div className="media-body">
                        <p>{item.name}</p>
                    </div>
                </div>
            </td>
            <td>
                <h5>${item.final_price}</h5>
            </td>
            <td>
                <div className="product_count">

                    <input type="text" name="qty" id="sst" maxLength="12" value={quantity}
                        className="input-text qty" onChange={(event) => setQuantity(event.target.value)} />

                    <button className="increase items-count" type="button" onClick={increaseQuantity}>
                        <i className="lnr lnr-chevron-up"></i>
                    </button>

                    <button className="reduced items-count" type="button" onClick={decreaseQuantity} >
                        <i className="lnr lnr-chevron-down"></i>
                    </button>
                </div>
            </td>
            <td>
                <h5>${item.final_price * quantity}</h5>
            </td>
        </tr>
    )
}

