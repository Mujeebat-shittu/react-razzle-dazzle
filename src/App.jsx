import Password from './components/passwordToggle';
import Counter from './components/counter';
import Theme from './components/modeToggle.jsx';
import Tab from './components/tabs';
import ColourPicker from './components/colourPicker.jsx';
import Accordion from './components/accordion.jsx';
import FAQ from './components/faq.jsx';
import Quote from './components/quote.jsx';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar.jsx'

function App () {
  
  return(
    <>

      
    <Routes>
      <Route path='/' element={<NavBar/>}/>
      <Route path='/passwordToggle' element={<Password/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/colourPicker' element={<ColourPicker/>}/>
      <Route path='/tabs' element={<Tab/>}/>
      <Route path='/modeToggle' element={<Theme/>}/>
      <Route path='/accordion' element={<Accordion/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/quote' element={<Quote/>}/>

    </Routes>
 
    
      
    </>

  );
}

export default App