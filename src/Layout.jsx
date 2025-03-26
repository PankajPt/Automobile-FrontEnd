import React from 'react'
import Header  from "./components/header/Header.jsx"
import Footer  from "./components/footer/Footer.jsx"
import { Outlet } from 'react-router-dom'
import { ToastContainer, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Layout() {
  return (
    <>
      <Header/>
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
        style={{
          fontSize: '16px',
          fontWeight: '500',
        }}
        toastStyle={{
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
        progressStyle={{
          background: 'rgba(255,255,255,0.3)'
        }}
        className="custom-toast-container"
      />
    </>
  )
}

export default Layout