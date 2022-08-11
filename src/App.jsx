import './App.css';
import UseEffects from './components/playground/UseEffects';
import UseReducers from './components/playground/UseReducers';

import UseStates from './components/playground/UseStates';


function App() {
  return (
    <div className="App">
      <UseStates /> 
      <UseReducers />
      <UseEffects />
    </div>
  );
}

export default App;
