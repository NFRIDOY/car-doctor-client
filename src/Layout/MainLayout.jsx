import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function MainLayout() {

  const location = useLocation()
  console.log(location.pathname)
  return (
    // <div className='max-w-7xl mx-auto py-9'>
    <div className=''>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {
        location.pathname== '/' || location.pathname== '/about' || location.pathname== '/services' || location.pathname== '/about' || location.pathname== '/blog'|| location.pathname== '/contact' ? <Footer></Footer> : null
      }
    </div>
  )
}
