import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState} from 'react';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Clients from './components/Clients';
import CheckinForm from './components/CheckinForm';
import Confirmation from './components/Confirmation';


function App() {

  const [clients, setClients] = useState([
    {
      name: '',
      agency: '',
      country: '',
      roomType: '',
      roomNum: '',
      chechinDate: '',
      checkoutDate: ''
    }
  ]);

  const addClient = (data) => {
    console.log(data)
  }

  return (
    <Router>
      <Header />
      <MenuBar />
      <Switch>
        <Route path="/register">
          <CheckinForm 
            addClient = {addClient}
          />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route path="/">
          <Clients
            clients = {clients}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
