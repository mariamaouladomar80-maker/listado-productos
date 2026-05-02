"use client"

import Link from "next/link"

export default function Boton({ producto }) {
    return (
        <div className="mt-2">
            <Link
                className="bg-blue-600 text-white rounded-2xl px-4 py-2 inline-block text-center hover:bg-blue-700 transition"
                href={`/producto/${producto.id}`}  // ✅ Barra inicial + .id
            >
                Ver detalles
            </Link>
        </div>
    )
}