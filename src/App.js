//libraries
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
//styles
import './style/normalize.scss'
import './style/Global.scss'
import './style/_animations.scss'
//components
import Dashboard from './components/Dashboard/Dashboard'
import ErrorPage from './components/ErrorPage/ErrorPage'
import PrivateRoute from './router/PrivateRoute'
import LogIn from './components/LogIn/LogIn'
import LandingPage from './components/LandingPage/LandingPage'
import Branches from './components/Branches/Branches'
import Menu from './components/Menu/Menu'
import Reservations from './components/Reservations/Reservations'
import Register from './components/Register/Register'
import Configuration from './components/Configuration/Configuration'
//personal
import { UserContextProvider } from './context/UserContext/UserContext'

function App() {
  return (
    <>
      <Toaster />
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path="/home" component={LandingPage} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/profile" component={() => <h1>Profile</h1>} />
            <PrivateRoute exact path="/reservations" component={Reservations} />
            <PrivateRoute exact path="/config" component={Configuration} />
            <PrivateRoute exact path="/branches" component={Branches} />
            <PrivateRoute exact path="/menu" component={Menu} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      </UserContextProvider>
    </>
  )
}

export default App
