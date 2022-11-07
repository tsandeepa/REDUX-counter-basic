import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';


function App() {

  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.logged)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Counter is : {counter}</h2>
        <div>
          <button onClick={() => dispatch(decrement(2))}>-</button>
          <button onClick={() => dispatch(increment(2))}>+</button>
        </div>

        <h2>Is the user logged : {logged.toString()}</h2>
        <div>
          {
            logged ? <button onClick={() => dispatch(signIn())}>Sign Out </button> :
              <button onClick={() => dispatch(signIn())}>Sign In </button>
          }


        </div>

      </header>
    </div>
  );
}

export default App;
