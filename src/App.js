import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import Test from './Components/Test/Test';

function App() {
  const count = () => {
    console.log('yes');
  };
  return (
    <div className="App">
      {/* <Menubar></Menubar>
      <h1 className='text-success'>MNA Fakestore</h1>
      <h6 className='text-danger'>An Online Shop</h6> */}
      <h3>0</h3>
      <Test count={count}></Test>
    </div>
  );
}

export default App;
