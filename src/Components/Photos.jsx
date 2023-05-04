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
   return (
      <div className="Photo">
      <h2>Photos</h2>
      <button onClick={handleClick}>
      Next photo
      </button>
      <h4>{desc[count]}</h4>
      <img src={images[count]} alt={alt[count]} />
      <br />
      </div>
   );
}
