import FichaProductoComponente from "@/components/FichaProductoComponente";
import { fetchProducto } from "@/lib/fetchApi";

export async function generatMetadata({ params }) {
    const { id } = await params
    const producto = await fetchProducto(id)
    return {
        title: `Productos | ${producto.title} `,
        description: `${producto.description}`
    }
}

export default async function FichaProducto({ params }) {
    const { id } = await params;
    const producto = await fetchProducto(id)
    return <FichaProductoComponente producto={producto} />
}