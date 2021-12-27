import ItemList from "./ItemList.js"

function ItemListContainer ({ titulo }) {
    return (
            <div>

                <h2>{titulo}</h2>
                <ItemList />
            </div>
    )
}

export default ItemListContainer