import Image from "next/image";
import Boton from "./Boton";
import AddToCartButton from "./AddToCartButton";

export default function TarjetaProducto({ productoData }) {
    return (
        <div className="p-4 py-10 border w-60 h-auto px-3 bg-pink-200 rounded-2xl flex flex-col items-center">
            <h1 className="font-bold text-center">{productoData.title}</h1>
            <h2 className="font-black text-lg">{productoData.price} €</h2>
            <Image
                className="py-3"
                src={productoData.image}
                width={85}
                height={100}
                alt={`Imagen de ${productoData.title}`}
            />
            <Boton producto={productoData} />
            <AddToCartButton producto={productoData} />  {/* ✅ NUEVO */}
        </div>
    )
}