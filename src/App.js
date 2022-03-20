import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
// import Test from './Components/Test/Test'; 

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <h1 className='text-success'>MNA Fakestore</h1>
      <h6 className='text-danger'>An Online Shop</h6>
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;
