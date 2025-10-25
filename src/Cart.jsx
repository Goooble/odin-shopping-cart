import Card from "./Card";
import { Link } from "react-router";
import { useOutletContext } from "react-router";
function Cart() {
    //button styling
  const buttons =
    "bg-stone-200 text-stone-950 rounded-md p-4 text-center  hover:cursor-pointer";
  const [cart, setCart] = useOutletContext();
  const cards = [];
  let total=0;
  for (let key in cart) {
    total += cart[key].price * cart[key].units 
    cards.push(
      <Card
        storeCard={false}
        key={key}
        name={cart[key].name}
        price={cart[key].price}
        desc={cart[key].desc}
        img={cart[key].img}
        id={key}
        cart={cart}
        setCart={setCart}
      ></Card>,
    );
  }

  return (
    <div className="relative mx-auto grid min-h-screen w-2/4 grid-cols-2 gap-10 py-10 text-white">
      <main className="flex flex-col gap-5">
        {cards}
      </main>
      <aside className="sticky top-30 flex h-fit min-h-[50vh] flex-col justify-between rounded-md bg-stone-800 p-5">
        <p className="text-center text-3xl">Order Summary</p>
        <div className="flex flex-col justify-end gap-3">
          <div className="flex justify-between text-2xl">
            <p>Total:</p>
            <p className="font-bold">{total.toFixed(2)}$</p>
          </div>
          <button className={buttons + " font-extrabold"}>
            Proceed to Checkout
          </button>
          <button onClick={() => setCart({})} className={buttons}>Clear Cart</button>
          <Link className={buttons + " font-extrabold"} to={"/store"}>
            More Broke
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default Cart;
