function CartUnitUpdater({ cart, setCart, id }) {
  return (
    <>
      <button
        onClick={() => {
          let num = cart[id].units;
          if (num === 1) return;
          setCart({
            ...cart,
            [id]: { ...cart[id], units: num - 1 },
          });
        }}
        className="aspect-square w-8 shrink-0 rounded-full bg-stone-400 p-1 font-bold"
      >
        -
      </button>
      <input
        value={cart[id].units}
        onFocus={(e)=>e.target.select()}
        onInput={(e) => {
          setCart({
            ...cart,
            [id]: { ...cart[id], units: Number(e.target.value) },
          });
        }}
        className="w-1/1 rounded-md border border-stone-500 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        type="number"
      />
      <button
        onClick={() => {
          let num = cart[id].units;
          setCart({
            ...cart,
            [id]: { ...cart[id], units: num + 1 },
          });
        }}
        className="aspect-square w-8 shrink-0 rounded-full bg-stone-400 p-1 font-bold"
      >
        +
      </button>
    </>
  );
}

export default CartUnitUpdater;
