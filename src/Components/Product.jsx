export default function Product({product}) {

  const { id, name, image, description, price } = product

  return (
    <>
      <div className="grid space-y-14 justify-center">
        <div className="flex justify-center">
          <img className="max-w-80 max-h-80"
            src={`./img/${image}.jpg`}
            alt={`imagen ${image}`} />
        </div>
        
        <div className="space-y-8 flex flex-col items-start md:justify-evenly px-11 md:px-0">
          <h3 className="text-black font-bold text-uppercase">{name}</h3>
          <p className="font-bold text-green-800 text-primary text-3xl">{price} €</p>
          <div className="flex justify-between w-full">
            <button type="button"
              className="bg-green-800 text-white px-4 py-2 rounded-lg">
                Agregar al Carrito
            </button>
            <button type="button"
              className="bg-blue-800 text-white px-4 py-2 rounded-lg">
                Ver Producto
            </button>
          </div>
        </div>
      </div>
    </>
  )
}