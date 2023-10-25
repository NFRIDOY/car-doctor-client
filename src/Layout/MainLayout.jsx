import { Outlet } from 'react-router-dom'
import { createContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export const DonationContext = createContext([]);

export default function MainLayout() {

  return (
    // <div className='max-w-7xl mx-auto py-9'>
    <div className=''>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
