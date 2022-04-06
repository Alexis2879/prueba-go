import React from 'react';
import img from './img/logo.png';
import img1 from './img/ubifoot.jpg'
import img2 from './img/operador foot.jpg'
import img3 from './img/wsp foot2.jpg'
import img4 from './img/emailfoot.jpg'
import img5 from './img/facee.png'
import img6 from './img/insta.png'
import img7 from './img/twit.png'
import img8 from './img/you.png'
import Fotmisi from './components/Fotmisi';
const Footer = () => {
    return(
        
        <div>
            <div className="container">
             <div className="footer__col1">
               <img src={img} alt="" />  
               <h1 className="footer__col1__title">CodiGO Travel</h1>
               <img src={img1} alt="" />
               <p>Av. Doña Lola 145 Santiago de Surco, Lima - Perú</p>
               <img src={img2} alt="" />
               <p>+511 257-6539</p>
               <img src={img3} alt="" />
               <p>925 663 758</p>
               <img src={img4} alt="" />
               <p>codigotravel@gmail.com</p>
               <h3>Siguenos:</h3>
               <img src={img5} alt="" />
               <img src={img6} alt="" />
               <img src={img7} alt="" />
               <img src={img8} alt="" />
             </div>

                 <div className="footer__2">
                    <Fotmisi />
                 </div> 
                 <div className="footer__3">

                 </div> 
                 <div className="footer__4">

                 </div> 
            </div>
        </div>
        
    );
};

export default Footer;