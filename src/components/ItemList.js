import Item from "./Item"

const ItemList = ({lista}) => {
    return (
        <div className="box-producto" id="item-container">
            {lista.map((item,index)=>{
                return <Item key={index} item={item}/>
            })}
        </div>
    )
}

export default ItemList