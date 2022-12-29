import './aboutus.css'

export default function AboutUs() {
  return (
    <section className='about-wrapper'>

      <img className='about-img' src={require('../../img/creator.png')} alt='Master gin maker' />

      <div className='about-txt'>
        <h2>About us</h2>
        <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      
      <div className='about-btn-txt'>
        <h4>Your gin, our passion</h4>
        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </section>
  )
}
