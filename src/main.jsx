import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/home/Home.jsx'
import Offers from './pages/offers/Offers.jsx'
import Packages from './pages/packages/Packages.jsx'
import Services from './pages/services/Services.jsx'
import About from './pages/about/About.jsx'
import EnquiryPage from './pages/enquiry/EnquiryPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='offers' element={<Offers />}/>
      <Route path='packages' element={<Packages />}/>
      <Route path='services' element={<Services />}/>
      <Route path='about' element={<About />}/>
      <Route path='consultation' element={<EnquiryPage />}/>
    </Route >
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)