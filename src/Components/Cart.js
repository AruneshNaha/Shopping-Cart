import React from 'react'
import {
    Container, 
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Row, Col
} from 'reactstrap'

export default function Cart({cartItem, removeItem, buyNow}) {
    let amount = 0
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productprice)
    })
    return (
        <Container fluid>
            <h1 className="text-success">
                Your cart
            </h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img
                                    height={80}
                                    src={item.tinyImage}/>
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>Price:- {item.productprice}</span>
                                <Button color="danger" onClick={() => removeItem(item)}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Grand total
                        </CardHeader>
                        <CardBody>Your amount for {cartItem.length} products is: Rs. {amount}</CardBody>
                        <CardFooter><Button className="success" onClick={buyNow}>Checkout!</Button></CardFooter>
                    </Card>
                ):(
                    <h1 className="text-warning">Cart is empty</h1>
                )
            }
        </Container>
    )
}
