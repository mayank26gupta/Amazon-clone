import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hidebutton }) {
  const [state, dispatch] = useStateValue();
  const { basket } = state;
  const removeFromBasket = () =>
    //Remove item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });

  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct__image" src={image} alt="" />
      <div className="CheckoutProduct__info">
        <p className="CheckoutProduct__title">{title}</p>
        <p className="CheckoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
          <div className="CheckoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>&#11088;</p>
              ))}
          </div>
        </p>
        {!hidebutton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
