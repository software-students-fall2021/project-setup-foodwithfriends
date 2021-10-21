import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import CreateRoom from './CreateRoom';
import InviteCode from './InviteCode';
import JoinRoom from './JoinRoom';
import TeamPage from './TeamPage';
import Footer from '../components/Footer';
import Header from '../components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/create' component={CreateRoom} exact />
        <Route path='/invite' component={InviteCode} exact />
        <Route path='/join' component={JoinRoom} exact />
        <Route path='/team' component={TeamPage} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
