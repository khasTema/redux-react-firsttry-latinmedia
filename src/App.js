// import logo from './logo.svg';
import { bindActionCreators } from 'redux';
import './App.css';
import { useSelector, useDispatch  } from 'react-redux'; 
import { actionCreators } from './state/index'; 

function App() {

  const account = useSelector((state) => state.account)
  // console.log(account)
  const dispatch = useDispatch()

  const {depositMoney, withdrawtMoney} = bindActionCreators(actionCreators, dispatch)
  // console.log(AC)

  return (
    <div className="App">
       <h1>{account}</h1>
       <button onClick={() => depositMoney(1000)}>Deposit 1000</button>
       <button onClick={() => withdrawtMoney(100)}>Withdraw 100</button>
    </div>
  );
}

export default App;
