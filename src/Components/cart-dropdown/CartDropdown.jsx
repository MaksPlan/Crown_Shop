import React, {useContext} from 'react';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const {cartItem} = useContext(CartContext);
    const navigate = useNavigate();
    const handleNavigate = () => {
      return navigate('cartCheckOut')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
              {cartItem.map((item) => <CartItem key={item.id} item={item}/>)}
            </div>
              <Button onClick={handleNavigate}>GO TO  CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;