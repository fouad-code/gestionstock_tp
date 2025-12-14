//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Ajouteproduct from './composant/ajoutepro';
import Affichageproduct from './composant/listproduct';



function App() {
  const [products, setProducts] = useState([])
  const addProduct = (newproduct) => {
    setProducts(prevProducts => [
      ...prevProducts,
      newproduct
    ]);
  };

  return (
    // <body>
    <div className='div1'>
      <div className='div2' style={{ margin: '30px' }}>
        <Ajouteproduct funAddProduct={addProduct} />
      </div>
      <div className='div3' style={{}}>
        <Affichageproduct liste={products} />

      </div>
  
    </div>
    // </body>
  );
}

export default App;
