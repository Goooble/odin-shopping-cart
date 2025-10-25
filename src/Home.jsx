import { Link } from "react-router"

function Home(){
    const card = "h-40 bg-stone-400 text-stone-950 rounded-xl w-60 text-center flex flex-col justify-end p-2"
    return (
        
        <div className="flex flex-col bg-stone-800 text-yellow-50 p-10 ">
            <header className="bg-stone-600 h-[60vh] rounded-xl p-20 flex flex-col justify-center mb-10">
                <p className="text-9xl font-serif font-extrabold text-stone-50 mb-4">Broke</p>
                <p className="text-4xl mb-2">Define the Broker you</p>
                <Link className="bg-stone-900 w-fit p-2 rounded-sm" to={"/store"}>Explore</Link>
            </header>
            <div className="mb-10">
                <p className="text-center text-4xl  font-medium mb-8">Our Promises</p>
                <div className="flex gap-20 justify-center mx-auto">
                    <div className={card}>
                        <p>We Value Impulse — Every Click Counts</p>
                    </div>
                    <div className={card}>
                        <p>Faster Than Regret</p>
                    </div>
                    <div className={card}>
                        <p>Keeping Your Wallet on Life Support Since 1950</p>
                    </div>
                </div>
            </div>
            <div className="bg-stone-600 h-[30vh] rounded-xl p-20 flex flex-col justify-center">
                <p className="text-6xl font-bold text-stone-50 mb-6 mx-auto">Start wasting money NOW!</p>
                <Link className="bg-stone-900 w-1/3 p-2 rounded-sm mx-auto text-center font-bold" to={"/store"}>Shop</Link>
            </div>
        </div>
        
    )
}

export default Home