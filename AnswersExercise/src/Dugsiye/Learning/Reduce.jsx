import { act, useReducer } from "react";
 //reduce waa function shaqada qaban lahaa
    // intial value  waa meesha wax kabilabayan
    const intialState={count : 0}
    const reduce=(state , action)=>{
        switch(action.type){
            case "Increment":
                return {count : state.count + 1}
            case "decrement" :
                return {count : state.count - 1}
            case "reset":
                return intialState;
            default :
            return state;

        }
    }
function Reduce(){
   const [state , dispatch]=useReducer(reduce , intialState)
    return (
        <div>
          <h2>Count: {state.count}</h2>
          <button onClick={()=>dispatch({type : "Increment"})}>Increament +</button>
          <button onClick={()=>dispatch ( {type: "decrement"})}>Decreament -</button>
          <button onClick={()=>dispatch ({type : "reset"})}>Reset</button>
        </div>
    )
}
export default Reduce;