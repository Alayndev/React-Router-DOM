import React from "react";
import { Link } from "react-router-dom";

type SearchResultItemProps = {
  id: string;
  title: string;
  price: number;
  img: string;
  link: string;
  stock: number;
  sold: number;
  condition: string;
};

function SearchResultItem(props: SearchResultItemProps) {
  console.log("render SearchResultItem");

  return (
    <>
      <Link className="result-item__main-container" to={"/item/" + props.id}>
        <div className="result-item">
          <img src={props.img} alt="item" className="result-item-img" />
          <div className="result-item-subcontainer-content">
            <h4 className="result-item-title">Título: {props.title}</h4>
            <p className={props.condition == "new" ? "new" : "used"}>
              {props.condition === "new" ? "Nuevo" : "Usado"}
            </p>
            <p className="result-item-sold-quantity">
              Vendidos: <span className="sold-quantity">{props.sold}</span>
            </p>
          </div>
          <div className="result-item-subcontainer-price-stock">
            <div className="result-item-price">Precio: ${props.price}</div>
            <p className="result-item-stock">
              Stock: <span className="stock-counter"> {props.stock} </span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export { SearchResultItem };
