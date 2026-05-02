export async function fetchListadoProductos() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error en la petición:", error);
    return []; // ✅ Devuelve array vacío en caso de error
  }
}

export async function fetchProducto(idProducto) {
  try {
    if (!idProducto) {
      throw new Error("ID de producto no válido");
    }

    const res = await fetch(`https://fakestoreapi.com/products/${idProducto}`); // ✅ Sin espacio

    if (!res.ok) throw new Error(`Error: ${res.status}`);
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error en la petición: ", error);
    return null;
  }
}