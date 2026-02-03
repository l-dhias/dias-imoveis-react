import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Categories'
import HomeBaner from './components/HomeBaner'
import HeaderLink from './components/HeaderLink'

const Rotas = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <HomeBaner />
          <Home />
        </>
      }
    />

    <Route
      path="/categories/:category"
      element={
        <>
          <HeaderLink />
          <Category />
        </>
      }
    />
  </Routes>
)

export default Rotas
