import logo from './logo.svg'
import react from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Shell from './components/Shell'


function App() {
 return (
  <div className='app'>

         <NavBar/>
         <Shell></Shell>
       
      
  </div>
  );
  }

export default App;
