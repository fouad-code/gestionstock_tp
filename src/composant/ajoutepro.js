import { useState } from "react";
export default function Ajouteproduct({funAddProduct}) {

// --------------------------------------------------------probleme :
// chof kayn wa7d lprincipe lihowa "LIFTING STATE UP" 
// wlihowa khassk tdir wa7d parent
//  compo likijma3lk mabin had les compo 
//  likikhdmo bhad data so nta had usestate
//  makhasx tcreyeha hnaya khask t7tha f a9rab parent 
//  likijma3lk les compo likhkhdmo bhad state wlihowa app.js fhad l7ala 
// (parentcompo ki7aawl i3ti lhad les compo ikhdmo bhad data)
//------------------------------------------------------------------
// const [products, setProducts] = useState([]);

  const [name, setName] = useState("");

  function addProduit() {
    // setProducts([...products, name]);
    funAddProduct(name);
    setName("");
  }

  return (
    <div style={{display:"block"}}>
      <h1>Liste des produits</h1>

      <input 
        type="text" 
        placeholder="Nom du produit"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '15px 20px',
          fontSize: '16px',
          border: '2px solid #e0e0e0',
          borderRadius: '12px',
          outline: 'none',
          transition: 'all 0.3s',
          fontFamily: 'inherit'
        }}
      />

      <button onClick={addProduit} 
         style={{
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          alignItems: 'center',
          // justifyContent: 'center',
          gap: '8px'
        }}
      >Ajouter</button>


      {/* <Affichageproduct liste={products} /> */}

    </div>
  );
}