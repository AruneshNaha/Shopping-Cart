import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import {Container, Row, Col, Card} from 'reactstrap'
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

function App() {

  const [cartitem, setCartitem] = useState([])

  const addInCart = item => {
    const isAlreadyAdded = cartitem.findIndex(function(array){
      return array.id === item.id
    })
    if(isAlreadyAdded !== -1){
        toast("Already Added in cart", {
          type:"error"
        })
        return
    }
    setCartitem([...cartitem, item])
  }

  const buynow = () => {
    setCartitem([])

    toast("Purchase complete!", {
      type: "success"
    })
  }

  const removeitem = item => {
    setCartitem(cartitem.filter(singleitem => singleitem.id !== item.id))
  }

  return (
    <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart}></BuyPage>
        </Col>
        <Col md="4">
          <Cart cartItem={cartitem} removeItem={removeitem} buyNow={buynow}></Cart>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
