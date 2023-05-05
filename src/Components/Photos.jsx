import utsbldg5 from './images/uts-bldg5r.jpg';
import hps from './images/hps1.jpg';
import acupy from './images/acupy.jpg';
import { useState } from 'react';

const images = [acupy, utsbldg5, hps] 
const desc = [
   'Australian Catholic University, Strathfield campus, Sydney, Australia',
   'UTS Haymarket Building 5, University of Technology Sydney, Australia',
   'Homebush Public School, Homebush, NSW, Australia'
]
const alt = [ 'acu', 'uts', 'hps' ]

export default function Photos() {
   const [count, setCount] = useState(0);
  
   function handleClick() {
      setCount((count + 1) % 3); 
   }	

   function acu() {
      setCount(0); 
   }
   
   function uts() {
      setCount(1); 
   }
   
   function hps() {
      setCount(2); 
   }
   
   return (
      <div className="Photo">
      <h2>Photos</h2>
	  <p>Click Next photo button or select a photo with the name on the button</p>
      <button onClick={handleClick}>
      Next photo
      </button> |
	  <button onClick={acu}>
      Australian Catholic University
      </button> |
	  <button onClick={uts}>
      University of Technology Sydney
      </button> |
	  <button onClick={hps}>
      Homebush Public School
      </button>
	  
      <h4>{desc[count]}</h4>
      <img src={images[count]} alt={alt[count]} />
      <br />
      </div>
   );
}
