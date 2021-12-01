import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductsScreen = ({ match }) => {
     
    const product=products.find((p)=>p._id === parseInt(match.params.id))

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} />
                </Col>
                <Col>
                </Col>
            </Row>
            
        </>
    )
}

export default ProductsScreen
