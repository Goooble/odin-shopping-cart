import Card from "./Card";
import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router";

function Store() {
  const [products, setProducts] = useState(new Array(20));
  const [error, setError] = useState(false);
  const [cart, setCart] = useOutletContext();
 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => setProducts(res))
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, []);

  let displayProduct = [];
  products.forEach((item, key) => {
    displayProduct.push(
      <Card
        key={key}
        name={item.title}
        price={item.price}
        desc={item.description}
        img={item.image}
        id={key}
        cart={cart}
        setCart={setCart}
      ></Card>,
    );
  });

  if (error) {
    return <h1 className="text-center text-white">Internal Error</h1>;
  }

  return (
    <main className="mx-auto grid min-h-screen w-3/4 grid-cols-4 gap-4 py-5">
      {displayProduct}
    </main>
  );
}
export default Store;
