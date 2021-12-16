import { Route, Switch } from 'react-router-dom'
import StartPage from '../Pages/StartPage'
import UserCardPage from '../Pages/UserCardPage'

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <StartPage />
            </Route>
            <Route path="/user/:id">
                <UserCardPage />
            </Route>
        </Switch>
    )
}

export default Routes