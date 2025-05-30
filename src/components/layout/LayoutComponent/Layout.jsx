import React from 'react';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';
import Sidebar from '../SidebarComponent/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>

            <div>
                <Sidebar/>

                <main>
                    <Outlet/>
                </main>
            </div>

            <Footer/>
        </div>
    );
}

export default Layout;