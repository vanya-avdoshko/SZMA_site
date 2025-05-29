import React from 'react';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';
import Sidebar from '../SidebarComponent/Sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>

            <div>
                <Sidebar/>

                <main>
                    {children} {}
                </main>
            </div>

            <Footer/>
        </div>
    );
}

export default Layout;