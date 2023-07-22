import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './connections/Routes';
import Banner from './components/Banner';
function App() {
  return (
    <div className="App">
      <Banner/>
      <Routing/>
    </div>
  );
}

export default App;
