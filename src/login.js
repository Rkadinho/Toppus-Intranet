import { render } from '@testing-library/react';
import React from 'react'
import './css/login.css'
import BackgroundImg from './images/logo2.png'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Úsuario'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('Login efetuado');
        event.preventDefault();
    }

    render() {
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
                <div className='containerFull'>
                    <div className='containerLogin'>
                        <input type='text' name='textUser' onChange={this.handleChange} className='usuario'/>
                        <br />
                        <input type='text' name='textPassword' className='password' />
                        </div>
                    <br/>
                    <input type='submit' className='buttonLogin' value='Acessar' onClick={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

export default Login;