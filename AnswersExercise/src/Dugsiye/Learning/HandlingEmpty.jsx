function HandlingEmpty(){
    ///array
    let items=[]
    //object
    let user=null
    return (
        <div>
             {/* {  
            items.length > 0 ?(
                <ul> 
                {
                items.map(item=>(
                   <li>{item}</li>
                ))
                }       
                 </ul>
            ): (
                <p>items not found</p>
            )
          
        } */}


        {/* object */}
        {
            user ? <p>{user.name}</p> : ("not found object")
        }
        </div>
    )
}
export default HandlingEmpty;