// components

import FirstComponent from './components/FirstComponent'

// style / css

import './App.css';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <h1>Hello World react</h1>
      <p class='estilo'>emmet funcionou</p>
      <FirstComponent/>
      <TemplateExpressions/>
    </div>
  );
}

export default App;
