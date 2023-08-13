import './App.css';
import { Dash } from './components/Dash';
import { Header } from './components/Header';
import { Transations } from './components/Transations';

function App() {
  return (
    <>
      <Header />
      <main>
          <Dash/>

          <Transations />


      </main>
    </>
  );
}

export default App;
