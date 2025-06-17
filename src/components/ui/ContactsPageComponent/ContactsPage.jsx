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
                <div className='mail'>
                    <p>e-mail: <a href="mailto:info@szma.by">info@szma.by</a></p>
                </div>
            </div>

            

            <div className='important_positions'>
                <div id="general_manager">
                    <h3>Генеральный директор <br/><br/></h3>
                    <img src="/images/kirito.jpg" alt="гендиректор"/>
                    <h4 className='contacts_name'>Гавриленко Сергей Александрович</h4>
                    <p className='phone_number'>+375 (236) 21-06-05 (г. Мозырь) <br/> +375 (29) 140-58-82 (Велком)<br/> +375 (33) 683-51-13 (МТС)</p>
                </div>
                <div id="chief_engineer">
                    <h3>Главный инженер <br/><br/></h3>
                    <img src="/images/kirito.jpg" alt="главинженер"/>
                    <h4 className='contacts_name'>Галактионов Сергей Владимирович</h4>
                    <p className='phone_number'>+375 (17) 355-36-90<br/> +375 (17) 304-30-82 (г. Минск)<br/>+375 (29) 683-34-22 (Велком)<br/> +375 (33) 665-60-22 (МТС)</p>
                </div>
                <div id="foreman">
                    <h3>Начальник мозырского участка ПНР</h3>
                    <img src="/images/kirito.jpg" alt="прораб"/>
                    <h4 className='contacts_name'>Авдошко Сергей <br/> Васильевич</h4>
                    <p className='phone_number'>+375 (236) 37-34-57 (г. Мозырь)<br/> +375 (29) 76-525-76 (МТС)</p>
                </div>
                <div id="foreman">
                    <h3>Начальник мозырского участка ПНР</h3>
                    <img src="/images/kirito.jpg" alt="прораб"/>
                    <h4 className='contacts_name'>Авдошко Сергей <br/> Васильевич</h4>
                    <p className='phone_number'>+375 (236) 37-34-57 (г. Мозырь)<br/> +375 (29) 76-525-76 (МТС)</p>
                </div>
                
            </div>



            <div className='mapContainer'>
                <iframe title='szma_map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d61fbf6dc2bef4a69123d3f8e00fcb301004a72da352405cef079d08b5d990e&amp;source=constructor" width="100%" height="250" loading='lazy'></iframe>
            </div>

        </div>
    )
}

export default ContactsPage;