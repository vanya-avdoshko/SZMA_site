import React from 'react';
import logo from './logo192.png';

const Header = () => {
    return (
        <header> 
            <div className='company_logo'>
                <img src={logo} title='иконка предприятия'/> 
            </div>

            <div className='company_title'>
                <h1> СООО БИК СЗМА </h1>
                <h2>Белорусская инжиниринговая компания</h2> 
                <hr/>
                <h1>СЕВЗАПМОНТАЖАВТОМАТИКА</h1>
            </div>
        </header>
    );
}

export default Header;