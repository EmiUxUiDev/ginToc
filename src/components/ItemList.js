import '../styles/itemlist.css'
import Item from './Item.js'

export default function ItemList({ gins }) {
    console.log(gins.map((item)=>console.log(item.path)))
    return (
        <section className='wrapper-list'>
            {gins && gins.map((gin) =>
                <Item
                    id={gin.id} brand={gin.brand}
                    path={gin.path} summary={gin.summary}
                />)}
        </section>
    )
}