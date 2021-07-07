import React, { useEffect, useState } from 'react'
import { ProductContext } from 'vtex.product-context'
import "./global.css";

function AlertPdpComponent() {
  // const [count, setCount] = useState(0)
  const { product } = React.useContext(ProductContext)

  console.log(product.categories[1])

  if (product.categories[1] == "/Mezcladores/") {

    console.log("No es Alcohol")

    return null

  } else {

    console.log("Es alcohol")

    return (
      <div className="container-alertpdp" >
        <img className="image-alertpdp" src="/arquivos/alert-icon.png" alt="" />
        <p className="alertpdp" style={{color: "#1d1d1b"}} >Debes ser mayor de edad para comprar este producto.</p>
      </div>
    )
  }
}

export default AlertPdpComponent;