import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './connections/Routes';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routing/>
    </div>
  );
}

export default App;
