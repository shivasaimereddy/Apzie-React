import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'
import { carouselProducts } from '../actions/productActions'

function ProductCarousel() {

    const dispatch = useDispatch()

    const productCarousel = useSelector(state => state.productCarousel)
    const { loading, error, products } = productCarousel

    useEffect(() => {
        dispatch(carouselProducts())
    }, [dispatch])

    return (loading
        ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <Carousel pause='hover' className='bg-dark'>
                    {products.map(product => (
                        <Carousel.Item key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fluid
                                    rounded />
                                <Carousel.Caption className='carousel.caption'>
                                    <h4>{product.name} (₹{product.price})</h4>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )
    )
}

export default ProductCarousel
