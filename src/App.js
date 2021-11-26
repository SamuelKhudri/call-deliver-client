// import logo from '../src/images/logo.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AddService from './Components/AddService/AddService';
import AuthProvider from './Components/Contex/AuthProvider';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageOrd from './Components/MansgeOrd/ManageOrd';
import Myorder from './Components/Myorder/Myorder';
import Notfound from './Components/Notfound/Notfound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import UpdatedUser from './Components/UpdatedUser/UpdatedUser';
// import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          {/* link header nav */}
          <br />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/myorder">
              <Myorder></Myorder>
            </Route>
            <Route path="/manageorder">
              <ManageOrd></ManageOrd>
            </Route>
            <Route path="/orders/update/:id">
              <UpdatedUser></UpdatedUser>
            </Route>
            <Route path="/addservice">
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/details/:servicesid">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>

          </Switch>
          <br />
          <Footer></Footer>
          {/* link footer  */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
