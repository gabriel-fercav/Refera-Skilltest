import { Container, ButtonWrapper, Register } from "./styles";
import { Button } from "@material-ui/core"
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UsersContext } from "../../Provider/UsersProvider";

export const UserForm = () => {

    const { users, setUsers } = useContext(UsersContext)
    const history = useHistory()

    const createTemplate = (data) => {
        console.log(users.length+1)
        let user = {
            id: users.length + 1,
            name: data[0],
            age: data[1],
            email: data[2],
            phone: data[3],
            cpf: data[4],
            address: {
                city: data[5],
                street: data[6],
                suite: data[7],
                zipcode: data[8]
            },
            company: {
                name: data[9]
            },
            website: data[10]
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
    }

    return (
        <Container>
            <h3>Registration Form</h3>
            <form className="user__form" onSubmit={(e) => handleSubmit(e)}>
                <Register name="name" placeholder="Name" />
                <Register name="age" placeholder="Age" />
                <Register name="email" placeholder="Email" />
                <Register name="phone" placeholder="Phone" />
                <Register name="cpf" placeholder="CPF" />
                <Register name="city" placeholder="City" />
                <Register name="street" placeholder="Street" />
                <Register name="suite" placeholder="Suite" />
                <Register name="zipcode" placeholder="Zipcode" />
                <Register name="company" placeholder="Company" />
                <Register name="website" placeholder="Website" />
                <ButtonWrapper>
                    <Button variant="contained" onClick={() => history.push("/")}>Cancel</Button>
                    <Button variant="contained" color="primary" type="submit">Save</Button>
                </ButtonWrapper>
            </form>
        </Container>
    )
}

export default UserForm