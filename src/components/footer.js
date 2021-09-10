import React from 'react'
import Logo from '../images/logo.png'
import '../css/footer.css'

function Footer(){
    return(
        <div className='footer'>
            <head>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
             <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            </head>
            <img src={Logo} className='logoF'/>

            <div className='contacts'>
            <h3>CONTATO</h3>
            <a href='mailto:toppus@toppus.net'>Toppus@toppus.net</a>
            <a href='tel:8130337600'>(81) 3033-7600</a>
            <h3>CANAL DE OUVIDORIAS E DENÚNCIAS</h3>
            <a href='tel:08000817600'>0800 081 7600 </a>
            <p><a href='https://docs.google.com/forms/d/e/1FAIpQLSdC2THYrNN-sXXgzJU4bZQDldC26RalWj7TVbTZqwfqzvp-Dw/viewform'
             target='_blank'>
                www.ouvidoria.com.br</a>
            </p>
            <p className='copyRight'>© 2021 - Todos os direitos reservados - Toppus serviços terceirizados</p>
            </div>

            <div>
            <h3 className='address'>ENDEREÇO</h3>
            <p>Av. Antônio Cabral de Souza, 9703 <br/>
               Nossa Sra. da Conceição - Paulista - PE <br/>
               53421-420 <br/>
            </p>
            </div>

            <div className='networks'>
            <h3>REDES SOCIAIS</h3>
            <a href="https://www.facebook.com/toppusterceirizados" className="fa fa-facebook" target='_blank'></a>
            <br/>
            <a href="https://www.instagram.com/grupotoppus_/" class="fa fa-instagram" target='_blank'></a>
            <br/>
            <a href="https://www.linkedin.com/company/toppusterceirizacao/" class="fa fa-linkedin" target='_blank'></a>
            <br/>
            <a href="https://www.toppus.net" class="fa fa-rss" target='_blank'></a> 
            <br/>
            <a className='signature' href="http://instagram.com/rkadinho_" target='_blank'>RK</a>
            </div>
        </div>
    )
}

export default Footer