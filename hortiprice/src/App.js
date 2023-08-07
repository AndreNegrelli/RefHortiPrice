import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './connections/Routes';
import Banner from './components/Banner';
import Foot from './components/Foot';
function App() {
  return (
    <div className="App">
      <Banner/>
      <Routing/>
      <Foot/>
    </div>
  );
}

export default App;
