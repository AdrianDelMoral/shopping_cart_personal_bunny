import { useState } from 'react'
import Header from './Components/Header'
import Product from './Components/Product'
import { db } from "./data/db"


function App() {

  const [data] = useState(db)

  return (
    <>
      <Header/>
      <main className="container mt-5 mx-auto">
        <h2 className='text-center my-12 md:my-24 text-4xl md:text-6xl lg:text-7xl font-bold text-green-800'>Nuestros Productos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:px-5 lg:px-10 gap-32">
          {data.map((product) => (
              <Product 
                key={product.id}
                product={product}
              />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
