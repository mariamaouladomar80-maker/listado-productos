"use client"

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function NavBar() {
    const totalItems = useCartStore((state) => state.getTotalItems());

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
            
            {/* LOGO / INICIO */}
            <Link href="/" className="text-xl font-bold hover:text-gray-300 transition">
                🏠 Mi Tienda
            </Link>

            {/* ENLACES DE NAVEGACIÓN */}
            <div className="flex gap-6 items-center">
                
                {/* ⭐ ENLACE A FAVORITOS (NUEVO) */}
                <Link 
                    href="/favoritos" 
                    className="hover:text-yellow-400 transition flex items-center gap-1"
                >
                    ⭐ Favoritos
                </Link>

                {/* 🛒 ENLACE A CARRITO (YA EXISTENTE) */}
                <Link 
                    href="/carrito" 
                    className="relative hover:text-gray-300 transition flex items-center gap-1"
                >
                    🛒 Carrito
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-4 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                            {totalItems}
                        </span>
                    )}
                </Link>

            </div>
        </nav>
    )
}