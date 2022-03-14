import React from "react";
import { Link } from "react-router-dom";

type ItemProps = {
  title: string;
  price: number;
  img: string;
  link: string;
  warranty: string;
};

function Item(props: ItemProps) {
  console.log("render Item");

  return (
    <>
      <div className="card result-item">
        <img src={props.img} alt="item" className="card__img" />

        <div className="card__data">
          <h4 className="result-item-title">Título: {props.title}</h4>

          <p className="result-item-sold-quantity">
            <span className="sold-quantity">{props.warranty}</span>
          </p>

          <p className="result-item-price">Precio: ${props.price}</p>

          <p className="result-item-stock">
            <a className="stock-counter" href={props.link} target="_blank">
              Ver
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export { Item };
