function Notification({message}){
    console.log(message)
    return(
        <div>
            {message && <p>You Have {message.length} notification</p>}
            
        </div>
    )
}
export default Notification;