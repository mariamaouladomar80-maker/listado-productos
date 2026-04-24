import Image from "next/image";
import Boton from "./Boton";

export default function TarjetaProducto({ productoData }) {
    return (
        <div className="    ">
           <div className="p-4 py-10 border w-60 h-100 px-3 bg-pink-200 rounded-2xl "> 
            <h1>{productoData.title}</h1>
            <h1 className="font-black">{productoData.price} €</h1>
            <Image
            className="py-3"
                src={productoData.image}
                 
                width="85"
                height={100}
            />
             <Boton className=""/>
            </div>
           
        </div>
    )
}