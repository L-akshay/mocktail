"use client";

import "./lib/registerGsap.js";

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cocktails from './components/Cocktails.jsx'
import About from './components/About.jsx'
import Art from './components/Art.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'
import SiteFooter from './components/SiteFooter.jsx'

const App = () => {
 return (
	<main>
	 <Navbar />
	 <Hero />
	 <Cocktails />
	 <About />
	 <Art />
	 <Menu />
	 <Contact />
	 <SiteFooter />
	</main>
 )
}

export default App
