import { useContext } from "react"
import { UsersContext } from "../../Provider/UsersProvider"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Bars } from 'react-loading-icons'
import { Button } from '@material-ui/core'
import { UserButton, Container, Wrapper } from "./styles"


const UserList = () => {

    const history = useHistory()

    const { users, isLoading } = useContext(UsersContext)

    const showUserCard = (id) => {
        history.push(`/user/${id}`)
    }

    return (
        <>
            {isLoading ?
                <Bars />
                :
                <Container>
                    <Wrapper>
                        <h3>USER LIST</h3>
                        <Button variant="contained" color="primary">New User</Button>
                    </Wrapper>
                    <li className="user__list">
                        {users.map((x, y) => {
                            return <UserButton key={y} onClick={() => showUserCard(x.id)} >{x.name}</UserButton>
                        })}
                    </li>
                </Container>
            }
        </>
    )
}

export default UserList