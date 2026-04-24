export async function fetchListadoProductos() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error en la petición:", error);
    }
}


// Trae los datos de un producto 
export async function fetchProducto(idPoducto) {
  try {
    const res = await fetch('https://fakestoreapi.com/products${idProducto}'
       
    );
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error en la petición: ", error);
  }
}