import { Link } from "react-router"

function Navbar(){
    const fontSize = "";
    return(
        <nav className="bg-stone-300 p-5 flex justify-between items-baseline sticky top-0">
            <div>
                <Link className="text-4xl font-bold font-serif" to={"/"}>Broke</Link>
            </div>
            <div className="text-2xl font-medium flex w-1/4 justify-around gap-10">
                <Link className="" to={"/"}>Home</Link>
                <Link to={"/store"}>Store</Link>
                <Link to={"/cart"}>Cart</Link>
            </div>
        </nav>
        
    )
}

export default Navbar