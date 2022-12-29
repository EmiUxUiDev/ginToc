import '../styles/item.css'
import { Link } from 'react-router-dom'

export default function Item({ id, brand, path, summary }) {
    return (
        <div className='container-item' key={id}>
            <img className='img-item' src={path} alt='Imagen bebida' />
            <div className='text-container-item'>
                <h4>{brand}</h4>
                <p>{summary}</p>
            </div>
            <hr />
            <Link to={`/Detail/${id}`}>
                <div className='btn-container-item'>
                    <h4 id='btn-item'>Ver detalle del producto</h4>
                    <img className='img-btn-item'
                        src={require('../img/icons/chevron-right.png')}
                        alt='Icono detalle producto' />
                </div></Link>
        </div>
    )
} 
