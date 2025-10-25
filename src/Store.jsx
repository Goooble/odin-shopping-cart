import Card from "./Card"

function Store(){
    const cards = new Array(16).fill(<Card></Card>)
    return (
        <main className="w-3/4 mx-auto grid grid-cols-4 gap-4 py-5">
            {cards}
        </main>
    )
}


export default Store