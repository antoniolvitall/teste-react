// components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

// style / css

import './App.css';




function App() {
  return (
    <div className="App">
      <h1>Hello World react</h1>
      <p class='estilo'>emmet funcionou</p>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge/>
    </div>
  );
}

export default App;
