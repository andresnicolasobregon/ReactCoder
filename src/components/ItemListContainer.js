import ItemCount from "./ItemCount.js"

function ItemListContainer ({ titulo }) {
    return (
            <div>

                <h2>{titulo}</h2>
                <ItemCount />
            </div>
    )
}

export default ItemListContainer