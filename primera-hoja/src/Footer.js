import React from 'react';
import { Container, Grid, TextField }  from '@mui/material';
import { Box } from '@mui/material';
import Spacing from '@mui/material';
import img from './img/logo.png';
import img5 from './img/facee.png';
import img6 from './img/insta.png';
import img7 from './img/twit.png';
import img8 from './img/you.png';
import DraftsIcon from '@mui/icons-material/Drafts';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RoomIcon from '@mui/icons-material/Room';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./Footer.css";




export default function Footer  () {
    return(
        
        <div className="footer">
        <Grid container className="padre"  ml={3}>  
         <Grid item xs={12} sm={6} className="footer__col1"> 
           <a href="/">
           <img src={img} alt="" class="logo"/> 
            </a>
           <p className="titugo" >CodiGO Travel</p>
         
           <a href="/" className="decora" >
           <p className="textfo"><RoomIcon className="color-icon" /> Av. Doña Lola 145 <br/> &nbsp; &nbsp; &nbsp; &nbsp;Santiago de Surco<br/>  &nbsp; &nbsp; &nbsp; &nbsp;Lima - Perú</p>
           </a>
           
           <a href="/" className="decora">
           <p className="textfo"><SupportAgentIcon className="color-icon"/>+511 257-6539</p>
           </a>
          
           <a href="/" className="decora">
           <p className="textfo"> <LocalPhoneIcon className="color-icon"/>925 663 758</p>
           </a>
          
            <a href="/" className="decora">
           <p className="textfo"><DraftsIcon className="color-icon"/>ctravel@gmail.com</p>
           
           <p className="textfo">Siguenos:</p>
           <a href="/">
           <img src={img5} alt="" className="icomedia" />
           </a>
          <img src={img6} alt="" className="icomedia" />
           </a>
           <a href="/">
           <img src={img7} alt="" className="icomedia" />
           </a>
           <a href="/">
           <img src={img8} alt="" className="icomedia" />
           </a>
           
          </Grid> 
         </Grid>

            
         <Grid container className="padre" alignItems="center" > 
         <Grid item xs={12} sm={6} className="footer__col2">
             <h3 className="titulo">Quienes Somos <hr/></h3> 
             <a href="/" className="decora"> 
             <p className="textfo">Misión</p>
             </a>
             <a href="/" className="decora">
             <p className="textfo">Visión</p>
             </a>
             <a href="/" className="decora">
             <p className="textfo">Valores</p>
             </a>
             <a href="/" className="decora">
             <p className="textfo">Lista de Feriados</p>
             </a>
             <a href="/" className="decora">
             <p className="textfo">Terminos y <br/>Condiciones</p>
             </a>
             </Grid>
             </Grid>
             
             <Grid container className="padre" alignItems="center"> 
             <Grid item xs={12} sm={6} className="footer__col3">
             <h3 className="titulo">Asistencia al Cliente<hr/></h3> 
             <a href="/" className="decora">
             <p className="textfo">Solicite su Folleto</p>
             </a>
             <a href="/" className="decora">
             <p className="textfo">Centro de Ayuda</p>
             </a>
             <a href="/" className="decora">
             <p className="textfo">Información <br/> de Seguridad</p>
             </a>
             <a href="/" className="decora">
             <p className="textfo">Opciones <br/> de Cancelación</p>
             </a>
             </Grid>
             </Grid>
             
             <Grid container className="padre" alignItems="center"> 
             <Grid item xs={12} sm={6} className="footer__col4">
             <h3 className="titulo">Recursos para Socios <hr/></h3> 
           
             <a href="/" className="decora">
             <p className="textfo">Inicio de <br/> Sesión de Socio</p>
             </a>
             <a href="/" className="decora">
             <p className="textfo">Enlace a CodiGO Travel</p>
             </a>
             <a href="/" className="decora">
             <p className="textfo">Más Información <br/> sobre Nuestras Funciones</p>
             </a>
             </Grid>
             </Grid> 
        </div>
    
    );
};

