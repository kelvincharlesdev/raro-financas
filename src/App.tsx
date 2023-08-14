import './App.css';
import { Dash } from './components/Dash';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { Transations } from './components/Transations';

function App() {
  return (
    <>
      
      <Header />
     
      <main>
        <Modal />
        <Dash />
        <Transations />
       
      </main>
      <Footer/>

    
    </>
  );
}

export default App;
