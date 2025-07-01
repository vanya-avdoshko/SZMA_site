import React from 'react';
import { FaPhone } from 'react-icons/fa';
import './contacts_page.css';

const ContactsPage = () => {
    return (
        <div className='contacts-content'>
            <div className="license-header">
                <h1 className="animate-header">Наши контакты</h1>
                <p className="animate-subheader">Официальные контакты и реквизиты</p>
            </div>
            <div className='requisites'>
                <h3>Реквизиты</h3>
                <p>Совместное общество с ограниченной ответственностью «БИК СЗМА» 220076,<wbr /> Республика Беларусь, г. Минск, ул. Буйницкого, 21 <br />
                    УНП 100057769, ОКПО 28594490<br />
                    р/с в бел. Руб. BY96MTBK30120001093300121145, ЗАО «МТБанк», BIC банка MTBKBY22. Адрес банка 220007 г.Минск, ул. Толстого,4
                </p>
                <div className='mail'>
                    <p>e-mail: <a href="mailto:info@szma.by">info@szma.by</a></p>
                </div>
            </div>
            <div className='important_positions'>
                <div id="general_manager">
                    <h3>Генеральный директор <br /><br /></h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTawdOGxXg6ISHPiCRBEhXiuokkRRucHPmDg&s" alt="гендиректор" />
                    <h4 className='contacts_name'>Гавриленко Сергей Александрович</h4>
                    <p className='phone_number'>
                        <FaPhone />
                        <a href="tel:+375236210605">+375 (236) 21-06-05</a> (г. Мозырь) <br />
                        <a href="tel:+375291405882">+375 (29) 140-58-82</a> (Велком)<br />
                        <a href="tel:+375336835113">+375 (33) 683-51-13</a> (МТС)
                    </p>
                </div>
                <div id="chief_engineer">
                    <h3>Главный инженер <br /><br /></h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTawdOGxXg6ISHPiCRBEhXiuokkRRucHPmDg&s" alt="главинженер" />
                    <h4 className='contacts_name'>Галактионов Сергей Владимирович</h4>
                    <p className='phone_number'>
                        <FaPhone />
                        <a href="tel:+375173553690">+375 (17) 355-36-90</a><br />
                        <a href="tel:+375173043082">+375 (17) 304-30-82</a> (г. Минск)<br />
                        <a href="tel:+375296833422">+375 (29) 683-34-22</a> (Велком)<br />
                        <a href="tel:+375336656022">+375 (33) 665-60-22</a> (МТС)
                    </p>
                </div>
                <div id="foreman">
                    <h3>Начальник мозырского участка ПНР</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTawdOGxXg6ISHPiCRBEhXiuokkRRucHPmDg&s" alt="Начальник участка" />
                    <h4 className='contacts_name'>Авдошко Сергей <br /> Васильевич</h4>
                    <p className='phone_number'>
                        <FaPhone />
                        <a href="tel:+375236373457">+375 (236) 37-34-57</a> (г. Мозырь)<br />
                        <a href="tel:+375297652576">+375 (29) 76-525-76</a> (МТС)
                    </p>
                </div>
                <div id="accountant">
                    <h3>Бухгалтер <br/><br/></h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84I-f5llEVpvg_fXmnxGGCLV00_zkxsTdXtkI9vQGPntsdrJgmDeFDqQXTPtSIsBNEL0&usqp=CAU" alt="прораб" />
                    <h4 className='contacts_name'>Филипчик Ольга <br /> Эдуардовна</h4>
                    <p className='phone_number'>
                        <FaPhone />
                        <a href="tel:+375296603644">+375 (29) 660-36-44</a> (МТС)<br />
                        <a href="tel:+375296833422">+375 (29) 683-34-22</a> (Велком)
                    </p>
                </div>
            </div>
            <div className='mapContainer'>
                <iframe title='szma_map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d61fbf6dc2bef4a69123d3f8e00fcb301004a72da352405cef079d08b5d990e&amp;source=constructor" width="100%" height="250" loading='lazy'></iframe>
            </div>
        </div>
    )
}

export default ContactsPage;