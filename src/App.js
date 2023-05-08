import GlobalStyle from "./globalStyles";
import { AppContainer } from "./components/styled/Styles";
import Theme from "./Theme";
import { sections } from "./data";
import Components from "./components";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Theme>
      <div className="App">
        <AppContainer>
          <GlobalStyle />
          {sections.map((section) => Components(section))}
        </AppContainer>
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
