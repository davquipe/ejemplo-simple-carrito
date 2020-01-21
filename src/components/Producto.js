import React from 'react'

// sfc
const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const { nombre, precio, id } = producto;

    //agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id);
        agregarProducto([
            ...carrito,
            ...producto
        ]);    
    }

    // eliminar Producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        //colocar los productos en el State
        agregarProducto(productos)
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            
            {productos 
            ?
                (
                    <button 
                        type="button"
                        onClick={ () => seleccionarProducto(id) }
                    >Comprar</button>
                )
            :
                (
                    <button 
                        type="button"
                        onClick={ () => eliminarProducto(id) }
                    >Eliminar</button>
                )
            }
        </div>
     );
}
 
export default Producto;