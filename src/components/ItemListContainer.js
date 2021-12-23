import List from "./List.js"

function ItemListContainer ({ titulo }) {
    return (
            <div>

                <h2>{titulo}</h2>
                <List />
            </div>
    )
}

export default ItemListContainer