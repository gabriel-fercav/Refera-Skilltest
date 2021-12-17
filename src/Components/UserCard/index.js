import { CardContainer, Wrapper, NotFound } from "./styles";
import { useParams } from "react-router-dom"
import { Button } from "@material-ui/core"
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UsersContext } from "../../Provider/UsersProvider";
import not_found from "../../Assets/not_found.svg"

export const UserCard = () => {

    const { users } = useContext(UsersContext)
    const history = useHistory()
    const params = useParams();

    let selectedUser = users.filter(x => x.id === Number(params.id))[0]
    let address = selectedUser ? selectedUser.address : undefined

    return (
        <>
            {
                selectedUser !== undefined ?
                    <CardContainer>
                        <h2 className="user__name" > {selectedUser.name.toUpperCase()}</h2>
                        <p><span>Email:</span> {selectedUser.email}</p>
                        <p><span>Idade:</span> {selectedUser.age ? selectedUser.age : "Não informado"}</p>
                        <p><span>CPF:</span> {selectedUser.cpf ? selectedUser.cpf : "Não informado"}</p>
                        <p><span>Telefone:</span> {selectedUser.phone}</p>
                        <p><span>Website:</span> {selectedUser.website}</p>
                        <p><span>Endereço:</span> {address.street}, {address.suite} - {address.city}</p>
                        <p><span>CEP:</span> {address.zipcode}</p>
                        <p><span>Empresa:</span> {selectedUser.company.name}</p>
                        <Wrapper>
                            <Button onClick={() => history.push("/")} variant="contained" color="primary">Return</Button>
                        </Wrapper>
                    </CardContainer >
                    :
                    <>
                        <NotFound src={not_found} />
                        <h2>Sorry :( We couldn't find what you're looking for</h2>
                        <Wrapper>
                            <Button onClick={() => history.push("/")} variant="contained" color="primary">Return</Button>
                        </Wrapper>
                    </>
            }
        </>
    )
}

export default UserCard