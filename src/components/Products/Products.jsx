import React from "react"
import Product from "./Product/Product"

export default function Products({info}) {
  
  // const {info} = props;

  return (
    <div>
      <h1>I am from Procucts</h1>
      <Product info={info}></Product>
    </div>
  )
}