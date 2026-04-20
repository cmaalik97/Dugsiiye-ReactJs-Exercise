import { useState } from "react";

function Shopping(){
    //products
   const [products , setProducts]=useState([])
   //product name
   const [productName , setProductName]=useState('')
   //Price
   const [productPrice , setProductPrice]=useState('')


   const handleAddProduct=()=>{
    if(productName.trim() !=="" && productPrice.trim() !==""){
        const newProduct={
            id:Date.now(),
            name:productName,
            price:parseFloat(productPrice),
            quantity:1
        }

        setProducts([...products,newProduct])
        setProductName("")
        setProductPrice("")
       
    }
     
   }
   const removeProduct=(id)=>{
    const updateProducts=products.filter(product=>product.id != id)
    setProducts(updateProducts)
    console.log(id)
   }

   const IncreaseProduct=(id)=>{
    const updateProducts=products.map(product=>(
        product.id === id ? {...product , quantity : product.quantity+1} : product
    ))
    setProducts(updateProducts)
   }

   const decreaseProduct=(id)=>{
    const updateProducts=products.map(product=>(
        product.id === id && product.quantity >0 ? {...product , quantity: product.quantity -1}:product
    ))
    setProducts(updateProducts)
   }
   
   const totalPrice=products.reduce((total , product)=>
    total + product.price * product.quantity,0)

   return (
    <div>
        <h2>Simple Shopping Card</h2>
        <div>
            <h3>Add a Product</h3>
            <input 
            type="text"
            placeholder="Product Name"
            onChange={(e)=>setProductName(e.target.value)}
            value={productName}
             />
             <input 
             type="number" 
             min={0}
             placeholder="Price"
             onChange={(e)=>setProductPrice(e.target.value)}
             value={productPrice}
             />
             <button onClick={handleAddProduct}>Add to Cart</button>
        </div>
        {
            products.length >0 ?(
                <div>
                <h3>Products in cart</h3>
                {/* list of the products  */}
                <ul>

               
                {
                    products.map(product =>(
                    <li key={product.id}>
                        <strong>{product.name}</strong>:${product.price.toFixed(2)}

                        <div>
                            Quantity:
                            <button onClick={()=>decreaseProduct(product.id)}>-</button>
                            {product.quantity}
                            <button onClick={()=>IncreaseProduct(product.id)}>+</button>
                        </div>
                        <button onClick={()=>removeProduct(product.id)}>Remove</button>
                    </li>


                    ))
                }
                 </ul>
                 <h4>Total Price: {totalPrice} </h4>
                 </div>
            ): <p>This cart is empty.</p>
        }
    </div>
   )
}
export default Shopping;