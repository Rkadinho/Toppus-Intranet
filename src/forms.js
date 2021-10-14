import React from 'react'
import './css/forms.css'
import BackgroundImg from './images/logo2.png'

function Forms() {
    var background = {
        width: '100vw',
        height: '45vw',
        background: 'center',
        opacity: 0.3,
        backgroundImage: `url(${BackgroundImg})`,
        position: 'fixed',
        margin: 0,
        padding: 0,
        overflow: 'hidden',

    }

    return(
        <div>
            <section style={background}/>
            <div className='containerForms'>
                <h5>Nome</h5>
                <input type='text' name='textName' />
                <h5>Usuário</h5>
                <input type='text' name='textUser' />
                <h5>Senha</h5>
                <input type='text' name='textPassword' />
                <br/>
                <select name='Departament'>
                    <option value='0'>Departamento</option>
                    <option value='1'>DP/RH</option>
                    <option value='3'>COMERCIAL</option>
                    <option value='4'>JURIDICO</option>
                    <option value='5'>FATURAMENTO</option>
                    <option value='6'>T.I</option>
                    <option value='7'>SESMT</option>
                    <option value='8'>ADMINISTRATIVO</option>
                    <option value='9'>CONTROLADORIA</option>
                </select>
                <br/>
                <button value='cadastrar' className='buttonForms'>Cadastrar</button>
                <button value='limpar' className='buttonForms'>Limpar</button>
            </div>
        </div>
    )
}

export default Forms;
