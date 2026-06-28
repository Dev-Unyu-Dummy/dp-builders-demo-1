import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
