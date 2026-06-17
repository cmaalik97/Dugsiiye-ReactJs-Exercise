 export const intialState=[];
export const reducer= (state , action)=>{
    switch(action.type){
        case "add":
            return [...state , action.payload]
        case "toggol":
            return state.map((todo)=>todo.id === action.payload ? {...todo, completet : !todo.completet}: todo)
        case "delete":
            return state.filter((todo)=> todo.id !== action.payload )
        default:
            return state
    }
}