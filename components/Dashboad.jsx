import { fetchListadoProductos } from "@/lib/fetchApi"
import TarjetaProducto from "./TarjetaProducto"

export default async function Dashboad() {
    const results = await fetchListadoProductos()
    return (
        <div className="grid grid-cols-3 gap-5 justify-center items-center p-3">
            {
                results.map( p => <TarjetaProducto  key={p.id} productoData={p}/> )
            }
          
        </div>
    )
}