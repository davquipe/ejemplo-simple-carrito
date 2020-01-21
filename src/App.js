import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import './App.css';

function App() {

  //  Crear lista dee products
  const [ productos, guardarProdcutos ] = useState([
    { id: 1, nombre: 'Camisa ReactJss', precio: 50 },
    { id: 2, nombre: 'Camisa VueJs', precio: 40 },
    { id: 3, nombre: 'Camisa NodeJs', precio: 30 },
    { id: 4, nombre: 'Camisa JavaScript', precio: 20 }
  ]);

  // state para carrito de compras
  const [ carrito, agregarProducto ] = useState([]);

  // Obtenere la fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
      titulo='Tienda Virtual'
      />
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto 
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
        />
        ))}
        <Carrito 
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      <Footer 
      fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
