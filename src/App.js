import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/layout/LayoutComponent/Layout'
import HomePage from './components/ui/HomePageComponent/HomePage'
function App() {
  return (
    <Router>
      <Layout>
        <HomePage/> {}
      </Layout>
    </Router>
  )
}

export default App;
