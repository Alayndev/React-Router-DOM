import React from "react";
import Carousel from "react-elastic-carousel";

type ItemProps = {
  title: string;
  price: number;
  pictures: any;
  link: string;
  warranty: string;
};

function Item(props: ItemProps) {
  console.log("render Item");

  return (
    <>
      <div className="card result-item">
        <Carousel isRTL>
          {props.pictures.map((item) => (
            <img
              key={item.id}
              src={item.secure_url}
              alt="item"
              className="card__img"
            />
          ))}
        </Carousel>

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
