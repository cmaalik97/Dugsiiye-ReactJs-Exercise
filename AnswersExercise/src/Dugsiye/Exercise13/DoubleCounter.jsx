import { useReducer } from "react";


const intialState={
    counterA:0,
    counterB:0,
};

const reducer=(state , action)=>{
    switch(action.type){
        case "Increament A":
            return {...state, counterA : state.counterA + 1}
        case "Decreament A":
            return {...state, counterA : state.counterA - 1}
        case "Increament B":
            return {...state, counterB : state.counterB + 1}
        case "Decreament B":
            return {...state, counterB: state.counterB - 1}
        case "Reset All":
            return intialState
        default:
            return state

        

    }
}
function DoubleCounter(){
    const [state , dispatch]=useReducer(reducer , intialState)
    return (
        <div>
            <h1>Double Counter</h1>
            <h2>Counter A:{state.counterA}</h2>
            <button disabled={state.counterA === 0} onClick={()=>dispatch({type : "Decreament A"})}>-A</button>
            <button onClick={()=>dispatch({type : "Increament A"})}>A+</button>

            <h2>Counter B: {state.counterB} </h2>
            <button  disabled={state.counterB===0} onClick={()=>dispatch({type : "Decreament B"})}>-B</button>
            <button onClick={()=>dispatch({type: "Increament B"})}>B+</button>
            <div>
                 <button onClick={()=>dispatch({type: "Reset All"})}>Reset Both</button>
            </div>
           
        </div>
    )
}
export default DoubleCounter;