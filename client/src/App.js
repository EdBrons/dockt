import './App.css';
import { Home } from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
<BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
