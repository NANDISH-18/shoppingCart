import React from 'react'
import styles from '../styles/Cart.module.css'
import { useValue } from '../itemContext'


const CartModel = () => {

  const {cart, clear, total, toggle} = useValue()
  // console.log(cart)

  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      <div className={styles.clearButton} onClick={clear}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item) => {
          return (
            <div className={styles.cartCard} key={item.id}>
              <h1>{item.name}</h1>
              <h3>X {item.qty}</h3>
              <h3>X {item.qty * item.price}</h3>
            </div>
          )
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>{total}</div>
      </div>
    </div>
  )
}

export default CartModel