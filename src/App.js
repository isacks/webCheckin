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
      id: 1210,
      name: 'EDUARDO DE LEON',
      agency: 'BOOKING',
      reserve: 'RFS5324',
      country: 'PANAMA',
      roomType: 'JS',
      roomNum: '816',
      checkinDate: '07/06/2021',
      checkoutDate: '09/06/2021'
    },
    {
      id: 1211,
      name: 'DAVID DE LEON',
      agency: 'PARTICULAR',
      reserve: 'RFS5325',
      country: 'COLOMBIA',
      roomType: 'JS',
      roomNum: '818',
      checkinDate: '07/06/2021',
      checkoutDate: '12/06/2021'
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
            clients={clients}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
