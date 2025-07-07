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
      <Route path='/' element={<NavBar/>}></Route>
      <Route path='/passwordToggle' element={<Password/>}></Route>
      <Route path='/counter' element={<Counter/>}></Route>
      <Route path='/colourPicker' element={<ColourPicker/>}></Route>
      <Route path='/tabs' element={<Tab/>}></Route>
      <Route path='/modeToggle' element={<Theme/>}></Route>
      <Route path='/accordion' element={<Accordion/>}></Route>
      <Route path='/faq' element={<FAQ/>}></Route>
      <Route path='/quote' element={<Quote/>}></Route>

    </Routes>
 
    
      
    </>

  );
}

export default App