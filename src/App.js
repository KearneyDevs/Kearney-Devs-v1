import GlobalStyle from "./globalStyles";
import { AppContainer } from "./components/styled/Styles";
import Theme from "./Theme";
import { sections } from "./data";
import Components from "./components";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Theme>
      <AppContainer>
        <GlobalStyle />
        {sections.map((section) => Components(section))}
      </AppContainer>
      <Footer />
    </Theme>
  );
}

export default App;
