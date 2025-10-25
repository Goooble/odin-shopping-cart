function Card({storeCard = true}){
    console.log(storeCard)
    const addToCartButton = <button className="text-center w-full p-1 bg-stone-200 text-black rounded-xs">Add to Cart</button>;
    const removeFromCartButton = <button className="text-center w-full p-1 bg-stone-200 text-black rounded-xs">Remove from Cart</button>;
    let cartButton = storeCard==true?addToCartButton:removeFromCartButton;

    return (
        <div className="bg-stone-700 rounded-md p-3 text-white">
                <img src="#" alt="" className="bg-stone-950 h-50 rounded-xs" />
                <div  className="py-2">
                    <p className="text-2xl font-medium mb-1">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                    <p className="mb-5 overflow-hidden text-ellipsis line-clamp-4 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ut nemo, et itaque, facilis suscipit, error minima mollitia nam asperiores eius! Officia amet necessitatibus rem aut aliquam quae vitae dignissimos.</p>
                    <p className="font-bold text-xl mb-2">200$</p>
                    <div className="flex gap-2">
                        <button className="shrink-0 p-1 bg-stone-400 rounded-full w-8 aspect-square font-bold">-</button>
                        <input defaultValue={1} className="w-1/1 border rounded-md border-stone-500 text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" />
                        <button className="shrink-0 p-1 bg-stone-400 rounded-full w-8 aspect-square font-bold">+</button>
                    </div>
                </div>
                {cartButton}
                
            </div>
    )
}


export default Card