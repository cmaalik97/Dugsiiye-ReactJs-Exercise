function UserList({users}){
    console.log(users)
    return (

        <div>
            <h1>User List</h1>
            <ul>
                {
                    users.map(user =>(
                        <li key={user.id}>{user.name} ({user.email})</li>
                    ) )
                }
            </ul>
        </div>
    )
}
export default UserList;