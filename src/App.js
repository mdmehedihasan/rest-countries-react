import './App.css';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Country></Country>
      <Footer></Footer>

    </div >
  );
}



export default App;
