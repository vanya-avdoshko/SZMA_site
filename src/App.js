import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/LayoutComponent/Layout'
import HomePage from './components/ui/HomePageComponent/HomePage'
import NewsPage from "./components/ui/NewsPageComponent/NewsPage";
import ProductsPage from "./components/ui/ProductsPageComponent/ProductsPage"
import ProjectsPage from "./components/ui/ProjectsPageComponent/ProjectsPage"
import LicensesPage from "./components/ui/LicensesPageComponent/LicensesPage"
import LearningPage from "./components/ui/LearningPageComponent/LearningPage"
import ContactsPage from "./components/ui/ContactsPageComponent/ContactsPage"
import NewsDetail from "./components/ui/NewsItemComponent/NewsDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>,
          <Route index element={<HomePage/>}/>,
          <Route path='/news' element={<NewsPage/>}/>,
          <Route path='/news/:id' element={<NewsDetail/>}/>,
          <Route path='/products' element={<ProductsPage/>}/>,
          <Route path='/projects' element={<ProjectsPage/>}/>,
          <Route path='/licenses' element={<LicensesPage/>}/>,
          <Route path='/learning' element={<LearningPage/>}/>,
          <Route path='/contacts' element={<ContactsPage/>}/>,
          {/* Роут для 404 страницы */}
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
