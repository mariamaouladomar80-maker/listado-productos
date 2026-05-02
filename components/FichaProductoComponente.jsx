import Link from "next/link";

export default function FichaProductoComponente({ producto }) {
    return (
        <div className="p-10 max-w-2xl mx-auto">
            <Link href="/" className="text-blue-600 hover:underline mb-4 block">
                ← Volver a la página principal
            </Link>
            <h1 className="text-2xl font-bold mb-4">{producto.title}</h1>
            <img src={producto.image} alt={producto.title} className="w-48 mb-4" />
            <p className="text-gray-700 mb-2">{producto.description}</p>
            <p className="text-xl font-black">{producto.price} €</p>
        </div>
    )
}