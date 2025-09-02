import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
   const dispatch = useDispatch()
    const cartItem = useSelector((state) => state.cart.items)
            const totalPrice = useSelector((state)=> state.cart.totalPrice)
    
    return (
        <>
            <div className="container my-4 text-center" style={{ width: '700px' }}>
                {
                    cartItem.map((item, index) => (
                        <div key={index} className="card mb-3 bg-dark text-light" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item.imgSrc} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <button className="btn btn-primary">{item.price.toLocaleString('en')} INR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                 
                 {
                    cartItem.length === 0 ? <h1 className='my-5'>Your Cart is Empty</h1> :                 <h3 className='my-4'>Cart Item Total Price :  {totalPrice.toLocaleString('en')} INR</h3>

                 }

                {
                    cartItem.length === 0 ? <Link to={'/'}><button className='btn btn-warning'>continue shopping</button></Link> :                 <button onClick={()=>dispatch(clearCart())} className="btn btn-warning">Clear cart</button>

                }

            </div>
        </>
    )
}

export default Cart