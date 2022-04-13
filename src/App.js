import GlobalStyle from './globalStyles';
import Theme from './Theme';
import { sections } from './data';
import Components from './components';

function App() {
  
  return (
    <Theme>
      <div className="App">
        <GlobalStyle />
        {sections.map(section => Components(section))}
      </div>
    </Theme>
  );
}

export default App;
