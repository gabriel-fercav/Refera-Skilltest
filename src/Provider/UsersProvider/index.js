import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext([]);

export const UsersProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data)
            })
            .catch(err => console.log(err))
            .finally(setIsLoading(false))
    }, [])


    return (
        <UsersContext.Provider value={{users, setUsers, isLoading, setIsLoading}}>
            {children}
        </UsersContext.Provider>
    )


}