import { useEffect, useState } from "react";
import Button from "../button/button";
import { CardContainer } from "./product-card.styles";
import { Link } from "react-router-dom";

// conditional rendering -> quando temos uma condição que define a renderização entre 2 elementos (ternário) ln20
// ou define se um certo elemento é renderizado ln26

const ProductCard = (props) => {
  const { id, title, description, image, price, stock, setPopupProperties } = props;
  // title; description; image; price

  // [value, setter] = useState()
  const [onWishlist, toggleWishlist] = useState(false); // reatividade

  function addToCart() {
    setPopupProperties({
      title: "Success",
      description: "Added to cart!",
      type: "success",
    });
    console.log("Adicionei ao carrinho");
  }

  function notifyMe() {
    setPopupProperties({
      title: "Notify me",
      description: "Write your email!",
      type: "notify",
    });
    console.log("Notificar-me sobre o stock");
  }

  function addToWishlist() {
    toggleWishlist(!onWishlist);
    /*  setPopupProperties({
      title: "Success",
      description: "Added to your wishlist!",
      type: "success",
    }); */
  }

  useEffect(() => {
    console.log("Wishlisht stauts", onWishlist);
  }, [onWishlist]);

  return (
    <CardContainer>
      <h2>{title}</h2>
      <figure className="card__img--container">
        <img src={image} alt="" />
      </figure>
      <p>{description}</p>
      <p>{price}</p>

      <div className="card-actions">
        {stock > 40 ? (
          <Button onClick={addToCart}>Adicionar ao carrinho</Button>
        ) : (
          <Button onClick={notifyMe}>Notificar-me</Button>
        )}
        <Button
          onClick={() => toggleWishlist(!onWishlist)}
          preset={onWishlist ? "secondary" : "primary"}
        >
          {onWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </Button>

        <Link to={`/products/${id}`} style={{textAlign: 'center'}}>Ver mais</Link>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
