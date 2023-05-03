import React from 'react';
import './App.css';

import Header from './Components/Header';
import CV from './Components/CV';
import Privacy from './Components/Privacy';
import Home from './Components/Home';
import Photos from './Components/Photos';
import { Link, Route, Routes } from "react-router-dom";

function App() {
    return (	
	<div className="App">
	<Header name="M Wong" sub_title="My personal site" />	
	<nav className="Links">
	<Link to="/">HOME</Link> | <Link to="resume">CV</Link> | <Link to="photos">Photos</Link> | 
	<Link to="privacy"> Privacy</Link>
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
export default App;
