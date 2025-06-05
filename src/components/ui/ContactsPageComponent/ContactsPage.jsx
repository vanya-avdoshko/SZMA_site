import React from 'react';
import './contacts_page.css';

const ContactsPage = () => {
    return (
        <div className='contacts-content'>
            <div className='requisites'>
                <h3>Наши реквизты</h3>
                <p>Совместное общество с ограниченной ответственностью «БИК СЗМА» 220076,<wbr/> Республика Беларусь, г. Минск, ул. Буйницкого, 21 <br/>
                    УНП 100057769<br/>
                    ОКПО 28594490<br/>
                    р/с BY71 SLAN 3012 3648 2000 0010 0000 в ЗАО ««Банк ВТБ(Беларусь)» г. Минска,<wbr/> BIC банка SLANBY22, ул. Московская, 14
                </p>
            </div>

            <div className='mail'>
                <p>e-mail: <a href="mailto:info@szma.by">info@szma.by</a></p>
            </div>

            <div className='mapContainer'>
                <iframe title='szma_map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d61fbf6dc2bef4a69123d3f8e00fcb301004a72da352405cef079d08b5d990e&amp;source=constructor" width="100%" height="250"></iframe>
            </div>

        </div>
    )
}

export default ContactsPage;