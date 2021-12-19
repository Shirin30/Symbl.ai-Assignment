import './App.css';
import NameCards from './Components/NameCard/NameCards';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="App" style={{width:'100%',height:'100vh',backgroundColor: '#212F3D'}}>
      <Header/>
      <NameCards />

    </div>
  );
}

export default App;
