import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext([]);

export const UsersProvider = ({ children }) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data)
            })
            .catch(err => console.log(err))
            .finally(console.log("Concluído"))
    }, [])


    return (
        <UsersContext.Provider value={{users, setUsers}}>
            {children}
        </UsersContext.Provider>
    )


}