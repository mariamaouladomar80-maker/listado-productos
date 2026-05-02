"use client"

import { useState, useEffect } from "react";

export default function FavoritosComponent() {
    
    const [favoritos, setFavoritos] = useState([]);
    const [nuevoFavorito, setNuevoFavorito] = useState({ id: "", title: "", price: "", image: "" });
    const [loading, setLoading] = useState(false);

    // Cargar favoritos al montar
    useEffect(() => {
        fetchFavoritos();
    }, []);

    const fetchFavoritos = async () => {
        try {
            // Llama a API  , Recibe datos ,Los guarda ,reat  actualiza pantalla
            const res = await fetch('/api/favoritos');
            const data = await res.json();
            setFavoritos(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const agregarFavorito = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // enviamos datos 
            const res = await fetch('/api/favoritos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...nuevoFavorito,
                    id: parseInt(nuevoFavorito.id),
                    price: parseFloat(nuevoFavorito.price)
                })
            });

            if (res.ok) {
                const data = await res.json();
                setFavoritos(data);
                setNuevoFavorito({ id: "", title: "", price: "", image: "" });
            } else {
                alert("Error al añadir favorito");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Mis Favoritos</h2>
            
            {/* Lista de favoritos */}
            <div className="space-y-2 mb-6">
                {favoritos.map((fav) => (
                    <div key={fav.id} className="bg-yellow-100 p-3 rounded flex justify-between">
                        <span>{fav.title}</span>
                        <span className="font-bold">{fav.price} €</span>
                    </div>
                ))}
            </div>

            {/* Formulario para añadir */}
            <form onSubmit={agregarFavorito} className="bg-gray-100 p-4 rounded-lg space-y-3">
                <h3 className="font-bold">Añadir nuevo favorito</h3>
                <input
                    type="number"
                    placeholder="ID"
                    value={nuevoFavorito.id}
                    onChange={(e) => setNuevoFavorito({...nuevoFavorito, id: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Título"
                    value={nuevoFavorito.title}
                    onChange={(e) => setNuevoFavorito({...nuevoFavorito, title: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="number"
                    step="0.01"
                    placeholder="Precio"
                    value={nuevoFavorito.price}
                    onChange={(e) => setNuevoFavorito({...nuevoFavorito, price: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full disabled:bg-gray-400"
                >
                    {loading ? "Añadiendo..." : "Añadir a Favoritos"}
                </button>
            </form>
        </div>
    );
}