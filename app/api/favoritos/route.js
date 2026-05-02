// Datos estáticos en memoria
// semula a una base de datos  falsa  
let favoritos = [
    { id: 1, title: "Producto Favorito 1", price: 29.99, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }
];

// GET /api/favoritos
// solo lee datos  
// se ejecuta cuando hacemos  fetch('/api/favoritos') . y devuelve  => Response.json(favoritos)  con el array de favoritos  
export async function GET() { 
    return Response.json(favoritos);
}

// POST /api/favoritos
// se ejecuta cuando hacemos fetch('/api/favoritos', { method: 'POST', body: JSON.stringify(nuevoFavorito) })
export async function POST(request) {
    try {
        // lee lo que le enviamos desde el cliente (nuevo favorito) y lo convierte a objeto JS 
        const producto = await request.json();
        
        // Verificar si ya existe
        // busca si ya existe un producto con el mismo id en el array de favoritos. Si lo encuentra, devuelve un error 400 con un mensaje indicando que el producto ya está en favoritos. Si no lo encuentra, agrega el nuevo producto al array de favoritos y devuelve el array actualizado con un status 201.
        const exists = favoritos.find(f => f.id === producto.id);
        // si existe un producto con el mismo id, devuelve un error 400 con un mensaje indicando que el producto ya está en favoritos.  
        if (exists) {
            return Response.json(
                { message: "El producto ya está en favoritos" },
                { status: 400 }
            );
        }
// si no existe, agrega el nuevo producto al array de favoritos y devuelve el array actualizado con un status 201.
        favoritos.push(producto);
        return Response.json(favoritos, { status: 201 });
    } catch (error) {
        return Response.json(
            { message: "Error al añadir favorito" },
            { status: 500 }
        );
    }
}