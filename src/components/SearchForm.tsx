import React from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  console.log("render SearchForm");

  const navigate = useNavigate(); // React Router Hook useNavigate() --> react router go to route programmatically --> https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = e.target.product.value;
    console.log(product, "product submit");

    navigate("/search/" + product, { replace: true }); // 1er parametro es el path - 2do para que lo ejecute
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          name="product"
          type="text"
          className="search-input"
          placeholder=" Buscar productos, marcas y más..."
          required
        />
        <button className="search-button">BUSCAR</button>
      </form>
    </>
  );
}

export { SearchForm };
