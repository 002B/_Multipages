import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Cart.css";

function Cart({ carts, setCarts }) {
  return (
    <div className="cart-container">
      <div className="cart-items-container">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() =>
                    setCarts(carts.filter((c) => c.id !== cart.id))
                  }
                >
                  Remove form cart
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div className="cart-total">
        <h4>
          Item : {carts.length} items - Total Price : $
          {carts
            .reduce((prev, cart) => {
              return prev + cart.price;
            }, 0)
            .toFixed(2)}
        </h4>
      </div>
      <div className="checkout-button">
        <button className="bi bi-credit-card btn btn-warning" >&nbsp; Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
