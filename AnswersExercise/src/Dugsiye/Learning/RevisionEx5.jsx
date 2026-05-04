import { useState } from "react";

function RevisionEx5(){
    //Product
    const [products, setProducts]=useState([])
    //ProductName
    const [productName, setProductName]=useState("")
    //product price
    const [productPrice , setProductPrice]=useState(0)
   
    const handle=()=>{

        if(productName && productPrice != ""){
            const newProduct={
                id:Date.now(),
                name:productName,
                price:parseFloat(productPrice),
                quantity:1
            }

            setProducts([...products, newProduct])
            setProductName("")
            setProductPrice("")
            console.log(products)
        }
        else{
            alert("fill spaces clearly")
        }
    }

    const decrement=(id)=>{
        const updateProducts=products.map(product=>(
           product.id == id && product.quantity > 0 ? {...product ,quantity : product.quantity - 1 } : product
        ))
        setProducts(updateProducts)

    }
    const increment=(id)=>{
        const updateProducts = products.map(product=>(
            product.id === id ?{...product, quantity : product.quantity +1}:product
        ))
        setProducts(updateProducts)
    }

    const remove=(id)=>{
        const updateProducts = products.filter(product=>(
            product.id != id 
        ))
        setProducts(updateProducts)
    }

    const totalPrice=products.reduce((total, product)=>
        total + product.price * product.quantity,0

    )
    return (
        <>
        <h1>Simple Shopping Cart</h1>
        <div>
            <h3>Add a Product</h3>
            <input type="text"
                placeholder="Product Name"
                onChange={(e)=>setProductName(e.target.value.trim())}
                value={productName}
             />
            <input type="number" 
            placeholder="Product Price"
            onChange={(e)=>setProductPrice(e.target.value)}
            value={productPrice}
             />
            <button onClick={handle}>Add to Cart</button>
        </div>
        {
            products.length > 0 ?(
                 <div>
                    <h3>Product in Cart</h3>
          <ul>
            {
               products.map(product=>(
                <li>
                    <strong>{product.name}</strong>:${product.price.toFixed(2)}
                    <div>
                        Quantity:
                        <button onClick={()=>decrement(product.id)}>-</button>
                        {product.quantity}
                        <button onClick={()=>increment(product.id)}>+</button>
                    </div>
                    <button onClick={()=>remove(product.id)}>Remove</button>


                </li>
               
               ))
                
              
            }
          </ul>
          <h4>Total Price : {totalPrice}</h4>
        </div>
            ):
            <p>The cart is empty</p>
           

        }
        
        </>
    )
}
export default RevisionEx5;