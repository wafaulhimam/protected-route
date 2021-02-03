// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute path="/about" component={About} />
        <Route path="*" component={() => 'Kosong gaes'} />
      </Switch>
    </Router>
  );
}

export default App;
