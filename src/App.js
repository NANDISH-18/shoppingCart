import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import CustomItemProvider, { itemContext } from './itemContext';



function App() {
  // const [total, setTotal] = useState(0);
  // const [item, setItem] = useState(0);
  return (
    <CustomItemProvider>
      
        <div className='App'>
          <h2>Shopping Cart</h2>
          
            <Navbar />
            <Items />
        </div>
   

    </CustomItemProvider>
            
       
  );
}
export default App;
