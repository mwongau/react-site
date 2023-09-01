import React from 'react';
import './css/links.css';
import Header from './Components/Header';
import CV from './Components/CV';
import Privacy from './Components/Privacy';
import Home from './Components/Home';
import Photos from './Components/Photos';
import { Link, Route, Routes } from "react-router-dom";

export default function App() {
    return (	
	<div>
	<Header name="M Wong" sub_title="My personal site" />	
	<nav className="Links">
	   <Link to="/"> HOME </Link> | 
	   <Link to="resume"> CV </Link> | 
	   <Link to="photos"> PHOTOS </Link> | 
	   <Link to="privacy"> PRIVACY</Link>
	</nav> 		
	<Routes>
       <Route path="/" element={<Home />} />
       <Route path="resume" element={<CV />} />   	
	   <Route path="photos" element={<Photos />} />
	   <Route path="privacy" element={<Privacy />} />
	</Routes>
    </div>
    );
}
