
import './'; // Import CSS file
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
