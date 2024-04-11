import CartIcon from "/public/img/CartIcon.svg";


export default function Header() {
    return (
        <>
            <nav className="bg-green-800">
                <div className="container mx-auto px-6 py-3 ">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-semibold text-gray-700">
                                <a href="#" className="text-green-400 text-xl font-bold hover:text-green-200 transition-all md:text-2xl">CarrotHopper</a>
                            </div>
                        </div>

                        <div className="hidden -mx-4 md:flex md:items-center">
                            <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-green-400 capitalize hover:text-green-200 hover:transition-all">Halloween</a>
                            <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-green-400 capitalize hover:text-green-200 hover:transition-all">Navidad</a>
                            <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-green-400 capitalize hover:text-green-200 hover:transition-all">Pascua</a>
                            <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-green-400 capitalize hover:text-green-200 hover:transition-all">Cumpleaños</a>
                            <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-green-400 capitalize hover:text-green-200 hover:transition-all">
                                <img src={CartIcon} className="max-w-6" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full bg-cover bg-center h-[35rem] bg-[url('./img/bunny_bg.jpg')]">
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Paquetitos para tus <span className="text-green-400">Conejitos</span></h1>
                        <button className="mt-4 px-4 py-2 bg-green-400 text-green-900 text-sm uppercase font-medium rounded hover:bg-green-700 hover:text-green-200 focus:outline-none focus:bg-green-800 transition-all">Ver Productos</button>
                    </div>
                </div>
            </div>
        </>
    )
}
