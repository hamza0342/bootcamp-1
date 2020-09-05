import React from 'react';
import ReactDOM from 'react-dom';
import Approval from './Approval';
import './style.css';


const App = () => {
    return <div>
        <div className="first">
         <Approval name="Hamza Toor"
          id= {3}
          semester= {1}
         
         />
         </div>
         <div className="second">
             Hello from COMSATS University Islamabad
             </div>
         <div className="third">
             <Approval name="Ali"
             id= {8789}
             semester= {3}
             />
         </div>
    </div>
    
       
    

}
ReactDOM.render(<App />, document.getElementById('root'));
