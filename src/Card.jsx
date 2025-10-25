import { useState } from "react";
function Card({ storeCard = true, name, price, desc, img, id, cart, setCart }) {
  const [units, setUnits] = useState(1);
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
    <button className="w-full rounded-xs bg-stone-200 p-1 text-center text-black">
      Remove from Cart
    </button>
  );
  let cartButton = storeCard == true ? addToCartButton : removeFromCartButton;
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
            <button
              onClick={() => {
                if (Number(units) === 1) return;
                setUnits(Number(units) - 1);
              }}
              className="aspect-square w-8 shrink-0 rounded-full bg-stone-400 p-1 font-bold"
            >
              -
            </button>
            <input
              value={units}
              onChange={(e) => {
                setUnits(e.target.value);
              }}
              className="w-1/1 rounded-md border border-stone-500 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
            />
            <button
              onClick={() => setUnits(Number(units) + 1)}
              className="aspect-square w-8 shrink-0 rounded-full bg-stone-400 p-1 font-bold"
            >
              +
            </button>
          </div>
          {cartButton}
        </div>
      </div>
    </div>
  );
}

export default Card;
