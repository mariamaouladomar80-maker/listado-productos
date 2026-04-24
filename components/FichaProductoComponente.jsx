import Link from "next/link";

export default function FichaProductoComponente({producto}){
    return(
        <div>
            <Link href="/">Volver a la página</Link>
            <p>{producto.description} producto={producto}</p>
            
        </div>
    )
}