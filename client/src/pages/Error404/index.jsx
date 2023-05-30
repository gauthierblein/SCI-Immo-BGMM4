import React from 'react'
import Header from "../../components/Header"
import Error from '../../components/ErrorPageNotFound'
import Footer from "../../components/Footer"

function PageError404 () {
  return (
    <>
      <Header/>
      <Error/>
      <Footer/>
    </>
  )
}

export default PageError404