import React from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
        const cartItem = useSelector((state)=>state.cart.items)
        const totalPrice = useSelector((state)=> state.cart.totalPrice)
    return (
        <>
            <div className="nav_bar sticky-top ">
                <Link to={'/'} className="left" style={{textDecoration:'none',color:'white'}}>
                    <h3>
                        Redux-Toolkit
                    </h3>
                </Link>
                {/* <div className="middle">

                    <button className="btn btn-warning">Cart items total price = {totalPrice.toLocaleString('en')} INR</button>

                </div> */}
                <Link to={'/cart'} className="right">

                    <button type="button" className="btn btn-primary position-relative">
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>


                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartItem.length}
                        </span>
                    </button>

                </Link>
            </div>
        </>
    )
}

export default Navbar