export default function Affichageproduct({liste}) {

    return (
        <div>
            <h2 style={{alignItems: 'center'}}> Produits :</h2>
            <ul>
                {liste.map((item, index) => (
                    <li key={index}
                    
                    style={{
                        padding: '15px 20px',
                        margin : '20px',
                        background: 'red',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.3s',
                        // border: editingId === product.id ? '2px solid #667eea' : '2px solid transparent'
                      }}
                    
                    >{item}</li>
                ))}
            </ul>
        </div>
    );
}