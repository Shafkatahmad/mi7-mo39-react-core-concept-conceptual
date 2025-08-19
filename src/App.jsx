import { useEffect, useState } from 'react'
import './App.css'
import Products from './components/Products/Products'

function App() {

  const information = {
    message: "secret",
    phone: "01555555555"
  };

  return (
    <>
      <Products info={information}></Products>
      <h1>Hello React</h1>
    </>
  )
}

export default App
