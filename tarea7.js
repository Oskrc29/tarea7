/*  TAREA 7 */

// creo arreglo
const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
  ];
  
  // console.log("Arreglo original");
  // console.log(products);
//Respuesta 1
  //creo funcion para saber que productos tienen descuento
  function obtenerDiscount(arr) {
    return arr.filter(prod => prod.discount > 0);
  }
  
  let resultado = obtenerDiscount(products);
  console.log("Productos con descuento:");
  console.log(resultado);

/************************************************************************/
//Respuesta 2
// creo funcion para calcular el precio con el descuento
function priceAfterDiscount(arr) {
  return arr.map(prod => ({
    name: prod.name,
    priceAfterDiscount: (prod.price - (prod.price * (prod.discount / 100))).toFixed(2)
  }));
}


let resultado2 = priceAfterDiscount(products);

console.log("Precios de los productos con descuento:");
console.log(resultado2);

/************************************************************************/
//Respuesta 3
// creo funcion para obtner los productos con bajo stock
const stockBajoProducts = [];

for (let product of products) {
  if (product.stock < 5) {
    stockBajoProducts.push(product);
  }
}

console.log("Productos con stock bajo:");
console.log(stockBajoProducts);


/************************************************************************/
// //Respuesta 4
// Creo funcion para actualizar el stock
function actualizarStock(nombreProducto, cantidad) {
  try {
    // busco el producto
    const producto = products.find(p => p.name.toLowerCase() === nombreProducto.toLowerCase());
    
    // si no encuentro el producto muestro error
    if (!producto) {
      throw new Error(`El producto "${nombreProducto}" no existe`);
    }
    
    // actualixo el stock
    producto.stock += cantidad;
    console.log(`El stock de "${producto.name}" se actualizo a ${producto.stock}.`);
  } catch (error) {
    // muestro un error
    console.error(error.message);
  }
}

actualizarStock("Laptop", 100);  // actualizo stock cambiando el numero y si el producto no existe da errpr


/************************************************************************/
//Respuesta 5

// creor funcion para contar cuantos productos hay por categoría
function contarProductosPorCategoria(productos) {
  const resumen = {};

  for (const producto of productos) {
    const categoria = producto.category;
    
    if (!resumen[categoria]) {
      resumen[categoria] = 0;
    }
    
    resumen[categoria]++;
  }

  return resumen;
}

// muestro resultado
console.log("Resumen por Categoria:");
const resumenCategorias = contarProductosPorCategoria(products);
console.log(resumenCategorias);


/************************************************************************/