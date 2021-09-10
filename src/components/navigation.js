import React from 'react'
import '../css/navigation.css'

function Navigation(){
    return(
        <div>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'></link>
            </head>
            <ul className='navigationBar'>
                <li className='home'>
                    <a href='/'>INÍCIO</a>
                </li>
                <li className='navigationBarCenter'>
                    <a href='http://topservice.rh3software.com/portalrh/WPortalRH.dll/$/' target='_blank'> PORTAL DO COLABORADOR</a>
                </li>
                <li className='navigationBarCenter'>
                    <a href='https://goldtechnologia.tomticket.com/' target='_blank'>CHAMADO T.I</a>
                </li>
                <li className='navigationBarCenter'>
                    <a href='http://toppus.net:2095/' target='_blank'>WEBMAIL</a>
                </li>
                <li className='navigationBarCenter'>
                    <a href='../emails' target='_blank'>RAMAIS E E-MAILS</a>
                </li>
                <li className='navigationBarCenter'>
                    <a href='../request' target='_blank'>APROVADORES <br/>DE ACESSO</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;