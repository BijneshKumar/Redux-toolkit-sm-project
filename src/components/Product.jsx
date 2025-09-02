import React from 'react'
import { Products } from '../data'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { ToastContainer, toast ,Bounce} from 'react-toastify'
const Product = () => {
    const dispatch = useDispatch()
    const cartItem = useSelector((state) => state.cart.items)
    // console.log('cart item = ', cartItem)

    const handleAddtoCart = (item) => {
        dispatch(addToCart(item))

        toast.success('Item Added to Cart', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });

    }
    return (
        <div>
            <ToastContainer/>
            <div className="container">
                <div className="row">
                    {
                        Products.map((item) => (
                            <div key={item.id} className='container col-md-4'>

                                <div className="card m-4 bg-dark text-light custom-btn" style={{ width: "18rem" }}>
                                    <img src={item.imgSrc} className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <button className="btn btn-primary mx-3">{item.price.toLocaleString('en')} INR</button>
                                        <button className="btn btn-warning" onClick={() => handleAddtoCart(item)}>Add To Cart</button>

                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Product