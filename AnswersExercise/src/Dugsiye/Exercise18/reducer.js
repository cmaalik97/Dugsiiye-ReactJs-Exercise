export const intialValue=[]
export const reducer=(state, action)=>{
    switch(action.type){
        case "add":
            return [...state, action.payload]
        case "edit":
            return state.map((contact)=> contact.id === action.payload.id ? {...contact, ...action.payload}:contact)
        case "toggol":
            return state.map((contact)=>contact.id === action.payload ? {...contact , complete : !contact.complete}:contact)
        case "delete":
            return state.filter(contact=> contact.id !== action.payload)
        default:
            return state
    }
}