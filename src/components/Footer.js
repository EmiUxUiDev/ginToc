import '../styles/footer.css'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <>
            <section className='wrapper'>
                <div className='brand-container'>
                    <Link to={'/'}><img className='big-logo' src={require('../img/gintocBigLogo.png')} alt='Brand logo' /></Link>
                    <p>GINTOC</p>
                </div>

                <spam className='menu-container'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/AboutUs'>About us</Link>
                        </li>
                        <li>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </spam>

                <spam className='social-container'>
                    <a href='#'><i>Insta</i></a>
                    <a href='#'><i>Faceb</i></a>
                    <a href='#'><i>whats</i></a>
                </spam>

            </section>
            <hr />
            <p className='copyright'>copyright 2022 - @emidev</p>
        </>
    )
}