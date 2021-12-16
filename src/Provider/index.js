import { UsersProvider } from "./UsersProvider"

const Provider = ({ children }) => {

    return (
        <UsersProvider>
            {children}
        </UsersProvider>
    )
}

export default Provider