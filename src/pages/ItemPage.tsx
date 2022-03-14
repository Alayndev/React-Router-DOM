import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "components/Item";

function ItemPage() {
  const { id } = useParams();

  const [results, setResults] = useState([]);

  const fetchAPI = async (id) => {
    const res = await fetch("https://api.mercadolibre.com/items/" + id);
    const results = await res.json();
    console.log(results, "json");

    const productData = [
      {
        id: results.id,
        title: results.title,
        price: results.price,
        pictures: results.pictures,
        link: results.permalink,
        warranty: results.warranty,
      },
    ];

    setResults(productData);
  };

  useEffect(() => {
    fetchAPI(id);
  }, [id]);

  console.log(results, "results ItemPage");

  return (
    <>
      <div>
        {results.map((i) => (
          <Item
            key={i.id}
            title={i.title}
            price={i.price}
            pictures={i.pictures}
            link={i.link}
            warranty={i.warranty}
          />
        ))}
      </div>
    </>
  );
}

export { ItemPage };
