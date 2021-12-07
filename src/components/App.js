import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Instrucciones from './Instrucciones';

import '../css/index.css'
import {RUTAS} from '../helpers/constants'
import Precios from './Precios';
import Cotizador from './Cotizador';
import Header from './Header';

function App() {
  const [estadoGlobal, setEstadoGlobal] = useState({
    hamburguesas: [],
    precios: {
      pan1: '1',
      lechuga: '1',
      queso: '1',
      carne: '1',
      pan2: '1'
    }
  })


  return (
    <BrowserRouter>
      <div className="margen">

        <Header />

        <Routes>
          <Route path={RUTAS.instrucciones} element={<Instrucciones />} />

          <Route path={RUTAS.precios} element={
              <Precios
                estadoGlobal={estadoGlobal}
                setEstadoGlobal={setEstadoGlobal}
              />
            }
          />

          <Route path={RUTAS.cotizador} element={
          <Cotizador />}
          />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
