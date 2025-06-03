import React from 'react';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';
import Sidebar from '../SidebarComponent/Sidebar';
import { Outlet } from 'react-router-dom';
import './layout.css';

const Layout = ({ children }) => {
    return (
        <div className='app-container'>
            <Header/>
            
                <Sidebar/>

                <main>
                    <div>
                        <Outlet/>
                    </div>
                </main>            

            <Footer/>
        </div>
    );
}

export default Layout;