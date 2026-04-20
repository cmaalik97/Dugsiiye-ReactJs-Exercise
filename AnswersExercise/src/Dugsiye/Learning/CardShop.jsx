import { useState } from "react";

function CardShop(){
    //items
    const [items , setItems]=useState([])
    //item Name
    const [itemName , setItemName]=useState("")
    //item Price
    const [itemPrice , setItemPrice]=useState("")


    //Adding Items
   const AddItemsBtn=()=>{

    if(itemName !== "" && itemPrice !== ""){
        const newItem={
            id:Date.now(),
            name:itemName,
            price:parseFloat(itemPrice),
            quantity:1
        }
         console.log(newItem)
         setItems([...items,newItem])
         setItemName("")
         setItemPrice("")
    }
   
   }
   //removing item
   const removeItem=(id)=>{
    const updateItems=items.filter(item=>(item.id !== id))
    setItems(updateItems)
    // console.log(updateItems)
   }

   //Adding quantity
   const increaseItem=(id)=>{
    const updateItems=items.map(item=>(
        item.id==id ? {...item, quantity:item.quantity +1}:item
       
    ))
    setItems(updateItems)
   }
   const decreaseItem=(id)=>{
    const updateItems=items.map(item=>(
        item.id === id && item.quantity >0 ? {...item, quantity:item.quantity -1}:item
    ))
    setItems(updateItems)

   }
   //total price
   const totalPrice=items.reduce((total, item)=>
    total + item.price * item.quantity,0)
    return <>
    <h1>Shopping Items</h1>
        <div>
            <h2>Add Items</h2>
            <input type="text"
            placeholder="Item Name"
            onChange={(e)=>setItemName(e.target.value)}
            value={itemName}

             />
             <input type="number"
             placeholder="Item Price"
             onChange={(e)=>setItemPrice(e.target.value)}
             value={itemPrice}
              />

              <button onClick={AddItemsBtn}>Add Item</button>
        </div>

        
            <ul>
            {
                items.map(item=>(
                    <li key={item.id}>
                        <strong>{item.name}</strong>:
                        ${item.price.toFixed(2)}

                        <div>
                            Quantity: <button onClick={()=>decreaseItem(item.id)}>-</button>
                                {item.quantity}
                                <button  onClick={()=>increaseItem(item.id)}>+</button>
                                
                        </div>
                        <button onClick={()=>removeItem(item.id)} >Remove</button>

                    </li>
                ))
            }
            </ul>
            <h4>Total Price:{totalPrice}</h4>
           
        
       
    </>
}
export default CardShop;