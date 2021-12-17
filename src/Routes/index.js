import { Route, Switch } from 'react-router-dom'
import StartPage from '../Pages/StartPage'
import UserCardPage from '../Pages/UserCardPage'
import RegistrationPage from '../Pages/RegistrationPage'

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <StartPage />
            </Route>
            <Route path="/user/:id">
                <UserCardPage />
            </Route>
            <Route path="/register">
                <RegistrationPage />
            </Route>
        </Switch>
    )
}

export default Routes