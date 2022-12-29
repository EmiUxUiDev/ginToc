import '../styles/cartwidget.css'

export default function CartWidget() {
    return (
        <div className='cart-container'>
            <button className='cart-btn'><img className='cart-img' src={require('../img/icons/shopping-bag.png')} alt='Shop icon' /></button>
            <div className ='cart-item'><p>0</p></div>
        </div>
        
    )
}