import "../css/notice.css"
import { useState } from 'react';

import Cookies from 'js-cookie';

export default function Home() {
  const [text, setText] = useState(true);
  function handleClick(){
    //document.cookie = "cookiesButtonClicked=clicked"; 
	Cookies.set('cookiesButtonClicked', 'clicked', { expires: 1 });
	setText(false);
  }	
  
  
  const value = Cookies.get('cookiesButtonClicked');
  let mystyle;
  if (value === "clicked")
    mystyle = {display:"none"};
  else {
    mystyle = {display:"inline"};
  }
  
  return (
	<div className="Home">
		<h2>Home</h2>		
		<div className="Intro">
		<p>Welcome to my personal website. I am a researcher in computer vision & machine
		learning with Ph.D in Computer Science, M.Sc & B.Sc(Hons.) in Electronic Engineering.
		I am also interested in web app development. This site is built by using React, Vite, 
		Javascript, HTML and CSS. This site is hosted by GitHub Pages.</p>					
		</div>
		
		<p class="Notice" style={mystyle}> This site uses cookies to improve your browsing experience. If you
        continue to use this site, it will be assumed you agree to the use of cookies. 
		<button onClick={handleClick}>OK</button></p>
    </div>	
  );
}
