import { CardContainer } from "./styles";
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import success from "../../Assets/success.svg"
import { AiFillCloseCircle } from 'react-icons/ai'

export const SuccessPopup = () => {

    const history = useHistory()

    return (
        <CardContainer>
            <AiFillCloseCircle onClick={() => history.push("/")}/>
            <h1>Success!</h1>
            <img src={success} alt="sucess_message"/>
        </CardContainer>
    )
}

export default SuccessPopup