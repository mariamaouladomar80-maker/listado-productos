"use client"

import { useCartStore } from "@/store/cartStore";

export default function AddToCartButton({ producto }) {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <button
            onClick={() => addToCart(producto)}
            className="bg-green-600 text-white rounded-2xl px-4 py-2 mt-2 w-full hover:bg-green-700 transition"
        >
            Añadir al carrito
        </button>
    )
}