import FichaProductoComponente from "@/components/FichaProductoComponente";
import { fetchProducto } from "@/lib/fetchApi";

export async function generateMetadata({ params }) {
    const resolvedParams = await params;  // ✅ await obligatorio en Next.js 15
    const id = resolvedParams.id;
    
    const producto = await fetchProducto(id);
    
    return {
        title: `Productos | ${producto?.title || 'No encontrado'}`,
        description: producto?.description || ''
    }
}

export default async function FichaProducto({ params }) {
    const resolvedParams = await params;  // ✅ await obligatorio
    const id = resolvedParams.id;
    
    console.log("🔍 ID recibido:", id);  // Debug
    console.log("🔍 Params completo:", resolvedParams);  // Debug
    
    const producto = await fetchProducto(id);
    
    console.log("🔍 Producto de API:", producto);  // Debug
    
    if (!producto || !producto.id) {
        return (
            <div className="p-10">
                <h1 className="text-red-600 text-2xl">Producto no encontrado</h1>
                <p>ID recibido: <strong>{id}</strong></p>
                <p>Respuesta API: {JSON.stringify(producto)}</p>
            </div>
        );
    }
    
    return <FichaProductoComponente producto={producto} />
}