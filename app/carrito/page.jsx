"use client"

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";

export default function CarritoPage() {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    return (
        <div className="p-10 max-w-4xl mx-auto">
            <Link href="/" className="text-blue-600 hover:underline mb-4 block">
                ← Volver a la tienda
            </Link>
            <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
            
            {cart.length === 0 ? (
                <p className="text-gray-500">El carrito está vacío</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                            <Image
                                src={item.image}
                                width={60}
                                height={60}
                                alt={item.title}
                            />
                            <div className="flex-1">
                                <h3 className="font-bold">{item.title}</h3>
                                <p>Cantidad: {item.quantity}</p>
                                <p className="font-black">{item.price * item.quantity} €</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}