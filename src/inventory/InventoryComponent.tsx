// const panel = (): JSX.Element => {
//         return (
//         <div style={{ marginLeft: "10px" }}>
//             <div style={{ display: "flex" }}>
//                 <h2 style={{ marginBottom: "10px", marginTop: "10px" }}>Inventory</h2>
//                 <button onClick={() => setManager(!manager)} style={{ height: "min-content", alignSelf: "center", marginLeft: "15px" }}>Manage</button>
//                 <h4 style={{ marginLeft: "15px", marginTop: "10px", marginBottom: "10px", alignContent: "center" }}>Capacity: {capacity}</h4>
//                 <h4 style={{ marginLeft: "15px", marginTop: "10px", marginBottom: "10px", alignContent: "center" }}>Total Stock: {getTotalStock()}</h4>
//                 <h4 style={{ marginLeft: "15px", marginTop: "10px", marginBottom: "10px", alignContent: "center" }}>Available Capacity: {capacity - getTotalStock()}</h4>
//             </div>
//             {manager &&<div className="manager-div" >
//                 <h4 style={{ marginTop: "5px", marginBottom: "10px", paddingRight: "10px" }}>Auto Markup: </h4>
//                 <div className="markup-container">
//                     <button onClick={() => setAutoMarkup(autoMarkup-0.05)}>-</button>
//                     <input type="text" value={autoMarkup.toFixed(2)}></input>
//                     <button onClick={() => setAutoMarkup(autoMarkup+0.05)}>+</button>
//                 </div>
//             </div>}
//         <div className="product-list">
//             {products.map((product, index) => (
//                 <div key={index} className="product-square" onClick={() => sell(index)}>
//                     <div style={{ 
//                         width: "inherit", 
//                         display: "flex", 
//                         justifyContent: "space-between", 
//                         fontSize: "small"
//                     }}>
//                         <div>{product.usd(product.getMarketValue())}</div>
//                         <div>{product.getInStock()}</div>
//                             <div>{product.getDemand(product.getValue()*(1+autoMarkup)).toFixed(2)}</div>
//                     </div>
//                         <div style={{ fontSize: "xxx-large" }}>{product.getIcon()}</div>
//                         <div style={{ fontSize: "medium", color: product.getValue() * (1 + autoMarkup) > product.getValue() ? "green" 
//                             : product.getValue() * (1 + autoMarkup) < product.getValue()
//                                 ? "red"
//                                 : "black"}}>{product.usd(product.getValue()*(1+autoMarkup))}</div>
//                         <div className="product-info">
//                             <div className="popup">
//                                 <div className="product-name">{product.getName()}</div>
//                             </div>
//                         </div>
//                         <div className="product-info" style={{ transform: "translate(0%, -50%)"}}>
//                             <div className="popup">
//                                 <div className="product-name">{product.getName()}</div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )};

export {};
