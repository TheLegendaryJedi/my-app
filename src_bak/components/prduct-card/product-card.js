import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledProductCard } from "./product-card.styles";
import "./styles.scss";
import Button from "../button/button";

export const ProductCard = (props) => {
  const [onWishList, setOnWishList] = useState(false);
  
  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  const handleNotifyMe = () => {
    console.log("Notified");
  };  
  
  const handleAddToWishList = () => {
    setOnWishList(!onWishList);
    console.log("Added to wish list", onWishList);
  };

  return (
    <>
      <StyledProductCard>
        <div className="product-img">
          <img
            src={props.images[0]}
            alt="product"
          />
        </div>
        <div className="product-body">
          <div className="product-info">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{}</p>
            <p>{}</p>
          </div>
          <hr/>
          <div className="product-actions">
            {
              props.stock > 40 ? 
              <Button onClick={handleAddToCart}>Adicionar ao carrinho</Button> :
              <Button onClick={handleNotifyMe} preset="secondary">Notificar-me</Button>
            }
          </div>
          <div className="product-footer">
              <FontAwesomeIcon onClick={handleAddToWishList} icon={faHeart} className={onWishList ? 'fa-heart--active' : 'fa-heart--disabled'}/>
          </div>
        </div>
      </StyledProductCard>
    </>
  );
};
