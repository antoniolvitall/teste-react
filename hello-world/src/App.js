// components

import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';

// style / css

import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Hello World react</h1>
      <p class='estilo'>emmet funcionou</p>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
    </div>
  );
}

export default App;
