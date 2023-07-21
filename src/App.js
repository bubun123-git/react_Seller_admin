
import './App.css';
import SellingComponent from './Components/SellingComponent';

let eventhandler = (event) => {
  event.preventDefault()
}

function App() {
  return (
    <form onSubmit={eventhandler}>
      <div classname="App-link">
        <h1>Seller Admin Page</h1>
        <SellingComponent></SellingComponent>

      </div>
    </form>

  );
}

export default App;
