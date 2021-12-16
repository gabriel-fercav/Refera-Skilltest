import { useContext } from "react"
import { UsersContext } from "../../Provider/UsersProvider"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { UserButton, Container } from "./styles"


const UserList = () => {

    const history = useHistory()

    const { users } = useContext(UsersContext)

    const showUserCard = (id) => {
        history.push(`/user/${id}`)
    }

    return (
        <Container>
        <h3>User List</h3>
            <li className="user__list">
                {users.map((x, y) => {
                    return <UserButton key={y} onClick={() => showUserCard(x.id)} >{x.name}</UserButton>
                })}
            </li>
        </Container>
    )
}

export default UserList