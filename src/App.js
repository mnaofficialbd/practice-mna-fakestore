import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <h1 className='text-success'>MNA Fakestore</h1>
      <h6 className='text-danger'>An Online Shop</h6>
    </div>
  );
}

export default App;
