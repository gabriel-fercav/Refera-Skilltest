import { Container, ButtonWrapper, Register } from "./styles";
import { Button } from "@material-ui/core"
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UsersContext } from "../../Provider/UsersProvider";
import SuccessPopup from "../SuccessPopup";

export const UserForm = () => {

    const { users, setUsers } = useContext(UsersContext)
    const [finished, setFinished] = useState(false)
    const history = useHistory()

    const createTemplate = (data) => {
        let user = {
            id: users.length + 1,
            name: data[0],
            age: data[1],
            email: data[2] === "" ? "Não informado" : data[2],
            phone: data[3] === "" ? "Não informado" : data[3],
            cpf: data[4],
            address: {
                city: data[5],
                street: data[6],
                suite: data[7],
                zipcode: data[8]
            },
            company: {
                name: data[9] === "" ? "Não informado" : data[9]
            },
            website: data[10] === "" ? "Não informado" : data[10]
        }
        return user
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = []
        for (let item of event.target) {
            data.push(item.value)
        }
        setUsers([...users, createTemplate(data)])
        setFinished(true)
    }

    return (
        <>
            { finished ?
                <SuccessPopup />
                :
                <Container>
                    <h3>Registration Form</h3>
                    <form className="user__form" onSubmit={(e) => handleSubmit(e)}>
                        <Register name="name" placeholder="Name*" required />
                        <Register name="age" placeholder="Age*" required />
                        <Register type="email" name="email" placeholder="Email" />
                        <Register name="phone" placeholder="Phone" />
                        <Register name="cpf" placeholder="CPF*" required />
                        <Register name="city" placeholder="City*" required />
                        <Register name="street" placeholder="Street*" required />
                        <Register name="suite" placeholder="Suite*" required />
                        <Register name="zipcode" placeholder="Zipcode*" required />
                        <Register name="company" placeholder="Company" />
                        <Register name="website" placeholder="Website" />
                        <ButtonWrapper>
                            <Button variant="contained" onClick={() => history.push("/")}>Cancel</Button>
                            <Button variant="contained" color="primary" type="submit">Save</Button>
                        </ButtonWrapper>
                    </form>
                </Container>
            }
        </>
    )
}

export default UserForm