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
      name: 'EDUARDO',
      surname: 'DE LEON',
      agency: 'BOOKING',
      reserve: 'RFS5324',
      country: 'PANAMA',
      roomType: 'JS',
      roomNum: '816',
      chkinDate: '07/06/2021',
      chkoutDate: '09/06/2021'
    },
    {
      id: 1211,
      name: 'DAVID',
      surname: 'DE LEON',
      agency: 'PARTICULAR',
      reserve: 'RFS5325',
      country: 'COLOMBIA',
      roomType: 'JS',
      roomNum: '818',
      chkinDate: '07/06/2021',
      chkoutDate: '12/06/2021'
    },
    {
      id: 1212,
      name: 'MOISES',
      surname: 'DE LEON',
      agency: 'EXPEDIA',
      reserve: 'RFS5326',
      country: 'VENEZUELA',
      roomType: 'SD',
      roomNum: '815',
      chkinDate: '07/06/2021',
      chkoutDate: '12/06/2021'
    }
  ]);

  const addClient = (data) => {
    clients.push(data);
    setClients([...clients]);
    console.log(clients);
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
            setClients={setClients}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
