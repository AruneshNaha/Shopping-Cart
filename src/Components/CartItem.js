import React, {} from "react"
import {
    Card,
    CardImg,
    CardText,
    CardTitle,
    Button,
    CardBody
} from 'reactstrap'

const CardItem = ({product, addInCart}) => {
    return (
        <Card className="mt-2 mb-1">
            <CardImg
                top
                height="250px"
                width="100%"
                src={product.smallImage}
            />
            <CardBody
                className="text-center">
                    <CardTitle>{product.productName}</CardTitle>
                    <CardText className="secondary">Price: Rs. {product.productprice}</CardText>
                    <Button
                        color="success"
                        onClick={()=> addInCart(product)}
                    >Buy now</Button>
                </CardBody>
        </Card>
    )
}

export default CardItem