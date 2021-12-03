import './App.css';
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
<BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" component={Home} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
