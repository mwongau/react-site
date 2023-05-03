import utsbldg5 from './images/uts-bldg5r.jpg';
import hps from './images/hps1.jpg';
import acupy from './images/acupy.jpg';

function Photos() {
  return (
    <div className="Photo">
	<h1>Photos</h1>
	<h3>UTS Haymarket Building 5, University of Technology Sydney</h3>	
	<p>UTS Haymarket Building 5 of University of Technology Sydney, in city of 
	   Sydney, NSW, Australia.</p>
	<img src={utsbldg5} alt="UTS" />
	<br /><br />
	
	<h3>Homebush Public School, Homebush, NSW, Australia</h3>
	<p>It is a primary school in Homebush, NSW, Australia.</p>
	<img src={hps} alt="Homebush Public School" />
	<br /><br />
	
	<h3>Australian Catholic University, Strathfield campus</h3>	
	<img src={acupy} alt="ACU" />
	<br /><br />	
    </div>
  );
}
export default Photos;	
