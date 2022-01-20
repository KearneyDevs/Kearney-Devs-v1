import './App.css';

import Header from './components/header/Header';
import Work from './components/work/Work';
import Bio from './components/bio/Bio';
import Interests from './components/interests/Interests';
import WebLinks from './components/weblinks/Weblinks';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <h1>Shane Kearney</h1>
      <p>KearneyDevs - Front-End Developer</p>

      <Work />
      <Bio />
      <Interests />
      <WebLinks />
      
      <Footer />
    </div>
  );
}

export default App;
