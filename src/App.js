import { sections } from './data';
import Components from './components';

function App() {
  
  return (
    <div className="App">
      {sections.map(section => Components(section))}
    </div>
  );
}

export default App;
