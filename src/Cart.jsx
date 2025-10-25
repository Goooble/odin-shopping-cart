import Card from "./Card"
import { Link } from "react-router"
function Cart(){
    const buttons = "bg-stone-200 text-stone-950 rounded-md p-4 text-center  hover:cursor-pointer"
    return (
        <div className="text-white min-h-screen w-2/4 grid grid-cols-2 mx-auto gap-10 py-10 relative">
            <main className="flex flex-col gap-5">
                <Card storeCard="false" ></Card>
                <Card storeCard="false" ></Card>
            </main>
            <aside className="min-h-[50vh] h-fit bg-stone-800 sticky top-30 p-5 rounded-md flex flex-col justify-between">
                <p className="text-center text-3xl">Order Summary</p>
                <div className="flex flex-col gap-3 justify-end">
                    <div className="flex justify-between text-2xl">
                        <p>Total:

                        </p>
                        <p className="font-bold">500$</p>
                    </div>
                    <button className={buttons + " font-extrabold"}>Proceed to Checkout</button>
                    <button className={buttons}>Clear Cart</button>
                    <Link className={buttons + " font-extrabold"} to={"/store"}>More Broke</Link>
                </div>
                </aside>
            
        </div>
    )
}

export default Cart