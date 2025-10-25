import { useState } from "react";

import UnitUpdater from "./UnitUpdater";
import CartUnitUpdater from "./CartUnitUpdater";

function Card({ storeCard = true, name, price, desc, img, id, cart, setCart }) {
  const [units, setUnits] = useState(cart[id]?cart[id].units:1);
    
  const addToCartButton = (
    <button
      onClick={() => {
        setCart({
          ...cart,
          [id]: {
            name: name,
            desc: desc,
            price: price,
            img: img,
            units: units,
          },
        });
      }}
      className="w-full rounded-xs bg-stone-200 p-1 text-center text-black"
    >
      Add to Cart
    </button>
  );
  const removeFromCartButton = (
    <button onClick={()=>{
      const newCart = {...cart};
      delete newCart[id];
      setCart(newCart)
    }} className="w-full rounded-xs bg-stone-200 p-1 text-center text-black">
      Remove from Cart
    </button>
  );
  let cartButton = storeCard == true ? addToCartButton : removeFromCartButton;
  
  const storeUpdater = <UnitUpdater units={units} setUnits={setUnits}></UnitUpdater>;
  const cartUpdater = <CartUnitUpdater cart={cart} setCart={setCart} id={id}></CartUnitUpdater>
 let updater = storeCard == true? storeUpdater: cartUpdater

  return (
    <div className="h-175 rounded-md bg-stone-700 p-3 text-white">
      <img
        src={img}
        alt={name + "image"}
        className="h-1/3 w-1/1 rounded-xs bg-stone-950 object-contain"
      />
      <div className="flex h-2/3 flex-col justify-between py-2">
        <div>
          <p className="mb-3 text-2xl font-medium">{name}</p>
          <p className="mb-5 line-clamp-4 overflow-hidden text-ellipsis">
            {desc}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 text-xl font-bold">{price}$</p>
          <div className="flex gap-2">
            
            {updater}
            
          </div>
          {cartButton}
        </div>
      </div>
    </div>
  );
}

export default Card;
