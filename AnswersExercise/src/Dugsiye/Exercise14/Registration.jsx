import { useReducer } from "react";

const intialState={
    step:1,
    firstName:"",
    lastName:"",
    email:"",
    phone:""
};
const reduce=(state, action)=>{
    switch(action.type){
        case "Update_field":
            return {...state , [action.field] : action.value,};
        case "Next_step":
            return {...state, step:state.step+1,};
        case "Prev_step":
            return {...state, step:state.step -1,}
        case "Reset_form":
            return intialState;
        default:
            return state;
        
    }

}
function Registration(){
    const [state , dispatch]=useReducer(reduce , intialState);
    const handleChange=(e)=>{
        dispatch({type: "Update_field", 
            field:e.target.name,
            value:e.target.value,
        });
    };
    const prevState=(e)=>dispatch({type : "Prev_step"})
    const nextStep=(e)=>dispatch({type:"Next_step"})

    const resetForm=()=>dispatch({type: "Reset_form"})

    const handleSubmit=()=>{
        alert("form Submitted successfully")
        resetForm();
    }
    return(
        <div>
            <h1>Multi-Step Registration</h1>
            {state.step === 1 && (
                    <div>
                        <h2>Step 1 : Profile</h2>
                        <label>
                            First Name:
                            <input 
                            type="text"
                            name="firstName"
                            value={state.firstName}
                            onChange={handleChange}
                            />
                        </label>
                        <br  />
                        <label>
                            List Name:
                            <input 
                            type="text"
                            name="lastName"
                            value={state.lastName}
                          onChange={handleChange}
                            />
                        </label>

                        <br />

                        <button onClick={nextStep}>Next</button>
                    </div>
                
                )
            }

            {/* step 2 */}
            {state.step ===2 &&(
                <div>
                    <h2>Step 2: Contact</h2>
                    <label>
                        Email: 
                        <input type="email" name="email" value={state.email} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Phone: 
                        <input type="tel" name="phone" value={state.phone} onChange={handleChange} />
                    </label>
                    <br />
                    <button onClick={prevState}>Back</button>
                    <button onClick={nextStep}>Next</button>
                </div>
            )
            }

            {/* step 3 */}
            {state.step === 3 && (
                <div> 
                    <h2>Step 3: Review</h2>
                    <p><strong>First Name:</strong> {state.firstName} </p>
                    <p><strong>Last Name:</strong>{state.lastName}</p>
                    <p><strong>Email:</strong>{state.email}</p>
                    <p><strong>Phone:</strong>{state.phone}</p>
                    <button onClick={prevState}>Back</button>
                    <button onClick={handleSubmit}>Confirm</button>
                </div>
            )

            }

            {state.step >3 &&(
                <div>
                    <h2>Form Complated</h2>
                    <button onClick={resetForm}>Start Over</button>
                </div>
            )}

        </div>
    )
}

export default Registration;