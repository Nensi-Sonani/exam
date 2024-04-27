// import logo from './logo.svg';
import { Provider } from 'react-redux';
import Add from './Add';
import './App.css';
import Display from './Display';
import store from './Redux/Store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Add />
        <Display />
      </div>
    </Provider>

  );
}

export default App;
