import { Link } from "react-router"

function Home(){
    return (
        
        <div className="flex flex-col bg-stone-800 text-yellow-50 p-10">
            <header className="bg-stone-600 h-[60vh] rounded-xl p-20 flex flex-col justify-center">
                <p className="text-9xl font-serif font-extrabold text-stone-50 mb-4">Broke</p>
                <p className="text-4xl mb-2">Define the Broker you</p>
                <Link className="bg-stone-900 w-fit p-2 rounded-sm" to={"/store"}>Shop Now</Link>
            </header>
        </div>
        
    )
}

export default Home